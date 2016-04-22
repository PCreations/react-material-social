(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react-dom', 'react', 'react-addons-perf', './components/SocialInteractionsBox'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react-dom'), require('react'), require('react-addons-perf'), require('./components/SocialInteractionsBox'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.reactDom, global.react, global.reactAddonsPerf, global.SocialInteractionsBox);
        global.index = mod.exports;
    }
})(this, function (_reactDom, _react, _reactAddonsPerf, _SocialInteractionsBox) {
    'use strict';

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _react2 = _interopRequireDefault(_react);

    var _reactAddonsPerf2 = _interopRequireDefault(_reactAddonsPerf);

    var _SocialInteractionsBox2 = _interopRequireDefault(_SocialInteractionsBox);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    window.Perf = _reactAddonsPerf2.default;

    window.React = _react2.default;

    var comments = [{
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

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        { style: {
                width: 432,
                backgroundColor: '#fefefe'
            } },
        _react2.default.createElement(_SocialInteractionsBox2.default, {
            reactionsCount: 45,
            commentsCount: 1,
            sharesCount: 15,
            comments: comments,
            commentInputProps: {
                avatar: 'http://lh3.googleusercontent.com/-ImgnbmvkTZ8/AAAAAAAAAAI/AAAAAAAAHZ8/SRkXfj7CBkM/s36-p-k-rw-no/photo.jpg',
                addCommentText: 'Ajoutez un commentaire...',
                plubishButtonText: 'publier'
            },
            cancelButtonText: "Annuler",
            editButtonText: "Modifier" })
    ), document.getElementById('app'));
});