import React from 'react';

import IconButton from 'material-ui/lib/icon-button';

import addHoverState from './addHoverState';
import pureComponent from './pureComponent';


const containerStyle = {
    display: 'block',
    margin: '0 8px',
    WebkitBoxFlex: 0,
    boxFlex: 0,
    WebkitFlexGrow: 0,
    flexGrow: 0,
    WebkitFlexShrink: 0,
    flexShrink: 0
}

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

const buttonStyleHovered = {
    background: '#eee'
}

const iconStyle = {
    height: 18,
    width: 18,
    margin: '2px',
    fill: '#444'
}

const PureIconButton = pureComponent(IconButton, 'IconButton', [
    'onBlur',
    'onFocus',
    'onKeyboardFocus',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseOut',
    'onClick'
]);

const SocialButton = (props) => {
    let containerStyleMerged = Object.assign({}, containerStyle, props.containerStyle || {});
    let buttonStyleMerged = Object.assign({}, buttonStyle, props.buttonStyle || {});
    let buttonStyleHoveredMerged = Object.assign({}, buttonStyleHovered, props.buttonStyleHovered || {});
    if (props.hovered) {
        buttonStyleMerged = Object.assign({}, buttonStyleMerged, buttonStyleHoveredMerged);
    }
    let iconStyleMerged = Object.assign({}, iconStyle, props.iconStyle || {});

    return (
        <div style={containerStyleMerged}>
            <PureIconButton
                onClick={(e) => props.onClick(e)}
                style={buttonStyleMerged}
                iconStyle={iconStyleMerged}>
                {props.icon}
            </PureIconButton>
        </div>
    );
}

SocialButton.propTypes = {
    icon: React.PropTypes.node.isRequired,
    containerStyle: React.PropTypes.object,
    buttonStyle: React.PropTypes.object,
    buttonStyleHovered: React.PropTypes.object,
    iconStyle: React.PropTypes.object,
    onClick: React.PropTypes.func,
    hovered: React.PropTypes.bool
}

SocialButton.defaultProps = {
    onClick: (e) => {},
    hovered: false
}

export default pureComponent(addHoverState(SocialButton), ['onClick']);
