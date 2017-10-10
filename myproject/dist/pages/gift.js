'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      send: '../images/first.png',
      like: '../images/gift.png',
      done: '../images/com.png',
      camera: '../images/相机.png',
      lipstick: '../images/lipstick.png',
      ring: '../images/ring.png',
      flower: '../images/flower.png',
      tie: '../images/tie.png',
      bag: '../images/bag.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlbmQiLCJsaWtlIiwiZG9uZSIsImNhbWVyYSIsImxpcHN0aWNrIiwicmluZyIsImZsb3dlciIsInRpZSIsImJhZyIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxxQkFERDtBQUVMQyxZQUFNLG9CQUZEO0FBR0xDLFlBQU0sbUJBSEQ7QUFJTEMsY0FBUSxrQkFKSDtBQUtMQyxnQkFBVSx3QkFMTDtBQU1MQyxZQUFNLG9CQU5EO0FBT0xDLGNBQVEsc0JBUEg7QUFRTEMsV0FBSyxtQkFSQTtBQVNMQyxXQUFLO0FBVEEsSyxRQVdQQyxPLEdBQVUsRTs7Ozs7NkJBQ0QsQ0FBRzs7OztFQWhCcUIsZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6ImdpZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2VuZDogJy4uL2ltYWdlcy9maXJzdC5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZXMvZ2lmdC5wbmcnLFxuICAgIGRvbmU6ICcuLi9pbWFnZXMvY29tLnBuZycsXG4gICAgY2FtZXJhOiAnLi4vaW1hZ2VzL+ebuOacui5wbmcnLFxuICAgIGxpcHN0aWNrOiAnLi4vaW1hZ2VzL2xpcHN0aWNrLnBuZycsXG4gICAgcmluZzogJy4uL2ltYWdlcy9yaW5nLnBuZycsXG4gICAgZmxvd2VyOiAnLi4vaW1hZ2VzL2Zsb3dlci5wbmcnLFxuICAgIHRpZTogJy4uL2ltYWdlcy90aWUucG5nJyxcbiAgICBiYWc6ICcuLi9pbWFnZXMvYmFnLnBuZydcbiAgfVxuICBtZXRob2RzID0ge31cbiAgb25Mb2FkKCkgeyB9XG59XG4iXX0=