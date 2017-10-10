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
    }, _this.methods = {
      female: function female() {
        var self = this;
        self.send = '../images/first.png';
        self.like = '../images/gift.png';
        self.done = '../images/com.png';
        self.camera = '../images/相机.png';
        self.lipstick = '../images/lipstick.png';
        self.ring = '../images/ring.png';
        self.flower = '../images/flower.png';
        self.tie = '../images/tie.png';
        self.bag = '../images/bag.png';
      },
      male: function male() {
        var self = this;
        self.send = '../images/first.png';
        self.like = '../images/gift.png';
        self.done = '../images/com.png';
        self.camera = '../images/相机.png';
        self.lipstick = '../images/lipstick.png';
        self.ring = '../images/ring.png';
        self.flower = '../images/flower.png';
        self.tie = '../images/tie.png';
        self.bag = '../images/bag.png';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlbmQiLCJsaWtlIiwiZG9uZSIsImNhbWVyYSIsImxpcHN0aWNrIiwicmluZyIsImZsb3dlciIsInRpZSIsImJhZyIsIm1ldGhvZHMiLCJmZW1hbGUiLCJzZWxmIiwibWFsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLHFCQUREO0FBRUxDLFlBQU0sb0JBRkQ7QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxjQUFRLGtCQUpIO0FBS0xDLGdCQUFVLHdCQUxMO0FBTUxDLFlBQU0sb0JBTkQ7QUFPTEMsY0FBUSxzQkFQSDtBQVFMQyxXQUFLLG1CQVJBO0FBU0xDLFdBQUs7QUFUQSxLLFFBV1BDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtYLElBQUwsR0FBWSxxQkFBWjtBQUNBVyxhQUFLVixJQUFMLEdBQVksb0JBQVo7QUFDQVUsYUFBS1QsSUFBTCxHQUFZLG1CQUFaO0FBQ0FTLGFBQUtSLE1BQUwsR0FBYyxrQkFBZDtBQUNBUSxhQUFLUCxRQUFMLEdBQWdCLHdCQUFoQjtBQUNBTyxhQUFLTixJQUFMLEdBQVksb0JBQVo7QUFDQU0sYUFBS0wsTUFBTCxHQUFjLHNCQUFkO0FBQ0FLLGFBQUtKLEdBQUwsR0FBVyxtQkFBWDtBQUNBSSxhQUFLSCxHQUFMLEdBQVcsbUJBQVg7QUFDRCxPQVpPO0FBYVJJLFVBYlEsa0JBYUQ7QUFDTCxZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1gsSUFBTCxHQUFZLHFCQUFaO0FBQ0FXLGFBQUtWLElBQUwsR0FBWSxvQkFBWjtBQUNBVSxhQUFLVCxJQUFMLEdBQVksbUJBQVo7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLGtCQUFkO0FBQ0FRLGFBQUtQLFFBQUwsR0FBZ0Isd0JBQWhCO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxvQkFBWjtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsc0JBQWQ7QUFDQUssYUFBS0osR0FBTCxHQUFXLG1CQUFYO0FBQ0FJLGFBQUtILEdBQUwsR0FBVyxtQkFBWDtBQUNEO0FBeEJPLEs7Ozs7OzZCQTBCRCxDQUFHOzs7O0VBekNxQixlQUFLSyxJOztrQkFBbkJqQixLIiwiZmlsZSI6ImdpZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2VuZDogJy4uL2ltYWdlcy9maXJzdC5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZXMvZ2lmdC5wbmcnLFxuICAgIGRvbmU6ICcuLi9pbWFnZXMvY29tLnBuZycsXG4gICAgY2FtZXJhOiAnLi4vaW1hZ2VzL+ebuOacui5wbmcnLFxuICAgIGxpcHN0aWNrOiAnLi4vaW1hZ2VzL2xpcHN0aWNrLnBuZycsXG4gICAgcmluZzogJy4uL2ltYWdlcy9yaW5nLnBuZycsXG4gICAgZmxvd2VyOiAnLi4vaW1hZ2VzL2Zsb3dlci5wbmcnLFxuICAgIHRpZTogJy4uL2ltYWdlcy90aWUucG5nJyxcbiAgICBiYWc6ICcuLi9pbWFnZXMvYmFnLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGZlbWFsZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zZW5kID0gJy4uL2ltYWdlcy9maXJzdC5wbmcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2VzL2dpZnQucG5nJ1xuICAgICAgc2VsZi5kb25lID0gJy4uL2ltYWdlcy9jb20ucG5nJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2VzL+ebuOacui5wbmcnXG4gICAgICBzZWxmLmxpcHN0aWNrID0gJy4uL2ltYWdlcy9saXBzdGljay5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2VzL3JpbmcucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2VzL2Zsb3dlci5wbmcnXG4gICAgICBzZWxmLnRpZSA9ICcuLi9pbWFnZXMvdGllLnBuZydcbiAgICAgIHNlbGYuYmFnID0gJy4uL2ltYWdlcy9iYWcucG5nJ1xuICAgIH0sXG4gICAgbWFsZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zZW5kID0gJy4uL2ltYWdlcy9maXJzdC5wbmcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2VzL2dpZnQucG5nJ1xuICAgICAgc2VsZi5kb25lID0gJy4uL2ltYWdlcy9jb20ucG5nJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2VzL+ebuOacui5wbmcnXG4gICAgICBzZWxmLmxpcHN0aWNrID0gJy4uL2ltYWdlcy9saXBzdGljay5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2VzL3JpbmcucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2VzL2Zsb3dlci5wbmcnXG4gICAgICBzZWxmLnRpZSA9ICcuLi9pbWFnZXMvdGllLnBuZydcbiAgICAgIHNlbGYuYmFnID0gJy4uL2ltYWdlcy9iYWcucG5nJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==