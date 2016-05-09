(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'material-ui/lib/tooltip', './addHoverState', './pureComponent'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('material-ui/lib/tooltip'), require('./addHoverState'), require('./pureComponent'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.tooltip, global.addHoverState, global.pureComponent);
        global.SocialCount = mod.exports;
    }
})(this, function (exports, _react, _tooltip, _addHoverState, _pureComponent) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _tooltip2 = _interopRequireDefault(_tooltip);

    var _addHoverState2 = _interopRequireDefault(_addHoverState);

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

    var countStyle = {
        lineHeight: '36px',
        color: '#777',
        fontSize: '12px',
        marginRight: 6,
        position: 'relative'
    };

    var SocialCount = function SocialCount(props) {

        var countStyleMerged = Object.assign({}, countStyle, props.style);

        countStyleMerged['cursor'] = props.hovered && props.tooltip ? 'pointer' : 'default';

        return _react2.default.createElement(
            'div',
            { style: countStyleMerged },
            props.count,
            props.tooltip && _react2.default.createElement(_tooltip2.default, {
                label: props.tooltip,
                show: props.hovered,
                touch: true,
                style: _extends({
                    boxSizing: 'border-box'
                }, props.tooltipStyle),
                verticalPosition: props.verticalPosition,
                horizontalPosition: props.horizontalPosition })
        );
    };

    SocialCount.propTypes = {
        count: _react2.default.PropTypes.node,
        style: _react2.default.PropTypes.object,
        tooltip: _react2.default.PropTypes.string,
        tooltipStyle: _react2.default.PropTypes.object,
        verticalPosition: _react2.default.PropTypes.oneOf(['bottom', 'top']),
        horizontalPosition: _react2.default.PropTypes.oneOf(['left', 'center', 'right'])
    };

    SocialCount.defaultProps = {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        tooltipStyle: {}
    };

    exports.default = (0, _pureComponent2.default)((0, _addHoverState2.default)(SocialCount));
});