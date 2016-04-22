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

    var commentInteractionsContainerStyle = {
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

    var socialButtonReactionStyle = {
        button: {
            width: 21,
            height: 21,
            display: 'block',
            background: '#e0e0e0'
        },
        buttonHovered: {
            background: '#e0e0e0'
        },
        icon: {
            width: 14,
            height: 14
        }
    };

    var socialButtonMoreVertStyle = {
        button: {
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
        buttonHovered: {
            background: '#e0e0e0'
        },
        icon: {
            width: 14,
            height: 14
        }
    };

    var Comment = function Comment(props) {
        var handleCommentClick = function handleCommentClick(event) {
            event.persist();
            props.onClick(event);
        };
        var commentItemStyleMerged = Object.assign({}, commentItemStyle, props.style.item);
        var commentItemStyleHoveredMerged = Object.assign({}, commentItemStyleHovered, props.style.hovered);
        var commentAuthorProfileLinkStyleMerged = Object.assign({}, commentAuthorProfileLinkStyle, props.style.authorProfileLink);
        var avatarStyleMerged = Object.assign({}, avatarStyle, props.style.avatar);
        var commentHeadingStyleMerged = Object.assign({}, commentHeadingStyle, props.style.heading);
        var commentAuthorHeadingStyleMerged = Object.assign({}, commentAuthorHeadingStyle, props.style.authorHeading);
        var commentAuthorStyleMerged = Object.assign({}, commentAuthorStyle, props.style.author);
        var commentReactionsCountStyleMerged = Object.assign({}, commentReactionsCountStyle, props.style.reactionsCount);
        var commentBodyStyleMerged = Object.assign({}, commentBodyStyle, props.style.body);
        var commentInteractionsContainerStyleMerged = Object.assign({}, commentInteractionsContainerStyle, props.style.interactionsContainer);
        var commentReactionButtonContainerStyleMerged = Object.assign({}, commentReactionButtonContainerStyle, props.style.reactionButtonContainer);
        var moreVertButtonContainerStyleMerged = Object.assign({}, moreVertButtonContainerStyle, props.style.moreVertButtonContainer);
        var timeSinceStyleMerged = Object.assign({}, timeSinceStyle, props.style.timeSince);
        var socialButtonReactionStyleMerged = Object.assign({}, socialButtonReactionStyle, props.socialButtonReactionStyle);
        var socialButtonMoreVertStyleMerged = Object.assign({}, socialButtonMoreVertStyle, props.socialButtonMoreVertStyle);

        if (props.hovered) {
            commentItemStyleMerged = Object.assign({}, commentItemStyleMerged, commentItemStyleHoveredMerged);
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
                { href: '#', style: commentAuthorProfileLinkStyleMerged },
                _react2.default.createElement('img', { width: 36, height: 36, style: avatarStyleMerged, src: props.avatar })
            ),
            _react2.default.createElement(
                'div',
                { role: 'heading', style: commentHeadingStyleMerged },
                _react2.default.createElement(
                    'div',
                    { style: commentAuthorHeadingStyleMerged },
                    _react2.default.createElement(
                        'a',
                        { href: '#', style: commentAuthorStyleMerged },
                        props.author
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: commentReactionsCountStyleMerged },
                        props.reactionsCount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: commentBodyStyleMerged },
                    props.text
                )
            ),
            _react2.default.createElement(
                'div',
                { style: commentInteractionsContainerStyleMerged },
                _react2.default.createElement(
                    'div',
                    { style: commentReactionButtonContainerStyleMerged },
                    _react2.default.createElement(_SocialButton2.default, {
                        onClick: function onClick(e) {
                            return e.stopPropagation();
                        },
                        icon: _react2.default.createElement(_plusOne2.default, null),
                        style: socialButtonReactionStyleMerged })
                ),
                _react2.default.createElement(
                    'div',
                    { style: moreVertButtonContainerStyleMerged },
                    props.hovered ? _react2.default.createElement(_SocialButton2.default, {
                        icon: _react2.default.createElement(_moreVert2.default, null),
                        style: socialButtonMoreVertStyleMerged }) : _react2.default.createElement(
                        'div',
                        { style: timeSinceStyleMerged },
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
        style: _react2.default.PropTypes.shape({
            item: _react2.default.PropTypes.object,
            hovered: _react2.default.PropTypes.object,
            authorProfileLink: _react2.default.PropTypes.object,
            avatar: _react2.default.PropTypes.object,
            heading: _react2.default.PropTypes.object,
            authorHeading: _react2.default.PropTypes.object,
            author: _react2.default.PropTypes.object,
            reactionsCount: _react2.default.PropTypes.object,
            body: _react2.default.PropTypes.object,
            interactionsContainer: _react2.default.PropTypes.object,
            reactionButtonContainer: _react2.default.PropTypes.object,
            moreVertButtonContainer: _react2.default.PropTypes.object,
            timeSince: _react2.default.PropTypes.object
        }),
        socialButtonReactionStyle: _SocialButton2.default.propTypes.style,
        socialButtonMortVertStyle: _SocialButton2.default.propTypes.style,
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
        style: {},
        socialButtonReactionStyle: {},
        socialButtonMoreVertStyle: {},
        hovered: false
    };

    exports.default = (0, _pureComponent2.default)((0, _addHoverState2.default)(Comment), ['onClick']);
});