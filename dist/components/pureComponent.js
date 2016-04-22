(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'immutable'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('immutable'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.immutable);
        global.pureComponent = mod.exports;
    }
})(this, function (exports, _react, _immutable) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _immutable2 = _interopRequireDefault(_immutable);

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

    var pureComponent = function pureComponent(Component) {
        var propsToRemove = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        var PureComponent = function (_React$Component) {
            _inherits(PureComponent, _React$Component);

            function PureComponent(props) {
                _classCallCheck(this, PureComponent);

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PureComponent).call(this, props));

                _this.displayName = 'PureComponent';
                return _this;
            }

            _createClass(PureComponent, [{
                key: 'comparator',
                value: function comparator(props, nextProps, state, nextState) {
                    return !_immutable2.default.is(_immutable2.default.fromJS(props), _immutable2.default.fromJS(nextProps)) || !_immutable2.default.is(_immutable2.default.fromJS(state), _immutable2.default.fromJS(nextState));
                }
            }, {
                key: 'removeKeysFromObject',
                value: function removeKeysFromObject(obj, keys) {
                    var target = {};for (var i in obj) {
                        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
                    }return target;
                }
            }, {
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(nextProps, nextState) {
                    var propsToCompare = this.removeKeysFromObject(this.props, propsToRemove),
                        nextPropsToCompare = this.removeKeysFromObject(nextProps, propsToRemove);

                    return this.comparator(propsToCompare, nextPropsToCompare, this.state, nextState);
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(Component, _extends({}, this.props, this.state));
                }
            }]);

            return PureComponent;
        }(_react2.default.Component);

        PureComponent.propTypes = Object.assign({}, {}, Component.propTypes);

        return PureComponent;
    };

    exports.default = pureComponent;
});