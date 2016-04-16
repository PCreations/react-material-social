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

ReactDOM.render(
    <div style={{
        width: 432,
        backgroundColor: '#fefefe'
    }}>
        <SocialToolbar
            reactionsCount={45}
            commentsCount={1}
            sharesCount={15} />
        <CommentsBox
            opened={true}
            comments={comments} />
    </div>,
    document.getElementById('app')
);