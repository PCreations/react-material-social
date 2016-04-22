import React from 'react';

import PlusOneSVG from 'material-ui/lib/svg-icons/social/plus-one';
import MoreVertSVG from 'material-ui/lib/svg-icons/navigation/more-vert';

import SocialButton from './SocialButton';
import addHoverState from './addHoverState';
import pureComponent from './pureComponent';

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

const commentInteractionsContainerStyle = {
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

const socialButtonReactionStyle = {
    button: {
        width: 21,
        height: 21,
        display: 'block',
        background: '#e0e0e0',
    },
    buttonHovered: {
        background: '#e0e0e0'
    },
    icon: {
        width: 14,
        height: 14
    }
}

const socialButtonMoreVertStyle = {
    button: {
        position: 'absolute',
        top: -4,
        right: -4,
        background: 'none',
        height: 21,
        width: 21,
        display: 'block',
        color: 'rgba(255,255,255,0.749)',
        fill: 'rgba(255,255,255,0.749)'
    },
    buttonHovered: {
        background: '#e0e0e0'
    },
    icon: {
        width: 14,
        height: 14
    }
}

const Comment = (props) => {
    const handleCommentClick = (event) => {
        event.persist();
        props.onClick(event);
    }
    let commentItemStyleMerged = Object.assign({}, commentItemStyle, props.style.item)
    let commentItemStyleHoveredMerged = Object.assign({}, commentItemStyleHovered, props.style.hovered)
    let commentAuthorProfileLinkStyleMerged = Object.assign({}, commentAuthorProfileLinkStyle, props.style.authorProfileLink)
    let avatarStyleMerged = Object.assign({}, avatarStyle, props.style.avatar)
    let commentHeadingStyleMerged = Object.assign({}, commentHeadingStyle, props.style.heading)
    let commentAuthorHeadingStyleMerged = Object.assign({}, commentAuthorHeadingStyle, props.style.authorHeading)
    let commentAuthorStyleMerged = Object.assign({}, commentAuthorStyle, props.style.author)
    let commentReactionsCountStyleMerged = Object.assign({}, commentReactionsCountStyle, props.style.reactionsCount)
    let commentBodyStyleMerged = Object.assign({}, commentBodyStyle, props.style.body)
    let commentInteractionsContainerStyleMerged = Object.assign({}, commentInteractionsContainerStyle, props.style.interactionsContainer)
    let commentReactionButtonContainerStyleMerged = Object.assign({}, commentReactionButtonContainerStyle, props.style.reactionButtonContainer)
    let moreVertButtonContainerStyleMerged = Object.assign({}, moreVertButtonContainerStyle, props.style.moreVertButtonContainer)
    let timeSinceStyleMerged = Object.assign({}, timeSinceStyle, props.style.timeSince)
    let socialButtonReactionStyleMerged = Object.assign({}, socialButtonReactionStyle, props.socialButtonReactionStyle)
    let socialButtonMoreVertStyleMerged = Object.assign({}, socialButtonMoreVertStyle, props.socialButtonMoreVertStyle)

    if (props.hovered) {
        commentItemStyleMerged = Object.assign({}, commentItemStyleMerged, commentItemStyleHoveredMerged);
    }
    return (
        <div
            style={commentItemStyleMerged}
            onClick={(e) => handleCommentClick(e)}>
            <a href="#" style={commentAuthorProfileLinkStyleMerged}>
                <img width={36} height={36} style={avatarStyleMerged} src={props.avatar} />
            </a>
            <div role="heading" style={commentHeadingStyleMerged}>
                <div style={commentAuthorHeadingStyleMerged}>
                    <a href="#" style={commentAuthorStyleMerged}>{props.author}</a>
                    <span style={commentReactionsCountStyleMerged}>{props.reactionsCount}</span>
                </div>
                <div style={commentBodyStyleMerged}>
                    {props.text}
                </div>
            </div>
            <div style={commentInteractionsContainerStyleMerged}>
                <div style={commentReactionButtonContainerStyleMerged}>
                    <SocialButton
                        onClick={(e) => e.stopPropagation()}
                        icon={<PlusOneSVG/>}
                        style={socialButtonReactionStyleMerged}/>
                </div>
                <div style={moreVertButtonContainerStyleMerged}>
                    {props.hovered ? (
                        <SocialButton
                            icon={<MoreVertSVG/>}
                            style={socialButtonMoreVertStyleMerged}/>
                    ) : (
                        <div style={timeSinceStyleMerged}>
                            <span>{props.timeSince}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Comment.propTypes = {
    style: React.PropTypes.shape({
        item: React.PropTypes.object,
        hovered: React.PropTypes.object,
        authorProfileLink: React.PropTypes.object,
        avatar: React.PropTypes.object,
        heading: React.PropTypes.object,
        authorHeading: React.PropTypes.object,
        author: React.PropTypes.object,
        reactionsCount: React.PropTypes.object,
        body: React.PropTypes.object,
        interactionsContainer: React.PropTypes.object,
        reactionButtonContainer: React.PropTypes.object,
        moreVertButtonContainer: React.PropTypes.object,
        timeSince: React.PropTypes.object,
    }),
    socialButtonReactionStyle: SocialButton.propTypes.style,
    socialButtonMortVertStyle: SocialButton.propTypes.style,
    id: React.PropTypes.string.isRequired,
    avatar: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    reactionsCount: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    timeSince: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    hovered: React.PropTypes.bool
}

Comment.defaultProps = {
    style: {},
    socialButtonReactionStyle: {},
    socialButtonMoreVertStyle: {},
    hovered: false
}

export default pureComponent(addHoverState(Comment), ['onClick']);
