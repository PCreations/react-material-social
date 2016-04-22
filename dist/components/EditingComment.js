(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-dom', 'material-ui/lib/snackbar', './pureComponent', './addHoverState'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-dom'), require('material-ui/lib/snackbar'), require('./pureComponent'), require('./addHoverState'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.snackbar, global.pureComponent, global.addHoverState);
        global.EditingComment = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _snackbar, _pureComponent, _addHoverState) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _snackbar2 = _interopRequireDefault(_snackbar);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

    var _addHoverState2 = _interopRequireDefault(_addHoverState);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var editingCommentContainerStyle = {
        overflow: 'hidden',
        padding: '12px 16px',
        WebkitTransition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
        display: 'flex',
        transition: 'background-color .3s cubic-bezier(0,0,0.2,1)',
        backgroundColor: '#fff',
        maxHeight: 400
    };

    var editingCommentContainerStyleHovered = {
        cursor: 'pointer',
        backgroundColor: '#f3f3f3'
    };

    var avatarStyle = {
        height: 36,
        width: 36,
        WebkitBorderRadius: '50%',
        borderRadius: '50%',
        flex: 'none'
    };

    var editingCommentBlocStyle = {
        overflow: 'hidden',
        marginLeft: '16px',
        WebkitBoxFlex: 'auto',
        WebkitFlex: 'auto',
        flex: 'auto'
    };

    var editingCommentTextContainerStyle = {
        padding: '8px 0'
    };

    var editingCommentTextStyle = {
        height: '18px',
        overflowY: 'hidden',
        minHeight: '18px',
        outline: 'none',
        position: 'relative',
        width: '100%'
    };

    var editingCommentTextarea = {
        overflowY: 'hidden',
        background: 'transparent',
        border: 0,
        fontSize: '14px',
        height: '100%',
        margin: 0,
        lineHeight: '18px',
        minHeight: '18px',
        outline: 'none',
        padding: 0,
        position: 'absolute',
        resize: 'none',
        width: '100%'
    };

    var buttonStyle = {
        color: '#4285f4',
        WebkitUserSelect: 'none',
        WebkitTransition: 'background .2s .1s',
        transition: 'background .2s .1s',
        border: 0,
        WebkitBorderRadius: '3px',
        borderRadius: '3px',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: 500,
        minWidth: '4em',
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        textTransform: 'uppercase',
        WebkitTapHighlightColor: 'transparent',
        zIndex: 0,
        'float': 'right'
    };

    var cancelButtonStyle = _extends({}, buttonStyle, {
        marginRight: '32px'
    });

    var editButtonStyle = _extends({}, buttonStyle, {
        WebkitBoxShadow: 'none',
        boxShadow: 'none',
        color: 'rgba(68,68,68,0.502)',
        cursor: 'default',
        fill: 'rgba(68,68,68,0.502)'
    });

    var editButtonTextActiveStyle = {
        cursor: 'pointer',
        color: '#2962ff'
    };

    var buttonTextStyle = {
        display: 'inline-block',
        margin: '.5em',
        fontWeight: 700
    };

    var EditingComment = function EditingComment(props) {

        var editingCommentContainerStyleMerged = Object.assign({}, editingCommentContainerStyle, props.style.container);
        var editingCommentContainerStyleHoveredMerged = Object.assign({}, editingCommentContainerStyleHovered, props.style.hovered);
        var avatarStyleMerged = Object.assign({}, avatarStyle, props.style.avatar);
        var editingCommentBlocStyleMerged = Object.assign({}, editingCommentBlocStyle, props.style.commentBloc);
        var editingCommentTextContainerStyleMerged = Object.assign({}, editingCommentTextContainerStyle, props.style.commentTextContainer);
        var editingCommentTextStyleMerged = Object.assign({}, editingCommentTextStyle, props.style.commentText);
        var editingCommentTextareaMerged = Object.assign({}, editingCommentTextarea, props.style.commentTextarea);
        var buttonStyleMerged = Object.assign({}, buttonStyle, props.style.button);
        var cancelButtonStyleMerged = Object.assign({}, buttonStyleMerged, cancelButtonStyle, props.style.cancelButton);
        var editButtonStyleMerged = Object.assign({}, buttonStyleMerged, editButtonStyle, props.style.editButton);
        var editButtonTextActiveStyleMerged = Object.assign({}, editButtonTextActiveStyle, props.style.editButtonTextActive);
        var buttonTextStyleMerged = Object.assign({}, buttonTextStyle, props.style.buttonTextStyle);

        editingCommentContainerStyleMerged = Object.assign({}, editingCommentContainerStyleMerged, props.hovered ? editingCommentContainerStyleHoveredMerged : {});

        editButtonStyleMerged = Object.assign({}, editButtonStyleMerged, props.text.length > 0 && props.text != props.originalText ? editButtonTextActiveStyleMerged : {});

        return _react2.default.createElement(
            'div',
            { style: editingCommentContainerStyleMerged },
            _react2.default.createElement('img', { width: 36, height: 36, style: avatarStyleMerged, src: props.avatar }),
            _react2.default.createElement(
                'div',
                { style: editingCommentBlocStyleMerged },
                _react2.default.createElement(
                    'div',
                    { style: editingCommentTextContainerStyleMerged },
                    _react2.default.createElement(
                        'div',
                        { style: editingCommentTextStyleMerged },
                        _react2.default.createElement('textarea', {
                            style: editingCommentTextareaMerged,
                            value: props.text,
                            ref: function ref(_ref) {
                                _ref && _reactDom2.default.findDOMNode(_ref).focus();
                            },
                            onChange: function onChange(e) {
                                return props.onTextChange(e);
                            } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { role: 'button', style: editButtonStyleMerged, onClick: function onClick(e) {
                            return props.onEditClick(e, props.id, props.text);
                        } },
                    _react2.default.createElement(
                        'span',
                        { style: buttonTextStyleMerged },
                        props.editButtonText
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { role: 'button', style: cancelButtonStyleMerged, onClick: function onClick(e) {
                            return props.onCancelClick(e);
                        } },
                    _react2.default.createElement(
                        'span',
                        { style: buttonTextStyleMerged },
                        props.cancelButtonText
                    )
                )
            )
        );
    };

    EditingComment.propTypes = {
        style: _react2.default.PropTypes.shape({
            container: _react2.default.PropTypes.object,
            hovered: _react2.default.PropTypes.object,
            avatar: _react2.default.PropTypes.object,
            commentBloc: _react2.default.PropTypes.object,
            commentTextContainer: _react2.default.PropTypes.object,
            commentText: _react2.default.PropTypes.object,
            commentTextarea: _react2.default.PropTypes.object,
            button: _react2.default.PropTypes.object,
            cancelButton: _react2.default.PropTypes.object,
            editButton: _react2.default.PropTypes.object,
            editButtonTextActive: _react2.default.PropTypes.object,
            buttonText: _react2.default.PropTypes.object
        }),
        id: _react2.default.PropTypes.string.isRequired,
        avatar: _react2.default.PropTypes.string.isRequired,
        text: _react2.default.PropTypes.string.isRequired,
        originalText: _react2.default.PropTypes.string.isRequired,
        hovered: _react2.default.PropTypes.bool.isRequired,
        cancelButtonText: _react2.default.PropTypes.string.isRequired,
        editButtonText: _react2.default.PropTypes.string.isRequired,
        onCancelClick: _react2.default.PropTypes.func.isRequired,
        onEditClick: _react2.default.PropTypes.func.isRequired,
        onTextChange: _react2.default.PropTypes.func.isRequired
    };

    EditingComment.defaultProps = {
        style: {},
        hovered: false
    };

    exports.default = (0, _pureComponent2.default)((0, _addHoverState2.default)(EditingComment), ['onCancelClick', 'onEditClick', 'onTextChange']);
});