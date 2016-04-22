(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'material-ui/lib/svg-icons/social/plus-one', 'material-ui/lib/svg-icons/communication/comment', 'material-ui/lib/svg-icons/social/share', './SocialButton', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('material-ui/lib/svg-icons/social/plus-one'), require('material-ui/lib/svg-icons/communication/comment'), require('material-ui/lib/svg-icons/social/share'), require('./SocialButton'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.plusOne, global.comment, global.share, global.SocialButton, global.pureComponent);
        global.SocialToolbar = mod.exports;
    }
})(this, function (exports, _react, _plusOne, _comment, _share, _SocialButton, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _plusOne2 = _interopRequireDefault(_plusOne);

    var _comment2 = _interopRequireDefault(_comment);

    var _share2 = _interopRequireDefault(_share);

    var _SocialButton2 = _interopRequireDefault(_SocialButton);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var containerStyle = {
        padding: '16px 8px',
        backgroundColor: '#fefefe',
        height: 36,
        display: 'flex',
        WebkitBoxAlign: 'center',
        boxAlign: 'center',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitBoxOrient: 'horizontal',
        boxOrient: 'horizontal',
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
        WebkitFlexWrap: 'nowrap',
        flexWrap: 'nowrap',
        boxPack: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center'
    };

    var iconStyle = {
        width: '100%',
        height: '100%',
        color: '#444',
        fill: '#444'
    };

    var countStyle = {
        lineHeight: '36px',
        color: '#777',
        fontSize: '12px',
        marginRight: 6
    };

    var SocialToolbar = function SocialToolbar(props) {

        var clickCallbackFactory = function clickCallbackFactory(e, func) {
            return function () {
                e.stopPropagation();
                func(e);
            }();
        };

        var containerStyleMerged = Object.assign({}, containerStyle, props.style.container);

        var iconStyleMerged = Object.assign({}, iconStyle, props.style.icon);

        var countStyleMerged = Object.assign({}, countStyle, props.style.count);

        return _react2.default.createElement(
            'div',
            { style: containerStyleMerged, role: 'toolbar', onClick: function onClick(e) {
                    return props.onClick(e);
                } },
            _react2.default.createElement(_SocialButton2.default, {
                onClick: function onClick(e) {
                    return clickCallbackFactory(e, props.onReactionButtonClick);
                },
                icon: _react2.default.createElement(_plusOne2.default, { style: iconStyleMerged }),
                style: props.socialButtonsStyle }),
            props.reactionsCount && _react2.default.createElement(
                'div',
                { style: countStyleMerged },
                " " + props.reactionsCount + " "
            ),
            _react2.default.createElement('div', { style: {
                    WebkitBoxFlex: 1,
                    boxFlex: 1,
                    WebkitFlexGrow: 1,
                    flexGrow: 1,
                    WebkitFlexShrink: 1,
                    flexShrink: 1
                } }),
            _react2.default.createElement(_SocialButton2.default, {
                onClick: function onClick(e) {
                    return clickCallbackFactory(e, props.onCommentButtonClick);
                },
                icon: _react2.default.createElement(_comment2.default, { style: iconStyleMerged }),
                style: props.socialButtonsStyle }),
            props.commentsCount && _react2.default.createElement(
                'div',
                { style: countStyleMerged },
                " " + props.commentsCount + " "
            ),
            _react2.default.createElement(_SocialButton2.default, {
                onClick: function onClick(e) {
                    return clickCallbackFactory(e, props.onShareButtonClick);
                },
                icon: _react2.default.createElement(_share2.default, { style: iconStyleMerged }),
                style: props.socialButtonsStyle }),
            props.sharesCount && _react2.default.createElement(
                'div',
                { style: countStyleMerged },
                " " + props.sharesCount + " "
            )
        );
    };

    SocialToolbar.propTypes = {
        style: _react2.default.PropTypes.shape({
            container: _react2.default.PropTypes.object,
            icon: _react2.default.PropTypes.object,
            count: _react2.default.PropTypes.object
        }),
        socialButtonsStyle: _SocialButton2.default.propTypes.style,
        reactionsCount: _react2.default.PropTypes.number,
        commentsCount: _react2.default.PropTypes.number,
        sharesCount: _react2.default.PropTypes.number,
        onClick: _react2.default.PropTypes.func,
        onReactionButtonClick: _react2.default.PropTypes.func,
        onCommentButtonClick: _react2.default.PropTypes.func,
        onShareButtonClick: _react2.default.PropTypes.func
    };

    SocialToolbar.defaultProps = {
        style: {},
        onReactionButtonClick: function onReactionButtonClick(e) {
            return console.log('reaction button clicked');
        },
        onCommentButtonClick: function onCommentButtonClick(e) {
            return console.log('comment button clicked');
        },
        onShareButtonClick: function onShareButtonClick(e) {
            return console.log('share button clicked');
        }
    };

    exports.default = (0, _pureComponent2.default)(SocialToolbar, ['onClick', 'onReactionButtonClick', 'onCommentButtonClick', 'onShareButtonClick']);
});