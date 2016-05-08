import React from 'react';

import PlusOneSVG from 'material-ui/lib/svg-icons/social/plus-one';
import CommentSVG from 'material-ui/lib/svg-icons/communication/comment';
import ShareSVG from 'material-ui/lib/svg-icons/social/share';

import SocialButton from './SocialButton';
import pureComponent from './pureComponent';


const containerStyle = {
    padding: '16px 8px',
    backgroundColor: '#fefefe',
    height: 36,
    display: 'flex',
    WebkitBoxAlign: 'center',
    boxAlign: 'center',
    WebkitAlignItems: 'center',
    alignItems: 'center',
    WebkitBoxOrient: 'horizontal',
    boxOrient: 'horizontal',
    WebkitFlexDirection: 'row',
    flexDirection: 'row',
    WebkitFlexWrap: 'nowrap',
    flexWrap: 'nowrap',
    boxPack: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center'
}

const iconStyle = {
    width: '100%',
    height: '100%',
    color: '#444',
    fill: '#444',
}

const countStyle = {
    lineHeight: '36px',
    color: '#777',
    fontSize: '12px',
    marginRight: 6
}

const SocialToolbar = (props) => {

    let clickCallbackFactory = (e, func) => {
        return (() => {
            e.stopPropagation();
            func(e);
        })()
    }

    let containerStyleMerged = Object.assign({}, containerStyle, props.style.container)

    let iconStyleMerged = Object.assign({}, iconStyle, props.style.icon)

    let countStyleMerged = Object.assign({}, countStyle, props.style.count)

    return (
        <div style={containerStyleMerged} role="toolbar" onClick={(e) => props.onClick(e)}>
            <SocialButton
                active={props.reactionButtonActive}
                disabled={props.readOnly}
                onClick={(e) => clickCallbackFactory(
                    e,
                    props.onReactionButtonClick
                )}
                icon={React.cloneElement(props.reactionIcon, {style: iconStyleMerged})}
                style={props.socialButtonsStyle}/>
            {props.reactionsCount && (
                <div style={countStyleMerged}>
                    {" "+props.reactionsCount+" "}
                </div>
            )}
            <div style={{
                WebkitBoxFlex: 1,
                boxFlex: 1,
                WebkitFlexGrow: 1,
                flexGrow: 1,
                WebkitFlexShrink: 1,
                flexShrink: 1
            }} />
            <SocialButton
                onClick={(e) => clickCallbackFactory(
                    e,
                    props.onCommentButtonClick
                )}
                icon={React.cloneElement(props.commentIcon, {style: iconStyleMerged})}
                style={props.socialButtonsStyle}/>
            <div style={countStyleMerged}>
                {" "+props.commentsCount+" "}
            </div>
            <SocialButton
                onClick={(e) => clickCallbackFactory(
                    e,
                    props.onShareButtonClick
                )}
                icon={React.cloneElement(props.shareIcon, {style: iconStyleMerged})}
                style={props.socialButtonsStyle}/>
            <div style={countStyleMerged}>
                {" "+props.sharesCount+" "}
            </div>
        </div>
    )
}

SocialToolbar.propTypes = {
    style: React.PropTypes.shape({
        container: React.PropTypes.object,
        icon: React.PropTypes.object,
        count: React.PropTypes.object
    }),
    readOnly: React.PropTypes.bool,
    reactionIcon: React.PropTypes.element,
    commentIcon: React.PropTypes.element,
    shareIcon: React.PropTypes.element,
    reactionButtonActive: React.PropTypes.bool,
    socialButtonsStyle: SocialButton.propTypes.style,
    reactionsCount: React.PropTypes.number,
    commentsCount: React.PropTypes.number,
    sharesCount: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onReactionButtonClick: React.PropTypes.func,
    onCommentButtonClick: React.PropTypes.func,
    onShareButtonClick: React.PropTypes.func
}

SocialToolbar.defaultProps = {
    style: {},
    readOnly: false,
    reactionIcon: <PlusOneSVG/>,
    commentIcon: <CommentSVG/>,
    shareIcon: <ShareSVG/>,
    commentsCount: 0,
    reactionsCount: 0,
    sharesCount: 0,
    reactionButtonActive: false,
    onReactionButtonClick: (e) => console.log('reaction button clicked'),
    onCommentButtonClick: (e) => console.log('comment button clicked'),
    onShareButtonClick: (e) => console.log('share button clicked')
}

export default pureComponent(SocialToolbar, [
    'onClick',
    'onReactionButtonClick',
    'onCommentButtonClick',
    'onShareButtonClick'
]);
