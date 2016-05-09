(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'material-ui/lib/svg-icons/social/plus-one', 'material-ui/lib/svg-icons/communication/comment', 'material-ui/lib/svg-icons/social/share', 'material-ui/lib/tooltip', './SocialButton', './pureComponent', './addHoverState'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('material-ui/lib/svg-icons/social/plus-one'), require('material-ui/lib/svg-icons/communication/comment'), require('material-ui/lib/svg-icons/social/share'), require('material-ui/lib/tooltip'), require('./SocialButton'), require('./pureComponent'), require('./addHoverState'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.plusOne, global.comment, global.share, global.tooltip, global.SocialButton, global.pureComponent, global.addHoverState);
        global.SocialToolbar = mod.exports;
    }
})(this, function (exports, _react, _plusOne, _comment, _share, _tooltip, _SocialButton, _pureComponent, _addHoverState) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _plusOne2 = _interopRequireDefault(_plusOne);

    var _comment2 = _interopRequireDefault(_comment);

    var _share2 = _interopRequireDefault(_share);

    var _tooltip2 = _interopRequireDefault(_tooltip);

    var _SocialButton2 = _interopRequireDefault(_SocialButton);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    var _addHoverState2 = _interopRequireDefault(_addHoverState);

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
        marginRight: 6,
        position: 'relative'
    };

    var SocialCount = function SocialCount(props) {

        var countStyleMerged = Object.assign({}, countStyle, props.style);

        countStyleMerged['cursor'] = props.hovered && props.tooltip ? 'pointer' : 'default';

        return _react2.default.createElement(
            'div',
            { style: countStyleMerged },
            props.count,
            props.tooltip && _react2.default.createElement(_tooltip2.default, {
                label: props.tooltip,
                show: props.hovered,
                touch: true,
                style: { boxSizing: 'border-box' },
                verticalPosition: 'bottom',
                horizontalPosition: 'center' })
        );
    };

    SocialCount.propTypes = {
        count: _react2.default.PropTypes.node,
        style: _react2.default.PropTypes.object,
        tooltip: _react2.default.PropTypes.string
    };

    SocialCount = (0, _pureComponent2.default)((0, _addHoverState2.default)(SocialCount));

    var SocialToolbar = function SocialToolbar(props) {

        var clickCallbackFactory = function clickCallbackFactory(e, func) {
            return function () {
                e.stopPropagation();
                func(e);
            }();
        };

        var containerStyleMerged = Object.assign({}, containerStyle, props.style.container);

        var iconStyleMerged = Object.assign({}, iconStyle, props.style.icon);

        return _react2.default.createElement(
            'div',
            { style: containerStyleMerged, role: 'toolbar', onClick: function onClick(e) {
                    return props.onClick(e);
                } },
            _react2.default.createElement(_SocialButton2.default, {
                active: props.reactionButtonActive,
                disabled: props.readOnly,
                onClick: function onClick(e) {
                    return clickCallbackFactory(e, props.onReactionButtonClick);
                },
                icon: _react2.default.cloneElement(props.reactionIcon, { style: iconStyleMerged }),
                style: props.socialButtonsStyle }),
            props.reactionsCount && _react2.default.createElement(SocialCount, {
                style: props.style.count,
                count: props.reactionsCount,
                tooltip: props.reactionsCountTooltip }),
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
                icon: _react2.default.cloneElement(props.commentIcon, { style: iconStyleMerged }),
                style: props.socialButtonsStyle }),
            _react2.default.createElement(SocialCount, {
                style: props.style.count,
                count: props.commentsCount,
                tooltip: props.commentsCountTooltip }),
            _react2.default.createElement(_SocialButton2.default, {
                onClick: function onClick(e) {
                    return clickCallbackFactory(e, props.onShareButtonClick);
                },
                icon: _react2.default.cloneElement(props.shareIcon, { style: iconStyleMerged }),
                style: props.socialButtonsStyle }),
            _react2.default.createElement(SocialCount, {
                style: props.style.count,
                count: props.sharesCount,
                tooltip: props.sharesCountTooltip })
        );
    };

    SocialToolbar.propTypes = {
        style: _react2.default.PropTypes.shape({
            container: _react2.default.PropTypes.object,
            icon: _react2.default.PropTypes.object,
            count: _react2.default.PropTypes.object
        }),
        readOnly: _react2.default.PropTypes.bool,
        reactionIcon: _react2.default.PropTypes.element,
        commentIcon: _react2.default.PropTypes.element,
        shareIcon: _react2.default.PropTypes.element,
        reactionButtonActive: _react2.default.PropTypes.bool,
        socialButtonsStyle: _SocialButton2.default.propTypes.style,
        reactionsCount: _react2.default.PropTypes.node,
        reactionsCountTooltip: _react2.default.PropTypes.string,
        commentsCount: _react2.default.PropTypes.node,
        commentsCountTooltip: _react2.default.PropTypes.string,
        sharesCount: _react2.default.PropTypes.node,
        sharesCountTooltip: _react2.default.PropTypes.string,
        onClick: _react2.default.PropTypes.func,
        onReactionButtonClick: _react2.default.PropTypes.func,
        onCommentButtonClick: _react2.default.PropTypes.func,
        onShareButtonClick: _react2.default.PropTypes.func
    };

    SocialToolbar.defaultProps = {
        style: {},
        readOnly: false,
        reactionIcon: _react2.default.createElement(_plusOne2.default, null),
        commentIcon: _react2.default.createElement(_comment2.default, null),
        shareIcon: _react2.default.createElement(_share2.default, null),
        commentsCount: 0,
        reactionsCount: 0,
        sharesCount: 0,
        reactionButtonActive: false,
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