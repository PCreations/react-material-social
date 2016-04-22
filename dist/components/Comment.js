(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'material-ui/lib/svg-icons/social/plus-one', 'material-ui/lib/svg-icons/navigation/more-vert', './SocialButton', './addHoverState', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('material-ui/lib/svg-icons/social/plus-one'), require('material-ui/lib/svg-icons/navigation/more-vert'), require('./SocialButton'), require('./addHoverState'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.plusOne, global.moreVert, global.SocialButton, global.addHoverState, global.pureComponent);
        global.Comment = mod.exports;
    }
})(this, function (exports, _react, _plusOne, _moreVert, _SocialButton, _addHoverState, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _plusOne2 = _interopRequireDefault(_plusOne);

    var _moreVert2 = _interopRequireDefault(_moreVert);

    var _SocialButton2 = _interopRequireDefault(_SocialButton);

    var _addHoverState2 = _interopRequireDefault(_addHoverState);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var commentItemStyle = {
        padding: '12px 16px',
        display: 'flex',
        WebkitTransition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
        transition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
        backgroundColor: '#f9f9f9'
    };

    var commentItemStyleHovered = {
        backgroundColor: '#f3f3f3',
        cursor: 'pointer'
    };

    var commentAuthorProfileLinkStyle = {
        display: 'block',
        outline: 'none',
        WebkitBorderRadius: '50%',
        borderRadius: '50%',
        WebkitBoxFlex: 'none',
        WebkitFlex: 'none',
        flex: 'none',
        textDecoration: 'none'
    };

    var avatarStyle = {
        height: 36,
        width: 36,
        WebkitBorderRadius: '50%',
        borderRadius: '50%',
        display: 'block'
    };

    var commentHeadingStyle = {
        overflow: 'hidden',
        wordBreak: 'break-word',
        margin: '0 10px 0 16px',
        WebkitBoxFlex: 'auto',
        WebkitFlex: 'auto',
        flex: 'auto'
    };

    var commentAuthorHeadingStyle = {
        display: 'flex',
        whiteSpace: 'nowrap'
    };

    var commentAuthorStyle = {
        fontSize: '14px',
        fontWeight: 500,
        color: 'rgba(0,0,0,0.87)',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textDecoration: 'none'
    };

    var commentReactionsCountStyle = {
        fontSize: '12px',
        color: 'rgba(0,0,0,0.54)',
        fontWeight: 500,
        marginLeft: 8,
        WebkitBoxFlex: 1,
        boxFlex: 1,
        WebkitFlexGrow: 1,
        flexGrow: 1,
        WebkitFlexShrink: 0,
        flexShrink: 0
    };

    var commentBodyStyle = {
        fontSize: '14px',
        lineHeight: '20px',
        color: 'rgba(0,0,0,0.87)',
        whiteSpace: 'pre-wrap'
    };

    var commentInteractionsStyle = {
        WebkitBoxFlex: 'none',
        WebkitFlex: 'none',
        flex: 'none',
        display: 'flex'
    };

    var commentReactionButtonContainerStyle = {
        marginTop: -4,
        marginRight: 8,
        WebkitBoxFlex: 'none',
        WebkitFlex: 'none',
        flex: 'none'
    };

    var moreVertButtonContainerStyle = {
        position: 'relative',
        WebkitBoxFlex: 'none',
        WebkitFlex: 'none',
        flex: 'none'
    };

    var timeSinceStyle = {
        fontSize: '12px',
        color: 'rgba(0,0,0,0.54)',
        textDecoration: 'none'
    };

    var Comment = function Comment(props) {
        var handleCommentClick = function handleCommentClick(event) {
            event.persist();
            props.onClick(event);
        };
        var commentItemStyleMerged = commentItemStyle;
        if (props.hovered) {
            commentItemStyleMerged = Object.assign({}, commentItemStyle, commentItemStyleHovered);
        }
        return _react2.default.createElement(
            'div',
            {
                style: commentItemStyleMerged,
                onClick: function onClick(e) {
                    return handleCommentClick(e);
                } },
            _react2.default.createElement(
                'a',
                { href: '#', style: commentAuthorProfileLinkStyle },
                _react2.default.createElement('img', { width: 36, height: 36, style: avatarStyle, src: props.avatar })
            ),
            _react2.default.createElement(
                'div',
                { role: 'heading', style: commentHeadingStyle },
                _react2.default.createElement(
                    'div',
                    { style: commentAuthorHeadingStyle },
                    _react2.default.createElement(
                        'a',
                        { href: '#', style: commentAuthorStyle },
                        props.author
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: commentReactionsCountStyle },
                        props.reactionsCount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: commentBodyStyle },
                    props.text
                )
            ),
            _react2.default.createElement(
                'div',
                { style: commentInteractionsStyle },
                _react2.default.createElement(
                    'div',
                    { style: commentReactionButtonContainerStyle },
                    _react2.default.createElement(_SocialButton2.default, {
                        onClick: function onClick(e) {
                            return e.stopPropagation();
                        },
                        buttonStyle: {
                            width: 21,
                            height: 21,
                            display: 'block',
                            background: '#e0e0e0'
                        },
                        buttonStyleHovered: {
                            background: '#e0e0e0'
                        },
                        iconStyle: {
                            width: 14,
                            height: 14
                        },
                        icon: _react2.default.createElement(_plusOne2.default, { iconStyle: {
                                width: 14,
                                height: 14
                            } }) })
                ),
                _react2.default.createElement(
                    'div',
                    { style: moreVertButtonContainerStyle },
                    props.hovered ? _react2.default.createElement(_SocialButton2.default, {
                        buttonStyle: {
                            position: 'absolute',
                            top: -4,
                            right: -4,
                            background: 'none',
                            height: 21,
                            width: 21,
                            display: 'block',
                            color: 'rgba(255,255,255,0.749)',
                            fill: 'rgba(255,255,255,0.749)'
                        },
                        buttonStyleHovered: {
                            background: '#e0e0e0'
                        },
                        iconStyle: {
                            width: 14,
                            height: 14
                        },
                        icon: _react2.default.createElement(_moreVert2.default, { iconStyle: {
                                width: 16,
                                height: 16,
                                marginTOp: '4px'
                            } }) }) : _react2.default.createElement(
                        'div',
                        { style: timeSinceStyle },
                        _react2.default.createElement(
                            'span',
                            null,
                            props.timeSince
                        )
                    )
                )
            )
        );
    };

    Comment.propTypes = {
        id: _react2.default.PropTypes.string.isRequired,
        avatar: _react2.default.PropTypes.string.isRequired,
        author: _react2.default.PropTypes.string.isRequired,
        reactionsCount: _react2.default.PropTypes.string.isRequired,
        text: _react2.default.PropTypes.string.isRequired,
        timeSince: _react2.default.PropTypes.string.isRequired,
        onClick: _react2.default.PropTypes.func.isRequired,
        hovered: _react2.default.PropTypes.bool
    };

    Comment.defaultProps = {
        hovered: false
    };

    exports.default = (0, _pureComponent2.default)((0, _addHoverState2.default)(Comment), ['onClick']);
});