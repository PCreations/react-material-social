(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './Comment', './EditingComment', './CommentInput', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./Comment'), require('./EditingComment'), require('./CommentInput'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Comment, global.EditingComment, global.CommentInput, global.pureComponent);
        global.CommentsBox = mod.exports;
    }
})(this, function (exports, _react, _Comment, _EditingComment, _CommentInput, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Comment2 = _interopRequireDefault(_Comment);

    var _EditingComment2 = _interopRequireDefault(_EditingComment);

    var _CommentInput2 = _interopRequireDefault(_CommentInput);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var commentsBoxClosedStyle = {
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        height: 60,
        overflow: 'hidden',
        position: 'relative',
        background: '#f9f9f9'
    };

    var commentsBoxOpenedStyle = {
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        background: '#f9f9f9',
        outline: 'none'
    };

    var commentStyle = {
        display: 'flex',
        position: 'absolute',
        top: 12,
        bottom: 12,
        left: 16,
        right: 16,
        fontSize: '14px',
        lineHeight: '18px',
        color: 'rgba(0,0,0,0.54)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxAlign: 'center',
        boxAlign: 'center',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        wordBreak: 'break-word'
    };

    var commentAuthorStyle = {
        fontSize: '14px',
        fontWeight: 500,
        color: 'rgba(0,0,0,0.87)',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textDecoration: 'none'
    };

    var commentsListStyle = {
        maxHeight: 400,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        listStyleType: 'none',
        margin: 0,
        padding: 0
    };

    var firstAvatarStyle = {
        WebkitBorderRadius: '50%',
        borderRadius: '50%',
        WebkitFlexShrink: 0,
        flexShrink: 0,
        marginRight: 8
    };

    var commentTextStyle = {
        maxHeight: 36
    };

    var CommentsBox = function CommentsBox(props) {
        var lastComment = props.comments.length > 0 ? props.comments[props.comments.length] : null;

        var commentsBoxOpenedStyleMerged = Object.assign({}, commentsBoxOpenedStyle, props.style.opened);
        var commentsListStyleMerged = Object.assign({}, commentsListStyle, props.style.commentsList);
        var commentsBoxClosedStyleMerged = Object.assign({}, commentsBoxClosedStyle, props.style.closed);
        var commentStyleMerged = Object.assign({}, commentStyle, props.style.comment);
        var firstAvatarStyleMerged = Object.assign({}, firstAvatarStyle, props.style.firstAvatar);
        var commentTextStyleMerged = Object.assign({}, commentTextStyle, props.style.commentText);
        var commentAuthorStyleMerged = Object.assign({}, commentAuthorStyle, props.style.commentAuthor);

        return _react2.default.createElement(
            'div',
            null,
            props.opened ? _react2.default.createElement(
                'div',
                { style: commentsBoxOpenedStyleMerged },
                _react2.default.createElement(
                    'ul',
                    { style: commentsListStyleMerged },
                    props.comments.map(function (c) {
                        return _react2.default.createElement(
                            'li',
                            { key: c.id },
                            props.editingCommentId == c.id ? _react2.default.createElement(_EditingComment2.default, {
                                id: c.id,
                                avatar: c.avatar,
                                text: props.editingCommentText,
                                originalText: c.text,
                                cancelButtonText: props.cancelButtonText,
                                editButtonText: props.editButtonText,
                                onCancelClick: function onCancelClick(e) {
                                    return props.onCancelClick(e);
                                },
                                onEditClick: function onEditClick(e, commentId, commentText) {
                                    return props.onEditClick(e, commentId, commentText);
                                },
                                onTextChange: function onTextChange(e) {
                                    return props.onEditingCommentTextChange(e);
                                },
                                style: props.editingCommentStyle }) : _react2.default.createElement(_Comment2.default, _extends({}, c, {
                                onClick: function onClick(e) {
                                    return props.onCommentClick(e, c.id);
                                },
                                onReactionButtonClick: function onReactionButtonClick(e, id) {
                                    return props.onReactionButtonClick(e, id);
                                },
                                reactionIcon: props.reactionIcon,
                                style: props.commentStyle }))
                        );
                    })
                ),
                props.commentPopover,
                _react2.default.createElement(_CommentInput2.default, props.commentInputProps)
            ) : lastComment ? _react2.default.createElement(
                'div',
                { style: commentsBoxClosedStyleMerged, onClick: function onClick(e) {
                        return props.onCommentBoxClosedClick(e);
                    } },
                _react2.default.createElement(
                    'div',
                    { style: commentStyleMerged },
                    _react2.default.createElement('img', { width: 36, height: 36, style: firstAvatarStyleMerged, src: lastComment.avatar }),
                    _react2.default.createElement(
                        'div',
                        { style: commentTextStyleMerged },
                        _react2.default.createElement(
                            'span',
                            { style: commentAuthorStyleMerged },
                            lastComment.author + ": "
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            lastComment.text
                        )
                    )
                )
            ) : _react2.default.createElement('noscript', null)
        );
    };

    CommentsBox.propTypes = {
        style: _react2.default.PropTypes.shape({
            closed: _react2.default.PropTypes.object,
            opened: _react2.default.PropTypes.object,
            commentsList: _react2.default.PropTypes.object,
            comment: _react2.default.PropTypes.object,
            commentAuthor: _react2.default.PropTypes.object,
            commentText: _react2.default.PropTypes.object,
            firstAvatar: _react2.default.PropTypes.object
        }),
        editingCommentStyle: _EditingComment2.default.propTypes.style,
        commentStyle: _Comment2.default.propTypes.style,
        commentInputStyle: _CommentInput2.default.propTypes.style,
        opened: _react2.default.PropTypes.bool,
        comments: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
            id: _react2.default.PropTypes.string.isRequired,
            avatar: _react2.default.PropTypes.string.isRequired,
            author: _react2.default.PropTypes.string.isRequired,
            reactionsCount: _react2.default.PropTypes.string.isRequired,
            text: _react2.default.PropTypes.string.isRequired
        })),
        reactionIcon: _react2.default.PropTypes.element,
        commentInputProps: _react2.default.PropTypes.shape({
            avatar: _react2.default.PropTypes.string.isRequired,
            addCommentText: _react2.default.PropTypes.string.isRequired,
            plubishButtonText: _react2.default.PropTypes.string.isRequired,
            opened: _react2.default.PropTypes.bool,
            onTextChange: _react2.default.PropTypes.func,
            onAddCommentClick: _react2.default.PropTypes.func,
            onPublishButtonClick: _react2.default.PropTypes.func
        }),
        cancelButtonText: _react2.default.PropTypes.string.isRequired,
        editButtonText: _react2.default.PropTypes.string.isRequired,
        onCommentClick: _react2.default.PropTypes.func,
        onReactionButtonClick: _react2.default.PropTypes.func,
        onCommentBoxClosedClick: _react2.default.PropTypes.func,
        onCancelClick: _react2.default.PropTypes.func,
        onEditClick: _react2.default.PropTypes.func,
        onEditingCommentTextChange: _react2.default.PropTypes.func,
        commentPopover: _react2.default.PropTypes.node.isRequired,
        editingCommentId: _react2.default.PropTypes.string,
        editingCommentText: _react2.default.PropTypes.string
    };

    CommentsBox.defaultProps = {
        style: {},
        editingCommentStyle: {},
        commentStyle: {},
        commentInputStyle: {},
        opened: false,
        onCommentBoxClosedClick: function onCommentBoxClosedClick(e) {},
        onCommentClick: function onCommentClick(e, id) {},
        onReactionButtonClick: function onReactionButtonClick(e, id) {},
        onEditClick: function onEditClick(e, id, text) {},
        onCancelClick: function onCancelClick(e) {},
        onEditingCommentTextChange: function onEditingCommentTextChange(e) {}
    };

    exports.default = (0, _pureComponent2.default)(CommentsBox, ['onCommentClick', 'onReactionButtonClick', 'onCommentBoxClosedClick', 'onCancelClick', 'onEditClick', 'onCommentTextChange']);
});