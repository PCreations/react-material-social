(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'material-ui/lib/popover/popover', 'material-ui/lib/menus/menu', 'material-ui/lib/menus/menu-item', 'material-ui/lib/svg-icons/social/plus-one', './SocialToolbar', './SocialButton', './CommentsBox', './Comment', './CommentInput', './EditingComment', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('material-ui/lib/popover/popover'), require('material-ui/lib/menus/menu'), require('material-ui/lib/menus/menu-item'), require('material-ui/lib/svg-icons/social/plus-one'), require('./SocialToolbar'), require('./SocialButton'), require('./CommentsBox'), require('./Comment'), require('./CommentInput'), require('./EditingComment'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.popover, global.menu, global.menuItem, global.plusOne, global.SocialToolbar, global.SocialButton, global.CommentsBox, global.Comment, global.CommentInput, global.EditingComment, global.pureComponent);
        global.SocialInteractionsBox = mod.exports;
    }
})(this, function (exports, _react, _popover, _menu, _menuItem, _plusOne, _SocialToolbar, _SocialButton, _CommentsBox, _Comment, _CommentInput, _EditingComment, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _popover2 = _interopRequireDefault(_popover);

    var _menu2 = _interopRequireDefault(_menu);

    var _menuItem2 = _interopRequireDefault(_menuItem);

    var _plusOne2 = _interopRequireDefault(_plusOne);

    var _SocialToolbar2 = _interopRequireDefault(_SocialToolbar);

    var _SocialButton2 = _interopRequireDefault(_SocialButton);

    var _CommentsBox2 = _interopRequireDefault(_CommentsBox);

    var _Comment2 = _interopRequireDefault(_Comment);

    var _CommentInput2 = _interopRequireDefault(_CommentInput);

    var _EditingComment2 = _interopRequireDefault(_EditingComment);

    var _pureComponent2 = _interopRequireDefault(_pureComponent);

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

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var socialInteractionsBoxStyle = {
        WebkitFontSmoothing: 'antialiased',
        color: '#212121',
        fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif'
    };

    var PurePopover = (0, _pureComponent2.default)(_popover2.default, 'Popover', ['onRequestClose']);

    var SocialInteractionsBox = function (_React$Component) {
        _inherits(SocialInteractionsBox, _React$Component);

        function SocialInteractionsBox(props) {
            _classCallCheck(this, SocialInteractionsBox);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SocialInteractionsBox).call(this, props));

            _this.displayName = 'SocialInteractionsBox';
            _this.state = {
                opened: false,
                reactionButtonActive: false,
                inputCommentOpened: false,
                clickedComment: null,
                popoverOpened: false,
                clickedCommentId: "",
                editingCommentId: "",
                editingCommentText: "",
                inputText: "",
                activeReactionButtons: []
            };
            return _this;
        }

        _createClass(SocialInteractionsBox, [{
            key: 'setClickedComment',
            value: function setClickedComment(e, commentId) {
                this.setState({
                    popoverOpened: true,
                    clickedComment: e.currentTarget,
                    clickedCommentId: commentId
                });
            }
        }, {
            key: 'handleRequestClose',
            value: function handleRequestClose(e) {
                this.setState({
                    popoverOpened: false,
                    clickedComment: null
                });
            }
        }, {
            key: 'handleEditClick',
            value: function handleEditClick(e, commentId, commentText) {
                this.setState({
                    editingCommentId: "",
                    editingCommentText: ""
                }, this.props.onEditClick(e, commentId, commentText));
            }
        }, {
            key: 'getCommentTextFromId',
            value: function getCommentTextFromId(id) {
                var comment = this.props.comments.filter(function (c) {
                    return c.id == id;
                })[0];
                return comment.text;
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.props.onRender(this);
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                this.props.onRender(this);
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                var _props = this.props;
                var comments = _props.comments;
                var onCommentButtonClick = _props.onCommentButtonClick;
                var props = _props.props;


                var onAddCommentClick = function onAddCommentClick(e) {
                    _this2.setState({ inputCommentOpened: true });
                };

                var onCommentButtonClickCallback = function onCommentButtonClickCallback(e) {
                    _this2.setState({
                        opened: true,
                        inputCommentOpened: true
                    }, onCommentButtonClick(e));
                };

                var commentInputProps = Object.assign({}, this.props.commentInputProps, {
                    onAddCommentClick: onAddCommentClick,
                    opened: this.state.inputCommentOpened,
                    onTextChange: function onTextChange(e) {
                        return _this2.setState({ inputText: e.target.value });
                    },
                    text: this.state.inputText
                });

                var style = Object.assign({}, socialInteractionsBoxStyle, this.props.style.socialInteractionsBox);

                comments = this.props.comments.map(function (c) {
                    c.reactionButtonActive = _this2.state.activeReactionButtons.indexOf(c.id) !== -1;
                    return c;
                });

                return _react2.default.createElement(
                    'div',
                    { style: style },
                    _react2.default.createElement(_SocialToolbar2.default, {
                        reactionIcon: this.props.reactionIcon,
                        reactionButtonactive: this.state.reactionButtonActive,
                        reactionsCount: this.props.reactionsCount,
                        commentsCount: this.props.commentsCount,
                        sharesCount: this.props.sharesCount,
                        onClick: function onClick(e) {
                            return _this2.setState({
                                opened: !_this2.state.opened,
                                inputCommentOpened: false,
                                editingCommentId: ''
                            });
                        },
                        onReactionButtonClick: function onReactionButtonClick(e) {
                            return _this2.setState({
                                reactionButtonActive: !_this2.state.reactionButtonActive
                            }, _this2.props.onReactionButtonClick(e));
                        },
                        onShareButtonClick: this.props.onShareButtonClick,
                        onCommentButtonClick: onCommentButtonClickCallback,
                        style: this.props.style.socialToolbar,
                        socialButtonsStyle: this.props.style.socialToolbarButton || this.props.style.socialButton }),
                    _react2.default.createElement(_CommentsBox2.default, {
                        onCommentBoxClosedClick: function onCommentBoxClosedClick(e) {
                            return _this2.setState({ opened: true });
                        },
                        opened: this.state.opened,
                        comments: comments,
                        reactionIcon: this.props.reactionIcon,
                        onReactionButtonClick: function onReactionButtonClick(e, commentId) {
                            var buttonIndex = _this2.state.activeReactionButtons.indexOf(commentId);
                            var activeReactionButtons = _this2.state.activeReactionButtons;
                            if (buttonIndex === -1) {
                                activeReactionButtons.push(commentId);
                            } else {
                                activeReactionButtons.splice(buttonIndex, 1);
                            }
                            _this2.setState({
                                activeReactionButtons: activeReactionButtons
                            });
                        },
                        onCommentClick: function onCommentClick(e, commentId) {
                            return _this2.setClickedComment(e, commentId);
                        },
                        commentInputProps: _extends({}, commentInputProps, {
                            onPublishButtonClick: function onPublishButtonClick(e, commentText) {
                                _this2.setState({
                                    inputCommentOpened: false
                                }, _this2.props.onPublishButtonClick(e, commentText));
                            }
                        }),
                        editingCommentId: this.state.editingCommentId,
                        editingCommentText: this.state.editingCommentText,
                        commentPopover: _react2.default.createElement(
                            PurePopover,
                            {
                                open: this.state.popoverOpened,
                                anchorEl: this.state.clickedComment,
                                anchorOrigin: {
                                    horizontal: 'middle',
                                    vertical: 'top'
                                },
                                targetOrigin: {
                                    horizontal: 'left',
                                    vertical: 'top'
                                },
                                onRequestClose: function onRequestClose(e) {
                                    return _this2.handleRequestClose(e);
                                } },
                            _react2.default.createElement(
                                _menu2.default,
                                null,
                                _react2.default.createElement(_menuItem2.default, { primaryText: 'Ajouter +1 à ce commentaire' }),
                                _react2.default.createElement(_menuItem2.default, { primaryText: 'Signaler ce commentaire' }),
                                _react2.default.createElement(_menuItem2.default, { primaryText: 'Modifier ce commentaire', onClick: function onClick(e) {
                                        _this2.setState({
                                            popoverOpened: false,
                                            editingCommentId: _this2.state.clickedCommentId,
                                            editingCommentText: _this2.getCommentTextFromId(_this2.state.clickedCommentId)
                                        });
                                    } })
                            )
                        ),
                        cancelButtonText: this.props.cancelButtonText,
                        editButtonText: this.props.editButtonText,
                        onCancelClick: function onCancelClick(e) {
                            return _this2.setState({ editingCommentId: '' });
                        },
                        onEditClick: function onEditClick(e, commentId, commentText) {
                            return _this2.handleEditClick(e, commentId, commentText);
                        },
                        onEditingCommentTextChange: function onEditingCommentTextChange(e) {
                            return _this2.setState({ editingCommentText: e.target.value });
                        },
                        style: this.props.style.commentsBox,
                        editingCommentStyle: this.props.style.editingComment,
                        commentStyle: this.props.style.comment })
                );
            }
        }]);

        return SocialInteractionsBox;
    }(_react2.default.Component);

    SocialInteractionsBox.propTypes = {
        style: _react2.default.PropTypes.shape({
            socialInteractionsBox: _react2.default.PropTypes.object,
            socialToolbar: _SocialToolbar2.default.propTypes.style,
            socialToolbarButton: _SocialButton2.default.propTypes.style,
            commentsBox: _CommentsBox2.default.propTypes.style,
            comment: _Comment2.default.propTypes.style,
            editingComment: _EditingComment2.default.propTypes.style,
            commentInput: _CommentInput2.default.propTypes.style,
            socialButton: _SocialButton2.default.propTypes.style
        }),
        reactionIcon: _react2.default.PropTypes.element,
        reactionsCount: _react2.default.PropTypes.number,
        commentsCount: _react2.default.PropTypes.number,
        sharesCount: _react2.default.PropTypes.number,
        onReactionButtonClick: _react2.default.PropTypes.func,
        onCommentButtonClick: _react2.default.PropTypes.func,
        onEditClick: _react2.default.PropTypes.func,
        onPublishButtonClick: _react2.default.PropTypes.func,
        onShareButtonClick: _react2.default.PropTypes.func,
        comments: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
            id: _react2.default.PropTypes.string.isRequired,
            avatar: _react2.default.PropTypes.string.isRequired,
            author: _react2.default.PropTypes.string.isRequired,
            reactionsCount: _react2.default.PropTypes.string.isRequired
        })),
        commentInputProps: _react2.default.PropTypes.shape({
            avatar: _react2.default.PropTypes.string.isRequired,
            addCommentText: _react2.default.PropTypes.string.isRequired,
            plubishButtonText: _react2.default.PropTypes.string.isRequired,
            opened: _react2.default.PropTypes.bool,
            text: _react2.default.PropTypes.string
        }),
        cancelButtonText: _react2.default.PropTypes.string.isRequired,
        editButtonText: _react2.default.PropTypes.string.isRequired,
        onRender: _react2.default.PropTypes.func
    };

    SocialInteractionsBox.defaultProps = {
        style: {
            socialInteractionsBox: {},
            socialToolbar: {},
            socialToolbarButton: {},
            commentsBox: {},
            comment: {},
            editingComment: {},
            commentInput: {},
            socialButton: {}
        },
        reactionIcon: _react2.default.createElement(_plusOne2.default, null),
        onReactionButtonClick: function onReactionButtonClick() {},
        onCommentButtonClick: function onCommentButtonClick() {},
        onRender: function onRender() {}
    };

    exports.default = SocialInteractionsBox;
});