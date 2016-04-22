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
        props.style.container
    )
    let editingCommentContainerStyleHoveredMerged = Object.assign(
        {},
        editingCommentContainerStyleHovered,
        props.style.hovered
    )
    let avatarStyleMerged = Object.assign({}, avatarStyle, props.style.avatar)
    let editingCommentBlocStyleMerged = Object.assign({}, editingCommentBlocStyle, props.style.commentBloc)
    let editingCommentTextContainerStyleMerged = Object.assign({}, editingCommentTextContainerStyle, props.style.commentTextContainer)
    let editingCommentTextStyleMerged = Object.assign({}, editingCommentTextStyle, props.style.commentText)
    let editingCommentTextareaMerged = Object.assign({}, editingCommentTextarea, props.style.commentTextarea)
    let buttonStyleMerged = Object.assign({}, buttonStyle, props.style.button)
    let cancelButtonStyleMerged = Object.assign({}, buttonStyleMerged, cancelButtonStyle, props.style.cancelButton)
    let editButtonStyleMerged = Object.assign({}, buttonStyleMerged, editButtonStyle, props.style.editButton)
    let editButtonTextActiveStyleMerged = Object.assign({}, editButtonTextActiveStyle, props.style.editButtonTextActive)
    let buttonTextStyleMerged = Object.assign({}, buttonTextStyle, props.style.buttonTextStyle)


    editingCommentContainerStyleMerged = Object.assign(
        {},
        editingCommentContainerStyleMerged,
        props.hovered ? editingCommentContainerStyleHoveredMerged : {}
    )

    editButtonStyleMerged = Object.assign(
        {},
        editButtonStyleMerged,
        props.text.length > 0 && props.text != props.originalText ? editButtonTextActiveStyleMerged : {}
    );

    return (
        <div style={editingCommentContainerStyleMerged}>
            <img width={36} height={36} style={avatarStyleMerged} src={props.avatar} />
            <div style={editingCommentBlocStyleMerged}>
                <div style={editingCommentTextContainerStyleMerged}>
                    <div style={editingCommentTextStyleMerged}>
                        <textarea
                            style={editingCommentTextareaMerged}
                            value={props.text}
                            ref={(ref) => { ref && ReactDOM.findDOMNode(ref).focus() }}
                            onChange={(e) => props.onTextChange(e)}/>
                    </div>
                </div>
                <div role="button" style={editButtonStyleMerged} onClick={(e) => props.onEditClick(e, props.id, props.text)}>
                    <span style={buttonTextStyleMerged}>
                        {props.editButtonText}
                    </span>
                </div>
                <div role="button" style={cancelButtonStyleMerged} onClick={(e) => props.onCancelClick(e)}>
                    <span style={buttonTextStyleMerged}>
                        {props.cancelButtonText}
                    </span>
                </div>
            </div>
        </div>
    )
}

EditingComment.propTypes = {
    style: React.PropTypes.shape({
        container: React.PropTypes.object,
        hovered: React.PropTypes.object,
        avatar: React.PropTypes.object,
        commentBloc: React.PropTypes.object,
        commentTextContainer: React.PropTypes.object,
        commentText: React.PropTypes.object,
        commentTextarea: React.PropTypes.object,
        button: React.PropTypes.object,
        cancelButton: React.PropTypes.object,
        editButton: React.PropTypes.object,
        editButtonTextActive: React.PropTypes.object,
        buttonText: React.PropTypes.object
    }),
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

EditingComment.defaultProps = {
    style: {},
    hovered: false
}

export default pureComponent(addHoverState(EditingComment), ['onCancelClick', 'onEditClick', 'onTextChange']);
