import React from 'react';

import Comment from './Comment'
import EditingComment from './EditingComment'
import CommentInput from './CommentInput'
import pureComponent from './pureComponent';


const commentsBoxClosedStyle = {
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    height: 60,
    overflow: 'hidden',
    position: 'relative',
    background: '#f9f9f9',
    opacity: 0,
    WebkitTransition: 'opacity 2s ease-in-out',
    transition: 'opacity 2s ease-in-out'
}

const commentsBoxOpenedStyle = {
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    outline: 'none'
}

const commentStyle = {
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
}

const commentAuthorStyle = {
    fontSize: '14px',
    fontWeight: 500,
    color: 'rgba(0,0,0,0.87)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textDecoration: 'none'
}

const commentsListStyle = {
    maxHeight: 400,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    listStyleType: 'none',
    margin: 0,
    padding: 0
}

const firstAvatarStyle = {
    WebkitBorderRadius: '50%',
    borderRadius: '50%',
    WebkitFlexShrink: 0,
    flexShrink: 0,
    marginRight: 8
}

const commentTextStyle = {
    maxHeight: 36
}

const CommentsBox = (props) => {
    let commentsBoxOpenedStyleMerged = Object.assign({}, commentsBoxOpenedStyle, props.style.opened)
    let commentsListStyleMerged = Object.assign({}, commentsListStyle, props.style.commentsList)
    let commentsBoxClosedStyleMerged = Object.assign({}, commentsBoxClosedStyle, props.style.closed)
    let commentStyleMerged = Object.assign({}, commentStyle, props.style.comment)
    let firstAvatarStyleMerged = Object.assign({}, firstAvatarStyle, props.style.firstAvatar)
    let commentTextStyleMerged = Object.assign({}, commentTextStyle, props.style.commentText)
    let commentAuthorStyleMerged = Object.assign({}, commentAuthorStyle, props.style.commentAuthor)

    return (
        <div>
            {props.opened ? (
                <div style={commentsBoxOpenedStyleMerged}>
                    <ul style={commentsListStyleMerged}>
                        {props.comments.map(c => (
                            <li key={c.id}>
                                {props.editingCommentId == c.id ? (
                                    <EditingComment
                                        id={c.id}
                                        avatar={c.avatar}
                                        text={props.editingCommentText}
                                        originalText={c.text}
                                        cancelButtonText={props.cancelButtonText}
                                        editButtonText={props.editButtonText}
                                        onCancelClick={(e) => props.onCancelClick(e)}
                                        onEditClick={(e, commentId, commentText) => props.onEditClick(e, commentId, commentText)}
                                        onTextChange={(e) => props.onEditingCommentTextChange(e)}
                                        style={props.editingCommentStyle}/>
                                ) : (
                                    <Comment
                                        {...c}
                                        onClick={(e) => props.onCommentClick(e, c.id)}
                                        onReactionButtonClick={(e, id) => props.onReactionButtonClick(e, id)}
                                        reactionIcon={props.reactionIcon}
                                        style={props.commentStyle}/>
                                )}
                            </li>
                        ))}
                    </ul>
                    {props.commentPopover}
                    <CommentInput {...props.commentInputProps} />
                </div>
            ) : (
                props.previewedComment ? (
                    <div style={commentsBoxClosedStyleMerged} onClick={(e) => props.onCommentBoxClosedClick(e)}>
                        <div style={commentStyleMerged}>
                            <img width={36} height={36} style={firstAvatarStyleMerged} src={props.previewedComment.avatar} />
                            <div style={commentTextStyleMerged}>
                                <span style={commentAuthorStyleMerged}>{props.previewedComment.author+": "}</span>
                                <span>{props.previewedComment.text}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <noscript />
                )
            )}
        </div>
    );
}

CommentsBox.propTypes = {
    style: React.PropTypes.shape({
        closed: React.PropTypes.object,
        opened: React.PropTypes.object,
        commentsList: React.PropTypes.object,
        comment: React.PropTypes.object,
        commentAuthor: React.PropTypes.object,
        commentText: React.PropTypes.object,
        firstAvatar: React.PropTypes.object
    }),
    editingCommentStyle: EditingComment.propTypes.style,
    commentStyle: Comment.propTypes.style,
    commentInputStyle: CommentInput.propTypes.style,
    opened: React.PropTypes.bool,
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        avatar: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        reactionsCount: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
    })),
    reactionIcon: React.PropTypes.element,
    commentInputProps: React.PropTypes.shape({
        avatar: React.PropTypes.string.isRequired,
        addCommentText: React.PropTypes.string.isRequired,
        plubishButtonText: React.PropTypes.string.isRequired,
        opened: React.PropTypes.bool,
        onTextChange: React.PropTypes.func,
        onAddCommentClick: React.PropTypes.func,
        onPublishButtonClick: React.PropTypes.func,
    }),
    previewedComment: React.PropTypes.shape({
        avatar: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
    }),
    cancelButtonText: React.PropTypes.string.isRequired,
    editButtonText: React.PropTypes.string.isRequired,
    onCommentClick: React.PropTypes.func,
    onReactionButtonClick: React.PropTypes.func,
    onCommentBoxClosedClick: React.PropTypes.func,
    onCancelClick: React.PropTypes.func,
    onEditClick: React.PropTypes.func,
    onEditingCommentTextChange: React.PropTypes.func,
    commentPopover: React.PropTypes.node.isRequired,
    editingCommentId: React.PropTypes.string,
    editingCommentText: React.PropTypes.string,
}

CommentsBox.defaultProps = {
    style: {},
    editingCommentStyle: {},
    commentStyle: {},
    commentInputStyle: {},
    opened: false,
    onCommentBoxClosedClick: (e) => {},
    onCommentClick: (e, id) => {},
    onReactionButtonClick: (e, id) => {},
    onEditClick: (e, id, text) => {},
    onCancelClick: (e) => {},
    onEditingCommentTextChange: (e) => {}
}

export default pureComponent(CommentsBox, [
    'onCommentClick',
    'onReactionButtonClick',
    'onCommentBoxClosedClick',
    'onCancelClick',
    'onEditClick',
    'onCommentTextChange'
]);
