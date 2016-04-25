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

    let textareaNode = null;

    let commentInputContainerStyleMerged = Object.assign({}, commentInputContainerStyle, props.style.container)
    let commentInputContainerOpenedStyleMerged = Object.assign({}, commentInputContainerOpenedStyle, props.style.opened)
    let avatarStyleMerged = Object.assign({}, avatarStyle, props.style.avatar)
    let inputTextContainerStyleMerged = Object.assign({}, inputTextContainerStyle, props.style.inputTextContainer)
    let inputTextStyleMerged = Object.assign({}, inputTextStyle, props.style.inputText)
    let inputOpenedStyleMerged = Object.assign({}, inputOpenedStyle, props.style.inputOpened)
    let inputTextOpenedContainerStyleMerged = Object.assign({}, inputTextOpenedContainerStyle, props.style.inputTextOpenedContainer)
    let inputTextOpenedTextStyleMerged = Object.assign({}, inputTextOpenedTextStyle, props.style.inputTextOpenedText)
    let textareaStyleMerged = Object.assign({}, textareaStyle, props.style.textarea)
    let publishButtonStyleMerged = Object.assign({}, publishButtonStyle, props.style.publishButton)
    let publishButtonTextStyleMerged = Object.assign({}, publishButtonTextStyle, props.style.publishButtonText)
    let publishButtonTextActiveStyleMerged = Object.assign({}, publishButtonTextActiveStyle, props.style.publishButtonTextActive)

    if (props.opened) {
        commentInputContainerStyleMerged = Object.assign({}, commentInputContainerStyleMerged, commentInputContainerOpenedStyleMerged)
    }
    if (props.text.length > 0) {
        publishButtonTextStyleMerged = Object.assign({}, publishButtonTextStyleMerged, publishButtonTextActiveStyleMerged)
    }
    let lth = textareaStyleMerged.lineHeight
    let lines = 1
    if (textareaNode) {
        lines = textareaNode.scrollHeight / lth
    }
    return (
        <div style={commentInputContainerStyleMerged}>
            <img width={36} height={36} style={avatarStyleMerged} src={props.avatar} />
            <div style={inputTextContainerStyleMerged}>
                {props.opened ? (
                    <div style={inputOpenedStyleMerged}>
                        <div style={inputTextOpenedContainerStyleMerged}>
                            <div style={inputTextOpenedTextStyleMerged}>
                                <textarea
                                    onChange={(e) => props.onTextChange(e)}
                                    role="textbox"
                                    value={props.text}
                                    ref={(ref) => {
                                        if (ref) {
                                            textareaNode = ReactDOM.findDOMNode(ref)
                                            textareaNode.focus();
                                        }
                                    }}
                                    placeholder={props.addCommentText}
                                    style={textareaStyleMerged}></textarea>
                            </div>
                        </div>
                        <div role="button" style={publishButtonStyleMerged}>
                            <span
                                style={publishButtonTextStyleMerged}
                                onClick={(e) => props.onPublishButtonClick(e, props.text)}>{props.plubishButtonText}</span>
                        </div>
                    </div>
                ) : (
                    <div role="button" style={inputTextStyleMerged} onClick={(e) => props.onAddCommentClick(e)}>
                        {props.addCommentText}
                    </div>
                )}
            </div>
        </div>
    )
}


CommentInput.propTypes = {
    style: React.PropTypes.shape({
        container: React.PropTypes.object,
        opened: React.PropTypes.object,
        hovered: React.PropTypes.object,
        avatar: React.PropTypes.object,
        inputTextContainer: React.PropTypes.object,
        inputText: React.PropTypes.object,
        inputOpened: React.PropTypes.object,
        inputTextOpenedContainer: React.PropTypes.object,
        inputTextOpenedText: React.PropTypes.object,
        textarea: React.PropTypes.object,
        publishButton: React.PropTypes.object,
        publishButtonText: React.PropTypes.object,
        publishButtonTextActive: React.PropTypes.object
    }),
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
    style: {},
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
