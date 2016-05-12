import React from 'react'

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
            const refRect = this._ref.getBoundingClientRect()
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