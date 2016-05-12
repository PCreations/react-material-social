import React from 'react'

/**
Returns a bounding rect for _el_ with absolute coordinates corrected for
scroll positions.
The native `getBoundingClientRect()` returns coordinates for an element's
visual position relative to the top left of the viewport, so if the element
is part of a scrollable region that has been scrolled, its coordinates will
be different than if the region hadn't been scrolled.
This method corrects for scroll offsets all the way up the node tree, so the
returned bounding rect will represent an absolute position on a virtual
canvas, regardless of scrolling.
@method getAbsoluteBoundingRect
@param {HTMLElement} el HTML element.
@return {Object} Absolute bounding rect for _el_.
https://gist.github.com/rgrove/5463265
**/

function getAbsoluteBoundingRect(el) {
    var doc  = document,
        win  = window,
        body = doc.body,

        // pageXOffset and pageYOffset work everywhere except IE <9.
        offsetX = win.pageXOffset !== undefined ? win.pageXOffset :
            (doc.documentElement || body.parentNode || body).scrollLeft,
        offsetY = win.pageYOffset !== undefined ? win.pageYOffset :
            (doc.documentElement || body.parentNode || body).scrollTop,

        rect = el.getBoundingClientRect();

    if (el !== body) {
        var parent = el.parentNode;

        // The element's rect will be affected by the scroll positions of
        // *all* of its scrollable parents, not just the window, so we have
        // to walk up the tree and collect every scroll offset. Good times.
        while (parent !== body) {
            offsetX += parent.scrollLeft;
            offsetY += parent.scrollTop;
            parent   = parent.parentNode;
        }
    }

    return {
        bottom: rect.bottom + offsetY,
        height: rect.height,
        left  : rect.left + offsetX,
        right : rect.right + offsetX,
        top   : rect.top + offsetY,
        width : rect.width
    };
}

const addHoverState = (Component) => {

    class HoverableComponent extends React.Component {
        constructor(props) {
            super(props);
            this.displayName = 'HoverableComponent';
            this.state = {
                hovered: false
            }
        }
        _isInRef(e) {
            const IE = document.all?true:false
            const refRect = getAbsoluteBoundingRect(this._ref)
            let posX, posY
            if (IE) { // grab the x-y pos.s if browser is IE
                posX = event.clientX + document.body.scrollLeft
                posY = event.clientY + document.body.scrollTop
            } else {  // grab the x-y pos.s if browser is NS
              posX = e.pageX
              posY = e.pageY
            }
            // catch possible negative values in NS4
            if (posX < 0){posX = 0}
            if (posY < 0){posY = 0}

            return (posX >= refRect.left && posX <= refRect.right) && (posY >= refRect.top && posY <= refRect.bottom)
        }
        onMouseEnter(e) {
            if (this._isInRef(e)) {
                this.setState({hovered: true})
            }
        }
        onMouseLeave(e) {
            this.setState({hovered: false})
        }
        render() {
            return (
                <div
                    ref={(ref) => this._ref = ref}
                    onMouseEnter={(e) => this.onMouseEnter(e)}
                    onMouseLeave={(e) => this.onMouseLeave(e)}>
                    <Component {...this.props} {...this.state} />
                </div>
            )
        }
    }

    HoverableComponent.propTypes = Object.assign({}, {}, Component.propTypes);

    return HoverableComponent;
}

export default addHoverState;