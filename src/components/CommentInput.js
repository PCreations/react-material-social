import React from 'react';

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
    textTransform: 'uppercase'
}

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentInput';
    }

    _onTextareaInputChange(e) {
        this.props.onTextChange(e)
        this.refs.textareaInput.focus();
    }

    render() {
        let commentInputContainerMergedStyle = commentInputContainerStyle;
        if (this.props.opened) {
            commentInputContainerMergedStyle = Object.assign({}, commentInputContainerStyle, commentInputContainerOpenedStyle)
        }
        return (
            <div style={commentInputContainerMergedStyle}>
                <img width={36} height={36} style={avatarStyle} src={this.props.avatar} />
                <div style={inputTextContainerStyle}>
                    {this.props.opened ? (
                        <div style={inputOpenedStyle}>
                            <div style={inputTextOpenedContainerStyle}>
                                <div style={inputTextOpenedTextStyle}>
                                    <textarea
                                        onChange={(e) => this._onTextareaInputChange(e)}
                                        role="textbox"
                                        ref="textareaInput"
                                        placeholder={this.props.addCommentText}
                                        style={textareaStyle}></textarea>
                                </div>
                            </div>
                            <div role="button" style={publishButtonStyle}>
                                <span style={publishButtonTextStyle}>{this.props.plubishButtonText}</span>
                            </div>
                        </div>
                    ) : (
                        <div role="button" style={inputTextStyle} onClick={(e) => this.props.onAddCommentClick(e)}>
                            {this.props.addCommentText}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


CommentInput.propTypes = {
    avatar: React.PropTypes.string.isRequired,
    addCommentText: React.PropTypes.string.isRequired,
    plubishButtonText: React.PropTypes.string.isRequired,
    opened: React.PropTypes.bool,
    onTextChange: React.PropTypes.func,
    onAddCommentClick: React.PropTypes.func
}

CommentInput.defaultProps = {
    opened: false,
    onTextChange: (e) => {},
    onAddCommentClick: (e) => {}
}

export default CommentInput;
