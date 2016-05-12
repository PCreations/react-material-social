(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.addHoverState = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

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

    var addHoverState = function addHoverState(Component) {
        var HoverableComponent = function (_React$Component) {
            _inherits(HoverableComponent, _React$Component);

            function HoverableComponent(props) {
                _classCallCheck(this, HoverableComponent);

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HoverableComponent).call(this, props));

                _this.displayName = 'HoverableComponent';
                _this.state = {
                    hovered: false
                };
                return _this;
            }

            _createClass(HoverableComponent, [{
                key: '_isInRef',
                value: function _isInRef(e) {
                    var IE = document.all ? true : false;
                    var refRect = this._ref.getBoundingClientRect();
                    var posX = void 0,
                        posY = void 0;
                    if (IE) {
                        // grab the x-y pos.s if browser is IE
                        posX = event.clientX + document.body.scrollLeft;
                        posY = event.clientY + document.body.scrollTop;
                    } else {
                        // grab the x-y pos.s if browser is NS
                        posX = e.pageX;
                        posY = e.pageY;
                    }
                    // catch possible negative values in NS4
                    if (posX < 0) {
                        posX = 0;
                    }
                    if (posY < 0) {
                        posY = 0;
                    }

                    return posX >= refRect.left && posX <= refRect.right && posY >= refRect.top && posY <= refRect.bottom;
                }
            }, {
                key: 'onMouseEnter',
                value: function onMouseEnter(e) {
                    if (this._isInRef(e)) {
                        this.setState({ hovered: true });
                    }
                }
            }, {
                key: 'onMouseLeave',
                value: function onMouseLeave(e) {
                    this.setState({ hovered: false });
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this2 = this;

                    return _react2.default.createElement(
                        'div',
                        {
                            ref: function ref(_ref) {
                                return _this2._ref = _ref;
                            },
                            onMouseEnter: function onMouseEnter(e) {
                                return _this2.onMouseEnter(e);
                            },
                            onMouseLeave: function onMouseLeave(e) {
                                return _this2.onMouseLeave(e);
                            } },
                        _react2.default.createElement(Component, _extends({}, this.props, this.state))
                    );
                }
            }]);

            return HoverableComponent;
        }(_react2.default.Component);

        HoverableComponent.propTypes = Object.assign({}, {}, Component.propTypes);

        return HoverableComponent;
    };

    exports.default = addHoverState;
});