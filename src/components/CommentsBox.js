import React from 'react';

import Comment from './Comment'


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

class CommentsBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentsBox';
    }
    render() {
        if (this.props.comments.length == 0) {
            return null
        }

        let firstComment = this.props.comments[0];
        return (
            <div>
                {this.props.opened ? (
                    <div style={commentsBoxOpenedStyle}>
                        <ul style={commentsListStyle}>
                            {this.props.comments.map(c => (
                                <Comment {...c} key={c.id} />
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div style={commentsBoxClosedStyle}>
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
}

CommentsBox.propTypes = {
    opened: React.PropTypes.bool,
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        avatar: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        reactionsCount: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    })),
}

CommentsBox.defaultProps = {
    opened: false
}

export default CommentsBox;
