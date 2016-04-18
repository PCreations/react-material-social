import ReactDOM from 'react-dom';
import React from 'react';

import SocialToolbar from './components/SocialToolbar';
import CommentsBox from './components/CommentsBox';

window.React = React;

const comments = [{
    id: 'abcd',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'abcdE',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'qsdq',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'mlk',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'www',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'xxx',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'zzz',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}, {
    id: 'wxz',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "what is the material used in google's primer app?﻿",
    reactionsCount: '+5',
    timeSince: '6h'
}];


class SocialInteractionsBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SocialInteractionsBox';
        this.state = {
            opened: false,
            inputCommentOpened: false,
        }
    }
    render() {
        let {comments, props} = this.props;

        let onAddCommentClick = (e) => {
            this.setState({inputCommentOpened: true});
        }

        let commentInputProps = Object.assign({}, this.props.commentInputProps, {
            onAddCommentClick: onAddCommentClick,
            opened: this.state.inputCommentOpened
        });

        console.log(commentInputProps, commentInputProps.onAddCommentClick);

        return (
            <div>
                <SocialToolbar {...props} onClick={(e) => this.setState({
                    opened: !this.state.opened,
                    inputCommentOpened: !this.state.inputCommentOpened
                })} />
                <CommentsBox
                    onCommentBoxClosedClick={(e) => this.setState({opened: true})}
                    opened={this.state.opened}
                    comments={comments}
                    commentInputProps={commentInputProps} />
            </div>
        );
    }
}

SocialInteractionsBox.propTypes = {
    reactionsCount: React.PropTypes.number,
    commentsCount: React.PropTypes.number,
    sharesCount: React.PropTypes.number,
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        avatar: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        reactionsCount: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    })),
    commentInputProps: React.PropTypes.shape({
        avatar: React.PropTypes.string.isRequired,
        addCommentText: React.PropTypes.string.isRequired,
        plubishButtonText: React.PropTypes.string.isRequired,
        opened: React.PropTypes.bool
    })
}


ReactDOM.render(
    <div style={{
        width: 432,
        backgroundColor: '#fefefe'
    }}>
        <SocialInteractionsBox
            reactionsCount={45}
            commentsCount={1}
            sharesCount={15}
            comments={comments}
            commentInputProps={{
                avatar: 'http://lh3.googleusercontent.com/-ImgnbmvkTZ8/AAAAAAAAAAI/AAAAAAAAHZ8/SRkXfj7CBkM/s36-p-k-rw-no/photo.jpg',
                addCommentText: 'Ajoutez un commentaire...',
                plubishButtonText: 'publier',
            }} />
    </div>,
    document.getElementById('app')
);