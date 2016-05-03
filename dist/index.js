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

    var _ref;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    window.Perf = _reactAddonsPerf2.default;


    window.React = _react2.default;

    var comments = [(_ref = {
        id: 'abcd',
        avatar: 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg',
        author: 'Shubhansh Jaiswal',
        text: "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel",
        reactionsCount: '+5',
        timeSince: '6h'
    }, _defineProperty(_ref, 'id', 'abcdd'), _defineProperty(_ref, 'avatar', 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg'), _defineProperty(_ref, 'author', 'Shubhansh Jaiswal'), _defineProperty(_ref, 'text', "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel"), _defineProperty(_ref, 'reactionsCount', '+5'), _defineProperty(_ref, 'timeSince', '6h'), _defineProperty(_ref, 'id', 'abcdl'), _defineProperty(_ref, 'avatar', 'https://lh3.googleusercontent.com/-_vBaPOEPDzs/AAAAAAAAAAI/AAAAAAAAAEA/CC4I2POdOFk/s36-p-k-rw-no/photo.jpg'), _defineProperty(_ref, 'author', 'Shubhansh Jaiswal'), _defineProperty(_ref, 'text', "Sa n as aucun intérêt, une application de plus pour te bouffer un peu plus de mémoire dans le tel"), _defineProperty(_ref, 'reactionsCount', '+5'), _defineProperty(_ref, 'timeSince', '6h'), _ref)];

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