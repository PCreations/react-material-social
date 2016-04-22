import React from 'react';
import ReactDOM from 'react-dom';

import pureComponent from './pureComponent';


const commentInputContainerStyle = {
    borderTop: '1px solid #ebebeb',
    padding: '12px 16px',
    display: 'flex'
}

const commentInputContainerOpenedStyle = {
    backgroundColor: '#fff'
}

const avatarStyle = {
    height: 36,
    width: 36,
    WebkitBorderRadius: '50%',
    borderRadius: '50%',
    display: 'block'
}

const inputTextContainerStyle = {
    color: '#999',
    fontSize: '14px',
    outline: 'none',
    marginLeft: '16px',
    WebkitBoxFlex: 'auto',
    WebkitFlex: 'auto',
    flex: 'auto'
}

const inputTextStyle = {
    lineHeight: '36px'
}

const inputOpenedStyle = {
    display: 'flex'
}

const inputTextOpenedContainerStyle = {
    padding: '9px 32px 8px 0',
    display: 'block',
    WebkitBoxFlex: 1,
    boxFlex: 1,
    WebkitFlexGrow: 1,
    flexGrow: 1
}

const inputTextOpenedTextStyle = {
    height: 18,
    overflowY: 'hidden',
    minHeight: 18,
    outline: 'none',
    position: 'relative',
    width: '100%'
}

const textareaStyle = {
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
}

const publishButtonStyle = {
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
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 500,
    minWidth: '4em',
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
    WebkitTapHighlightColor: 'transparent',
    zIndex: 0
}

const publishButtonTextStyle = {
    margin: 8,
    display: 'inline-block',
    textTransform: 'uppercase',
    cursor: 'default'
}

const publishButtonTextActiveStyle = {
    cursor: 'pointer',
    color: '#2962ff'
}

const CommentInput = (props) => {

    let textareaElement = null;

    let commentInputContainerMergedStyle = commentInputContainerStyle;
    let publishButtonTextMergedStyle = publishButtonTextStyle;
    if (props.opened) {
        commentInputContainerMergedStyle = Object.assign({}, commentInputContainerStyle, commentInputContainerOpenedStyle)
    }
    if (props.text.length > 0) {
        publishButtonTextMergedStyle = Object.assign({}, publishButtonTextMergedStyle, publishButtonTextActiveStyle)
    }
    return (
        <div style={commentInputContainerMergedStyle}>
            <img width={36} height={36} style={avatarStyle} src={props.avatar} />
            <div style={inputTextContainerStyle}>
                {props.opened ? (
                    <div style={inputOpenedStyle}>
                        <div style={inputTextOpenedContainerStyle}>
                            <div style={inputTextOpenedTextStyle}>
                                <textarea
                                    onChange={(e) => props.onTextChange(e)}
                                    role="textbox"
                                    value={props.text}
                                    ref={(ref) => { ref && ReactDOM.findDOMNode(ref).focus() }}
                                    placeholder={props.addCommentText}
                                    style={textareaStyle}></textarea>
                            </div>
                        </div>
                        <div role="button" style={publishButtonStyle}>
                            <span
                                style={publishButtonTextMergedStyle}
                                onClick={props.onPublishButtonClick}>{props.plubishButtonText}</span>
                        </div>
                    </div>
                ) : (
                    <div role="button" style={inputTextStyle} onClick={(e) => props.onAddCommentClick(e)}>
                        {props.addCommentText}
                    </div>
                )}
            </div>
        </div>
    )
}


CommentInput.propTypes = {
    avatar: React.PropTypes.string.isRequired,
    addCommentText: React.PropTypes.string.isRequired,
    plubishButtonText: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
    opened: React.PropTypes.bool,
    onTextChange: React.PropTypes.func,
    onAddCommentClick: React.PropTypes.func,
    onPublishButtonClick: React.PropTypes.func
}

CommentInput.defaultProps = {
    text: '',
    opened: false,
    onTextChange: (e) => {},
    onAddCommentClick: (e) => {},
    onPublishButtonClick: (e) => {}
}

export default pureComponent(CommentInput, [
    'onTextChange',
    'onAddCommentClick',
    'onPublishButtonClick'
]);
