import React from 'react';

import IconButton from 'material-ui/lib/icon-button';


const containerStyle = {
    display: 'block',
    margin: '0 8px',
    WebkitBoxFlex: 0,
    boxFlex: 0,
    WebkitFlexGrow: 0,
    flexGrow: 0,
    WebkitFlexShrink: 0,
    flexShrink: 0
};

const buttonStyle = {
    background: '#eee',
    display: 'inline-block',
    height: 36,
    width: 36,
    color: '#444',
    fill: '#444',
    transition: 'background .3s',
    border: 0,
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center',
    zIndex: 0,
    padding: 0
}

const iconStyle = {
    height: 18,
    width: 18,
    margin: '2px',
    fill: '#444'
}


class SocialButton extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SocialButton';
    }
    render() {
        let buttonStyleMerged = Object.assign({}, buttonStyle, this.props.buttonStyle || {})
        let iconStyleMerged = Object.assign({}, iconStyle, this.props.iconStyle || {})
        return (
            <div style={containerStyle}>
                <IconButton
                    style={buttonStyleMerged}
                    iconStyle={iconStyleMerged}>
                    {this.props.icon}
                </IconButton>
            </div>
        );
    }
}

SocialButton.propTypes = {
    icon: React.PropTypes.node.isRequired,
    buttonStyle: React.PropTypes.object,
    iconStyle: React.PropTypes.object
}

export default SocialButton;
