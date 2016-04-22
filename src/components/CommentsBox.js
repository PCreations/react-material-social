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
    background: '#f9f9f9'
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

const commentTextBlocStyle = {
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(0,0,0,0.87)',
    whiteSpace: 'pre-wrap'
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
    if (props.comments.length == 0) {
        return null
    }

    let firstComment = props.comments[0];
    return (
        <div>
            {props.opened ? (
                <div style={commentsBoxOpenedStyle}>
                    <ul style={commentsListStyle}>
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
                                        onEditClick={(e, commentId) => props.onEditClick(e, commentId)}
                                        onTextChange={(e) => props.onEditingCommentTextChange(e)}/>
                                ) : (
                                    <Comment {...c} onClick={(e) => props.onCommentClick(e, c.id)}/>
                                )}
                            </li>
                        ))}
                    </ul>
                    {props.commentPopover}
                    <CommentInput {...props.commentInputProps} />
                </div>
            ) : (
                <div style={commentsBoxClosedStyle} onClick={(e) => props.onCommentBoxClosedClick(e)}>
                    <div style={commentStyle}>
                        <img width={36} height={36} style={firstAvatarStyle} src={firstComment.avatar} />
                        <div style={commentTextStyle}>
                            <span style={commentAuthorStyle}>{firstComment.author+": "}</span>
                            <span>{firstComment.text}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

CommentsBox.propTypes = {
    opened: React.PropTypes.bool,
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        avatar: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        reactionsCount: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
    })),
    commentInputProps: React.PropTypes.shape({
        avatar: React.PropTypes.string.isRequired,
        addCommentText: React.PropTypes.string.isRequired,
        plubishButtonText: React.PropTypes.string.isRequired,
        opened: React.PropTypes.bool,
        onTextChange: React.PropTypes.func,
        onAddCommentClick: React.PropTypes.func,
        onPublishButtonClick: React.PropTypes.func,
    }),
    cancelButtonText: React.PropTypes.string.isRequired,
    editButtonText: React.PropTypes.string.isRequired,
    onCommentClick: React.PropTypes.func,
    onCommentBoxClosedClick: React.PropTypes.func,
    onCancelClick: React.PropTypes.func,
    onEditClick: React.PropTypes.func,
    onEditingCommentTextChange: React.PropTypes.func,
    commentPopover: React.PropTypes.node.isRequired,
    editingCommentId: React.PropTypes.string,
    editingCommentText: React.PropTypes.string,
}

CommentsBox.defaultProps = {
    opened: false,
    onCommentBoxClosedClick: (e) => {},
    onCommentClick: (e, id) => {},
    onEditClick: (e, id) => {},
    onCancelClick: (e) => {},
    onEditingCommentTextChange: (e) => {}
}

export default pureComponent(CommentsBox, [
    'onCommentClick',
    'onCommentBoxClosedClick',
    'onCancelClick',
    'onEditClick',
    'onCommentTextChange'
]);
