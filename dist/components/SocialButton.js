(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'material-ui/lib/icon-button', './addHoverState', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('material-ui/lib/icon-button'), require('./addHoverState'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.iconButton, global.addHoverState, global.pureComponent);
        global.SocialButton = mod.exports;
    }
})(this, function (exports, _react, _iconButton, _addHoverState, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _iconButton2 = _interopRequireDefault(_iconButton);

    var _addHoverState2 = _interopRequireDefault(_addHoverState);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var containerStyle = {
        display: 'block',
        margin: '0 8px',
        WebkitBoxFlex: 0,
        boxFlex: 0,
        WebkitFlexGrow: 0,
        flexGrow: 0,
        WebkitFlexShrink: 0,
        flexShrink: 0
    };

    var buttonStyle = {
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
    };

    var buttonStyleHovered = {
        background: '#eee'
    };

    var iconStyle = {
        height: 18,
        width: 18,
        margin: '2px',
        fill: '#444'
    };

    var PureIconButton = (0, _pureComponent2.default)(_iconButton2.default, 'IconButton', ['onBlur', 'onFocus', 'onKeyboardFocus', 'onMouseEnter', 'onMouseLeave', 'onMouseOut', 'onClick']);

    var SocialButton = function SocialButton(props) {
        var containerStyleMerged = Object.assign({}, containerStyle, props.style.container);
        var buttonStyleMerged = Object.assign({}, buttonStyle, props.style.button);
        var buttonStyleHoveredMerged = Object.assign({}, buttonStyleHovered, props.style.buttonHovered);
        if (props.hovered) {
            buttonStyleMerged = Object.assign({}, buttonStyleMerged, buttonStyleHoveredMerged);
        }
        var iconStyleMerged = Object.assign({}, iconStyle, props.style.icon);

        return _react2.default.createElement(
            'div',
            { style: containerStyleMerged },
            _react2.default.createElement(
                PureIconButton,
                {
                    onClick: function onClick(e) {
                        return props.onClick(e);
                    },
                    style: buttonStyleMerged,
                    iconStyle: iconStyleMerged },
                props.icon
            )
        );
    };

    SocialButton.propTypes = {
        style: _react2.default.PropTypes.shape({
            container: _react2.default.PropTypes.object,
            button: _react2.default.PropTypes.object,
            buttonHovered: _react2.default.PropTypes.object,
            icon: _react2.default.PropTypes.object
        }),
        icon: _react2.default.PropTypes.element,
        onClick: _react2.default.PropTypes.func,
        hovered: _react2.default.PropTypes.bool
    };

    SocialButton.defaultProps = {
        style: {},
        onClick: function onClick(e) {},
        hovered: false
    };

    exports.default = (0, _pureComponent2.default)((0, _addHoverState2.default)(SocialButton), ['onClick']);
});