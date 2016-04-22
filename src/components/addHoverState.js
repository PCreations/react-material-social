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
        render() {
            return (
                <div
                    onMouseEnter={(e) => this.setState({hovered: true})}
                    onMouseLeave={(e) => this.setState({hovered: false})}>
                    <Component {...this.props} {...this.state} />
                </div>
            )
        }
    }

    return HoverableComponent;
}

export default addHoverState;