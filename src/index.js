import ReactDOM from 'react-dom';
import React from 'react';
import Perf from 'react-addons-perf';
window.Perf = Perf;

import SocialInteractionsBox from './components/SocialInteractionsBox';

window.React = React;

const comments = [{
    id: 'abcd',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
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
        width: '100%',
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
            }}
            cancelButtonText={"Annuler"}
            editButtonText={"Modifier"}
            onRender={() => console.log("render")} />
    </div>,
    document.getElementById('app')
);