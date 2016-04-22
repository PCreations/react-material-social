import React from 'react';
import ReactDOM from 'react-dom';

import Snackbar from 'material-ui/lib/snackbar';

import pureComponent from './pureComponent';
import addHoverState from './addHoverState';


const editingCommentContainerStyle = {
    overflow: 'hidden',
    padding: '12px 16px',
    WebkitTransition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
    display: 'flex',
    transition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
    backgroundColor: '#fff',
    maxHeight: 400,
}

const editingCommentContainerStyleHovered = {
    cursor: 'pointer',
    backgroundColor: '#f3f3f3'
}

const avatarStyle = {
    height: 36,
    width: 36,
    WebkitBorderRadius: '50%',
    borderRadius: '50%',
    flex: 'none'
}

const editingCommentBlocStyle = {
    overflow: 'hidden',
    marginLeft: '16px',
    WebkitBoxFlex: 'auto',
    WebkitFlex: 'auto',
    flex: 'auto'
}

const editingCommentTextContainerStyle = {
    padding: '8px 0'
}

const editingCommentTextStyle = {
    height: '18px',
    overflowY: 'hidden',
    minHeight: '18px',
    outline: 'none',
    position: 'relative',
    width: '100%'
}

const editingCommentTextarea = {
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

const buttonStyle = {
    color: '#4285f4',
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
    zIndex: 0,
    'float': 'right'
}

const cancelButtonStyle = {
    ...buttonStyle,
    marginRight: '32px',
}

const editButtonStyle = {
    ...buttonStyle,
    WebkitBoxShadow: 'none',
    boxShadow: 'none',
    color: 'rgba(68,68,68,0.502)',
    cursor: 'default',
    fill: 'rgba(68,68,68,0.502)'
}

const editButtonTextActiveStyle = {
    cursor: 'pointer',
    color: '#2962ff'
}

const buttonTextStyle = {
    display: 'inline-block',
    margin: '.5em',
    fontWeight: 700
}


const EditingComment = (props) => {

    let editingCommentContainerStyleMerged = Object.assign(
        {},
        editingCommentContainerStyle,
        props.hovered ? editingCommentContainerStyleHovered : {}
    )

    let editButtonStyleMerged = Object.assign(
        {},
        editButtonStyle,
        props.text.length > 0 && props.text != props.originalText ? editButtonTextActiveStyle : {}
    );

    return (
        <div style={editingCommentContainerStyleMerged}>
            <img width={36} height={36} style={avatarStyle} src={props.avatar} />
            <div style={editingCommentBlocStyle}>
                <div style={editingCommentTextContainerStyle}>
                    <div style={editingCommentTextStyle}>
                        <textarea
                            style={editingCommentTextarea}
                            value={props.text}
                            ref={(ref) => { ref && ReactDOM.findDOMNode(ref).focus() }}
                            onChange={(e) => props.onTextChange(e)}/>
                    </div>
                </div>
                <div role="button" style={editButtonStyleMerged} onClick={(e) => props.onEditClick(e, props.id)}>
                    <span style={buttonTextStyle}>
                        {props.editButtonText}
                    </span>
                </div>
                <div role="button" style={cancelButtonStyle} onClick={(e) => props.onCancelClick(e)}>
                    <span style={buttonTextStyle}>
                        {props.cancelButtonText}
                    </span>
                </div>
            </div>
        </div>
    )
}

EditingComment.propTypes = {
    id: React.PropTypes.string.isRequired,
    avatar: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    originalText: React.PropTypes.string.isRequired,
    hovered: React.PropTypes.bool.isRequired,
    cancelButtonText: React.PropTypes.string.isRequired,
    editButtonText: React.PropTypes.string.isRequired,
    onCancelClick: React.PropTypes.func.isRequired,
    onEditClick: React.PropTypes.func.isRequired,
    onTextChange: React.PropTypes.func.isRequired,
}

export default pureComponent(addHoverState(EditingComment), ['onCancelClick', 'onEditClick', 'onTextChange']);
