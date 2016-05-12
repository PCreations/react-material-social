import ReactDOM from 'react-dom';
import React from 'react';
import Perf from 'react-addons-perf';
window.Perf = Perf;
import ThumbUp from 'material-ui/lib/svg-icons/action/thumb-up';


import SocialInteractionsBox from './components/SocialInteractionsBox';

window.React = React;

const comments = [{
    id: 'abcd',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h',
    reactionsCountTooltip: 'Foo bar aime votre commentaire'
},{
    id: 'abcdd',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h',
},{
    id: 'abcdl',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h'
},{
    id: 'abcdf',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h'
},
{
    id: 'abcdg',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h'
},
{
    id: 'abcdh',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h'
},{
    id: 'abcdj',
    avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
    author: 'Shubhansh Jaiswal',
    text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
    reactionsCount: '+5',
    timeSince: '6h'
}];

ReactDOM.render(
    <div style={{
        width: '100%',
        backgroundColor: '#fefefe'
    }}>
        <SocialInteractionsBox
            readOnly={false}
            reactionIcon={<ThumbUp/>}
            reactionsCount={45}
            reactionsCountTooltip={'Vous et 45 autres digggers aimez ça'}
            commentsCount={1}
            clickedCommentEditable={true}
            comments={comments}
            commentInputProps={{
                avatar: 'http://lh3.googleusercontent.com/-ImgnbmvkTZ8/AAAAAAAAAAI/AAAAAAAAHZ8/SRkXfj7CBkM/s36-p-k-rw-no/photo.jpg',
                addCommentText: 'Ajoutez un commentaire...',
                plubishButtonText: 'publier',
            }}
            previewedComment={{
                avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
                author: 'Shubhansh Jaiswal',
                text: 'Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire...'
            }}
            cancelButtonText={"Annuler"}
            editButtonText={"Modifier"}
            onRender={(self) => console.log("render", self.state.opened)} />
    </div>,
    document.getElementById('app')
);