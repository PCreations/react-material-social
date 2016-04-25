import ReactDOM from 'react-dom';
import React from 'react';
import Perf from 'react-addons-perf';
window.Perf = Perf;
import ThumbUp from 'material-ui/lib/svg-icons/action/thumb-up';

import SocialInteractionsBox from './components/SocialInteractionsBox';

window.React = React;

const comments = [];

ReactDOM.render(
    <div style={{
        width: '100%',
        backgroundColor: '#fefefe'
    }}>
        <SocialInteractionsBox
            reactionIcon={<ThumbUp/>}
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
            onRender={(self) => console.log("render", self.state.opened)} />
    </div>,
    document.getElementById('app')
);