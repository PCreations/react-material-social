(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './SocialInteractionsBox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./SocialInteractionsBox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.SocialInteractionsBox);
    global.index = mod.exports;
  }
})(this, function (exports, _SocialInteractionsBox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _SocialInteractionsBox2 = _interopRequireDefault(_SocialInteractionsBox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _SocialInteractionsBox2.default;
});