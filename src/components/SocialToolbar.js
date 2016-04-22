import React from 'react';

import PlusOneSVG from 'material-ui/lib/svg-icons/social/plus-one';
import CommentSVG from 'material-ui/lib/svg-icons/communication/comment';
import ShareSVG from 'material-ui/lib/svg-icons/social/share';

import SocialButton from './SocialButton';
import pureComponent from './pureComponent';


const containerStyle = {
    padding: '16px 8px',
    backgroundColor: '#fefefe',
    height: 36
}

const style = {
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
};

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

    return (
        <div style={containerStyle} role="toolbar" onClick={(e) => props.onClick(e)}>
            <div style={style}>
                <SocialButton
                    onClick={(e) => clickCallbackFactory(
                        e,
                        props.onReactionButtonClick
                    )}
                    icon={<PlusOneSVG style={iconStyle} />} />
                {props.reactionsCount && (
                    <div style={countStyle}>
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
                    icon={<CommentSVG style={iconStyle} />} />
                {props.commentsCount && (
                    <div style={countStyle}>
                        {" "+props.commentsCount+" "}
                    </div>
                )}
                <SocialButton
                    onClick={(e) => clickCallbackFactory(
                        e,
                        props.onShareButtonClick
                    )}
                    icon={<ShareSVG style={iconStyle} />} />
                {props.sharesCount && (
                    <div style={countStyle}>
                        {" "+props.sharesCount+" "}
                    </div>
                )}
            </div>
        </div>
    )
}

SocialToolbar.propTypes = {
    reactionsCount: React.PropTypes.number,
    commentsCount: React.PropTypes.number,
    sharesCount: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onReactionButtonClick: React.PropTypes.func,
    onCommentButtonClick: React.PropTypes.func,
    onShareButtonClick: React.PropTypes.func
}

SocialToolbar.defaultProps = {
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
