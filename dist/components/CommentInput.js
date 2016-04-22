(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-dom', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-dom'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.pureComponent);
        global.CommentInput = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _publishButtonStyle;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var commentInputContainerStyle = {
        borderTop: '1px solid #ebebeb',
        padding: '12px 16px',
        display: 'flex'
    };

    var commentInputContainerOpenedStyle = {
        backgroundColor: '#fff'
    };

    var avatarStyle = {
        height: 36,
        width: 36,
        WebkitBorderRadius: '50%',
        borderRadius: '50%',
        display: 'block'
    };

    var inputTextContainerStyle = {
        color: '#999',
        fontSize: '14px',
        outline: 'none',
        marginLeft: '16px',
        WebkitBoxFlex: 'auto',
        WebkitFlex: 'auto',
        flex: 'auto'
    };

    var inputTextStyle = {
        lineHeight: '36px'
    };

    var inputOpenedStyle = {
        display: 'flex'
    };

    var inputTextOpenedContainerStyle = {
        padding: '9px 32px 8px 0',
        display: 'block',
        WebkitBoxFlex: 1,
        boxFlex: 1,
        WebkitFlexGrow: 1,
        flexGrow: 1
    };

    var inputTextOpenedTextStyle = {
        height: 18,
        overflowY: 'hidden',
        minHeight: 18,
        outline: 'none',
        position: 'relative',
        width: '100%'
    };

    var textareaStyle = {
        overflowY: 'hidden',
        background: 'transparent',
        border: 0,
        fontSize: '14px',
        height: '100%',
        margin: 0,
        lineHeight: '18px',
        minHeight: '18px',
        outline: 'none',
        padding: 0,
        position: 'absolute',
        resize: 'none',
        width: '100%'
    };

    var publishButtonStyle = (_publishButtonStyle = {
        background: 'none',
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        color: 'rgba(68,68,68,0.502)',
        cursor: 'default',
        fill: 'rgba(68,68,68,0.502)',
        lineHeight: '20px',
        minWidth: 88,
        margin: '0 -12px 0 0',
        maxHeight: 35,
        WebkitUserSelect: 'none',
        WebkitTransition: 'background .2s .1s',
        transition: 'background .2s .1s',
        border: 0,
        WebkitBorderRadius: '3px',
        borderRadius: '3px'
    }, _defineProperty(_publishButtonStyle, 'cursor', 'pointer'), _defineProperty(_publishButtonStyle, 'display', 'inline-block'), _defineProperty(_publishButtonStyle, 'fontSize', '14px'), _defineProperty(_publishButtonStyle, 'fontWeight', 500), _defineProperty(_publishButtonStyle, 'minWidth', '4em'), _defineProperty(_publishButtonStyle, 'outline', 'none'), _defineProperty(_publishButtonStyle, 'overflow', 'hidden'), _defineProperty(_publishButtonStyle, 'position', 'relative'), _defineProperty(_publishButtonStyle, 'textAlign', 'center'), _defineProperty(_publishButtonStyle, 'textTransform', 'uppercase'), _defineProperty(_publishButtonStyle, 'WebkitTapHighlightColor', 'transparent'), _defineProperty(_publishButtonStyle, 'zIndex', 0), _publishButtonStyle);

    var publishButtonTextStyle = {
        margin: 8,
        display: 'inline-block',
        textTransform: 'uppercase',
        cursor: 'default'
    };

    var publishButtonTextActiveStyle = {
        cursor: 'pointer',
        color: '#2962ff'
    };

    var CommentInput = function CommentInput(props) {

        var commentInputContainerStyleMerged = Object.assign({}, commentInputContainerStyle, props.style.container);
        var commentInputContainerOpenedStyleMerged = Object.assign({}, commentInputContainerOpenedStyle, props.style.opened);
        var avatarStyleMerged = Object.assign({}, avatarStyle, props.style.avatar);
        var inputTextContainerStyleMerged = Object.assign({}, inputTextContainerStyle, props.style.inputTextContainer);
        var inputTextStyleMerged = Object.assign({}, inputTextStyle, props.style.inputText);
        var inputOpenedStyleMerged = Object.assign({}, inputOpenedStyle, props.style.inputOpened);
        var inputTextOpenedContainerStyleMerged = Object.assign({}, inputTextOpenedContainerStyle, props.style.inputTextOpenedContainer);
        var inputTextOpenedTextStyleMerged = Object.assign({}, inputTextOpenedTextStyle, props.style.inputTextOpenedText);
        var textareaStyleMerged = Object.assign({}, textareaStyle, props.style.textarea);
        var publishButtonStyleMerged = Object.assign({}, publishButtonStyle, props.style.publishButton);
        var publishButtonTextStyleMerged = Object.assign({}, publishButtonTextStyle, props.style.publishButtonText);
        var publishButtonTextActiveStyleMerged = Object.assign({}, publishButtonTextActiveStyle, props.style.publishButtonTextActive);

        if (props.opened) {
            commentInputContainerStyleMerged = Object.assign({}, commentInputContainerStyleMerged, commentInputContainerOpenedStyleMerged);
        }
        if (props.text.length > 0) {
            publishButtonTextStyleMerged = Object.assign({}, publishButtonTextStyleMerged, publishButtonTextActiveStyleMerged);
        }
        return _react2.default.createElement(
            'div',
            { style: commentInputContainerStyleMerged },
            _react2.default.createElement('img', { width: 36, height: 36, style: avatarStyleMerged, src: props.avatar }),
            _react2.default.createElement(
                'div',
                { style: inputTextContainerStyleMerged },
                props.opened ? _react2.default.createElement(
                    'div',
                    { style: inputOpenedStyleMerged },
                    _react2.default.createElement(
                        'div',
                        { style: inputTextOpenedContainerStyleMerged },
                        _react2.default.createElement(
                            'div',
                            { style: inputTextOpenedTextStyleMerged },
                            _react2.default.createElement('textarea', {
                                onChange: function onChange(e) {
                                    return props.onTextChange(e);
                                },
                                role: 'textbox',
                                value: props.text,
                                ref: function ref(_ref) {
                                    _ref && _reactDom2.default.findDOMNode(_ref).focus();
                                },
                                placeholder: props.addCommentText,
                                style: textareaStyleMerged })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { role: 'button', style: publishButtonStyleMerged },
                        _react2.default.createElement(
                            'span',
                            {
                                style: publishButtonTextStyleMerged,
                                onClick: props.onPublishButtonClick },
                            props.plubishButtonText
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    { role: 'button', style: inputTextStyleMerged, onClick: function onClick(e) {
                            return props.onAddCommentClick(e);
                        } },
                    props.addCommentText
                )
            )
        );
    };

    CommentInput.propTypes = {
        style: _react2.default.PropTypes.shape({
            container: _react2.default.PropTypes.object,
            opened: _react2.default.PropTypes.object,
            hovered: _react2.default.PropTypes.object,
            avatar: _react2.default.PropTypes.object,
            inputTextContainer: _react2.default.PropTypes.object,
            inputText: _react2.default.PropTypes.object,
            inputOpened: _react2.default.PropTypes.object,
            inputTextOpenedContainer: _react2.default.PropTypes.object,
            inputTextOpenedText: _react2.default.PropTypes.object,
            textarea: _react2.default.PropTypes.object,
            publishButton: _react2.default.PropTypes.object,
            publishButtonText: _react2.default.PropTypes.object,
            publishButtonTextActive: _react2.default.PropTypes.object
        }),
        avatar: _react2.default.PropTypes.string.isRequired,
        addCommentText: _react2.default.PropTypes.string.isRequired,
        plubishButtonText: _react2.default.PropTypes.string.isRequired,
        text: _react2.default.PropTypes.string,
        opened: _react2.default.PropTypes.bool,
        onTextChange: _react2.default.PropTypes.func,
        onAddCommentClick: _react2.default.PropTypes.func,
        onPublishButtonClick: _react2.default.PropTypes.func
    };

    CommentInput.defaultProps = {
        style: {},
        text: '',
        opened: false,
        onTextChange: function onTextChange(e) {},
        onAddCommentClick: function onAddCommentClick(e) {},
        onPublishButtonClick: function onPublishButtonClick(e) {}
    };

    exports.default = (0, _pureComponent2.default)(CommentInput, ['onTextChange', 'onAddCommentClick', 'onPublishButtonClick']);
});