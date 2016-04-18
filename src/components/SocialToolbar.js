import React from 'react';

import PlusOneSVG from 'material-ui/lib/svg-icons/social/plus-one';
import CommentSVG from 'material-ui/lib/svg-icons/communication/comment';
import ShareSVG from 'material-ui/lib/svg-icons/social/share';

import SocialButton from './SocialButton';


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

class SocialToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SocialToolbar';
    }
    render() {
        return (
            <div style={containerStyle} role="toolbar" onClick={(e) => this.props.onClick(e)}>
                <div style={style}>
                    <SocialButton
                        icon={<PlusOneSVG style={iconStyle} />} />
                    {this.props.reactionsCount && (
                        <div style={countStyle}>
                            {" "+this.props.reactionsCount+" "}
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
                        icon={<CommentSVG style={iconStyle} />} />
                    {this.props.commentsCount && (
                        <div style={countStyle}>
                            {" "+this.props.commentsCount+" "}
                        </div>
                    )}
                    <SocialButton
                        icon={<ShareSVG style={iconStyle} />} />
                    {this.props.sharesCount && (
                        <div style={countStyle}>
                            {" "+this.props.sharesCount+" "}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

SocialToolbar.propTypes = {
    reactionsCount: React.PropTypes.number,
    commentsCount: React.PropTypes.number,
    sharesCount: React.PropTypes.number,
    onClick: React.PropTypes.func
}


export default SocialToolbar;
