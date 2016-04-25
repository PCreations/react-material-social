(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react-dom', 'react', 'react-addons-perf', 'material-ui/lib/svg-icons/action/thumb-up', './components/SocialInteractionsBox'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react-dom'), require('react'), require('react-addons-perf'), require('material-ui/lib/svg-icons/action/thumb-up'), require('./components/SocialInteractionsBox'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.reactDom, global.react, global.reactAddonsPerf, global.thumbUp, global.SocialInteractionsBox);
        global.index = mod.exports;
    }
})(this, function (_reactDom, _react, _reactAddonsPerf, _thumbUp, _SocialInteractionsBox) {
    'use strict';

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _react2 = _interopRequireDefault(_react);

    var _reactAddonsPerf2 = _interopRequireDefault(_reactAddonsPerf);

    var _thumbUp2 = _interopRequireDefault(_thumbUp);

    var _SocialInteractionsBox2 = _interopRequireDefault(_SocialInteractionsBox);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    window.Perf = _reactAddonsPerf2.default;


    window.React = _react2.default;

    var comments = [];

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        { style: {
                width: '100%',
                backgroundColor: '#fefefe'
            } },
        _react2.default.createElement(_SocialInteractionsBox2.default, {
            reactionIcon: _react2.default.createElement(_thumbUp2.default, null),
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
            editButtonText: "Modifier",
            onRender: function onRender(self) {
                return console.log("render", self.state.opened);
            } })
    ), document.getElementById('app'));
});