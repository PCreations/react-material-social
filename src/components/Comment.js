import React from 'react';

import PlusOneSVG from 'material-ui/lib/svg-icons/social/plus-one';
import MoreVertSVG from 'material-ui/lib/svg-icons/navigation/more-vert';

import SocialButton from './SocialButton'

const commentItemStyle = {
    padding: '12px 16px',
    display: 'flex',
    WebkitTransition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
    transition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
    backgroundColor: '#f9f9f9'
}

const commentItemStyleHovered = {
    backgroundColor: '#f3f3f3',
    cursor: 'pointer'
}

const commentAuthorProfileLinkStyle = {
    display: 'block',
    outline: 'none',
    WebkitBorderRadius: '50%',
    borderRadius: '50%',
    WebkitBoxFlex: 'none',
    WebkitFlex: 'none',
    flex: 'none',
    textDecoration: 'none'
}

const avatarStyle = {
    height: 36,
    width: 36,
    WebkitBorderRadius: '50%',
    borderRadius: '50%',
    display: 'block'
}

const commentHeadingStyle = {
    overflow: 'hidden',
    wordBreak: 'break-word',
    margin: '0 10px 0 16px',
    WebkitBoxFlex: 'auto',
    WebkitFlex: 'auto',
    flex: 'auto'
}

const commentAuthorHeadingStyle = {
    display: 'flex',
    whiteSpace: 'nowrap'
}

const commentAuthorStyle = {
    fontSize: '14px',
    fontWeight: 500,
    color: 'rgba(0,0,0,0.87)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textDecoration: 'none'
}

const commentReactionsCountStyle = {
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
}

const commentBodyStyle = {
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(0,0,0,0.87)',
    whiteSpace: 'pre-wrap'
}

const commentInteractionsStyle = {
    WebkitBoxFlex: 'none',
    WebkitFlex: 'none',
    flex: 'none',
    display: 'flex'
}

const commentReactionButtonContainerStyle = {
    marginTop: -4,
    marginRight: 8,
    WebkitBoxFlex: 'none',
    WebkitFlex: 'none',
    flex: 'none',
}

const moreVertButtonContainerStyle = {
    position: 'relative',
    WebkitBoxFlex: 'none',
    WebkitFlex: 'none',
    flex: 'none'
}

const timeSinceStyle = {
    fontSize: '12px',
    color: 'rgba(0,0,0,0.54)',
    textDecoration: 'none'
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';
        this.state = {
            hovered: false
        }
    }
    render() {
        let commentItemStyleMerged = commentItemStyle;
        if (this.state.hovered) {
            commentItemStyleMerged = Object.assign({}, commentItemStyle, commentItemStyleHovered);
        }
        return (
            <li
                style={commentItemStyleMerged}
                onMouseEnter={() => this.setState({hovered: true})}
                onMouseLeave={() => this.setState({hovered: false})}>
                <a href="#" style={commentAuthorProfileLinkStyle}>
                    <img width={36} height={36} style={avatarStyle} src={this.props.avatar} />
                </a>
                <div role="heading" style={commentHeadingStyle}>
                    <div style={commentAuthorHeadingStyle}>
                        <a href="#" style={commentAuthorStyle}>{this.props.author}</a>
                        <span style={commentReactionsCountStyle}>{this.props.reactionsCount}</span>
                    </div>
                    <div style={commentBodyStyle}>
                        {this.props.text}
                    </div>
                </div>
                <div style={commentInteractionsStyle}>
                    <div style={commentReactionButtonContainerStyle}>
                        <SocialButton
                            buttonStyle={{
                                width: 21,
                                height: 21,
                                display: 'block',
                                background: '#e0e0e0',
                            }}
                            iconStyle={{
                                width: 14,
                                height: 14
                            }}
                            icon={<PlusOneSVG iconStyle={{
                                width: 14,
                                height: 14
                            }}/>}/>
                    </div>
                    <div style={moreVertButtonContainerStyle}>
                        {this.state.hovered ? (
                            <SocialButton
                                buttonStyle={{
                                    position: 'absolute',
                                    top: -4,
                                    right: -4,
                                    background: 'none',
                                    height: 21,
                                    width: 21,
                                    display: 'block',
                                    color: 'rgba(255,255,255,0.749)',
                                    fill: 'rgba(255,255,255,0.749)'
                                }}
                                iconStyle={{
                                    width: 14,
                                    height: 14
                                }}
                                icon={<MoreVertSVG iconStyle={{
                                    width: 16,
                                    height: 16,
                                    marginTOp:'4px'
                                }}/>}/>
                        ) : (
                            <div style={timeSinceStyle}>
                                <span>{this.props.timeSince}</span>
                            </div>
                        )}
                    </div>
                </div>
            </li>
        );
    }
}

Comment.propTypes = {
    id: React.PropTypes.string.isRequired,
    avatar: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    reactionsCount: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    timeSince: React.PropTypes.string.isRequired,
}

export default Comment;
