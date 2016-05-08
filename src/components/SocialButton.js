import React from 'react';

import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';

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

const activeButtonStyle = {
    height: 36,
    width: 36,
    cursor: 'pointer',
    backgroundColor: '#ff4081'
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

const activeIconStyle = {
    fill: '#ffffff',
    color: '#ffffff',
    height: 18,
    width: 18,
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

const PurePaper = pureComponent(Paper, 'Paper');


const SocialButton = (props) => {
    let containerStyleMerged = Object.assign({}, containerStyle, props.style.container)
    let buttonStyleMerged = Object.assign({}, buttonStyle, props.style.button)
    let activeButtonStyleMerged = Object.assign({}, activeButtonStyle, props.style.activeButton)
    let buttonStyleHoveredMerged = Object.assign({}, buttonStyleHovered, props.style.buttonHovered)
    if (props.hovered) {
        buttonStyleMerged = Object.assign({}, buttonStyleMerged, buttonStyleHoveredMerged);
    }
    if (props.active) {
        containerStyleMerged = Object.assign({}, containerStyleMerged, props.style.containerActive)
    }
    let iconStyleMerged = Object.assign({}, iconStyle, props.style.icon);
    let activeIconStyleMerged = Object.assign({}, activeIconStyle, props.style.activeIcon);
    let activeIconContainerStyle = {
        textAlign: 'center',
        position: 'relative',
        top: parseInt(activeIconStyleMerged.height, 10) / 2 + "px"
    }

    return (
        <div style={containerStyleMerged}>
            {props.active ? (
                <PurePaper
                    onClick={(e) => props.onClick(e)}
                    circle={true}
                    style={activeButtonStyleMerged}>
                    <div style={activeIconContainerStyle}>
                        {React.cloneElement(props.icon, {style: activeIconStyleMerged})}
                    </div>
                </PurePaper>
            ) : (
                <PureIconButton
                    onClick={(e) => props.onClick(e, props.disabled)}
                    style={buttonStyleMerged}
                    disabled={props.disabled}
                    iconStyle={iconStyleMerged}
                    disableTouchRipple={true}>
                    {props.icon}
                </PureIconButton>
            )}
        </div>
    );
}

SocialButton.propTypes = {
    style: React.PropTypes.shape({
        container: React.PropTypes.object,
        containerActive: React.PropTypes.object,
        button: React.PropTypes.object,
        activeButton: React.PropTypes.object,
        buttonHovered: React.PropTypes.object,
        icon: React.PropTypes.object,
        activeIcon: React.PropTypes.object
    }),
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    icon: React.PropTypes.element,
    onClick: React.PropTypes.func,
    hovered: React.PropTypes.bool
}

SocialButton.defaultProps = {
    style: {},
    active: false,
    disabled: false,
    onClick: (e) => {},
    hovered: false
}

export default pureComponent(addHoverState(SocialButton), ['onClick']);
