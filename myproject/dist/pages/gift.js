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
      image: {
        send: '../images/first.png',
        like: '../images/gift.png',
        done: '../images/com.png',
        camera: '../images/camera.png',
        lipstick: '../images/lipstick.png',
        ring: '../images/ring.png',
        flower: '../images/flower.png',
        tie: '../images/tie.png',
        bag: '../images/bag.png'
      },
      word: {
        self: '自己',
        parent: '妈妈',
        couple: '老婆/女票',
        friend: '姐妹/闺蜜',
        elder: '长辈',
        partner: '同事'
      },
      color: {
        colormale: 'black',
        colorfemale: 'pink',
        solidfemale: 'pink',
        solidmale: 'white'
      }
    }, _this.methods = {
      female: function female() {
        var self = this;
        self.image.send = '../images/first.png';
        self.image.like = '../images/gift.png';
        self.image.done = '../images/com.png';
        self.image.send = '../images/first.png';
        self.image.like = '../images/gift.png';
        self.image.done = '../images/com.png';
        self.image.camera = '../images/相机.png';
        self.image.lipstick = '../images/lipstick.png';
        self.image.ring = '../images/ring.png';
        self.image.flower = '../images/flower.png';
        self.image.tie = '../images/tie.png';
        self.image.bag = '../images/bag.png';
        self.word.parent = '妈妈';
        self.word.self = '自己';
        self.word.couple = '老婆/女票';
        self.word.friend = '姐妹/闺蜜';
        self.word.elder = '长辈';
        self.word.partner = '同事';
        self.color.colorfemale = 'pink';
        self.color.solidfemale = 'pink';
        self.color.solidmale = 'white';
        self.color.colormale = 'black';
      },
      male: function male() {
        var self = this;
        self.image.send = '../images/first.png';
        self.image.like = '../images/gift.png';
        self.image.done = '../images/com.png';
        self.image.camera = '../images/camera.png';
        self.image.lipstick = '../images/watch.png';
        self.image.ring = '../images/ring.png';
        self.image.flower = '../images/glasses.png';
        self.image.tie = '../images/tie.png';
        self.image.bag = '../images/bag.png';
        self.word.parent = '爸爸';
        self.word.self = '自己';
        self.word.couple = '老公/男票';
        self.word.friend = '兄弟/基友';
        self.word.elder = '长辈';
        self.word.partner = '同事';
        self.color.colormale = 'pink';
        self.color.solidmale = 'pink';
        self.color.solidfemale = 'white';
        self.color.colorfemale = 'black';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltYWdlIiwic2VuZCIsImxpa2UiLCJkb25lIiwiY2FtZXJhIiwibGlwc3RpY2siLCJyaW5nIiwiZmxvd2VyIiwidGllIiwiYmFnIiwid29yZCIsInNlbGYiLCJwYXJlbnQiLCJjb3VwbGUiLCJmcmllbmQiLCJlbGRlciIsInBhcnRuZXIiLCJjb2xvciIsImNvbG9ybWFsZSIsImNvbG9yZmVtYWxlIiwic29saWRmZW1hbGUiLCJzb2xpZG1hbGUiLCJtZXRob2RzIiwiZmVtYWxlIiwibWFsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPO0FBQ0xDLGNBQU0scUJBREQ7QUFFTEMsY0FBTSxvQkFGRDtBQUdMQyxjQUFNLG1CQUhEO0FBSUxDLGdCQUFRLHNCQUpIO0FBS0xDLGtCQUFVLHdCQUxMO0FBTUxDLGNBQU0sb0JBTkQ7QUFPTEMsZ0JBQVEsc0JBUEg7QUFRTEMsYUFBSyxtQkFSQTtBQVNMQyxhQUFLO0FBVEEsT0FERjtBQVlMQyxZQUFNO0FBQ0pDLGNBQU0sSUFERjtBQUVKQyxnQkFBUSxJQUZKO0FBR0pDLGdCQUFRLE9BSEo7QUFJSkMsZ0JBQVEsT0FKSjtBQUtKQyxlQUFPLElBTEg7QUFNSkMsaUJBQVM7QUFOTCxPQVpEO0FBb0JMQyxhQUFPO0FBQ0xDLG1CQUFXLE9BRE47QUFFTEMscUJBQWEsTUFGUjtBQUdMQyxxQkFBYSxNQUhSO0FBSUxDLG1CQUFXO0FBSk47QUFwQkYsSyxRQTJCUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCxZQUFJWixPQUFPLElBQVg7QUFDQUEsYUFBS1gsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLHFCQUFsQjtB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IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvOeJqeivtCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGltYWdlOiB7XG4gICAgICBzZW5kOiAnLi4vaW1hZ2VzL2ZpcnN0LnBuZycsXG4gICAgICBsaWtlOiAnLi4vaW1hZ2VzL2dpZnQucG5nJyxcbiAgICAgIGRvbmU6ICcuLi9pbWFnZXMvY29tLnBuZycsXG4gICAgICBjYW1lcmE6ICcuLi9pbWFnZXMvY2FtZXJhLnBuZycsXG4gICAgICBsaXBzdGljazogJy4uL2ltYWdlcy9saXBzdGljay5wbmcnLFxuICAgICAgcmluZzogJy4uL2ltYWdlcy9yaW5nLnBuZycsXG4gICAgICBmbG93ZXI6ICcuLi9pbWFnZXMvZmxvd2VyLnBuZycsXG4gICAgICB0aWU6ICcuLi9pbWFnZXMvdGllLnBuZycsXG4gICAgICBiYWc6ICcuLi9pbWFnZXMvYmFnLnBuZydcbiAgICB9LFxuICAgIHdvcmQ6IHtcbiAgICAgIHNlbGY6ICfoh6rlt7EnLFxuICAgICAgcGFyZW50OiAn5aaI5aaIJyxcbiAgICAgIGNvdXBsZTogJ+iAgeWphi/lpbPnpagnLFxuICAgICAgZnJpZW5kOiAn5aeQ5aa5L+mXuuicnCcsXG4gICAgICBlbGRlcjogJ+mVv+i+iCcsXG4gICAgICBwYXJ0bmVyOiAn5ZCM5LqLJ1xuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIGNvbG9ybWFsZTogJ2JsYWNrJyxcbiAgICAgIGNvbG9yZmVtYWxlOiAncGluaycsXG4gICAgICBzb2xpZGZlbWFsZTogJ3BpbmsnLFxuICAgICAgc29saWRtYWxlOiAnd2hpdGUnXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZmVtYWxlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmltYWdlLnNlbmQgPSAnLi4vaW1hZ2VzL2ZpcnN0LnBuZydcbiAgICAgIHNlbGYuaW1hZ2UubGlrZSA9ICcuLi9pbWFnZXMvZ2lmdC5wbmcnXG4gICAgICBzZWxmLmltYWdlLmRvbmUgPSAnLi4vaW1hZ2VzL2NvbS5wbmcnXG4gICAgICBzZWxmLmltYWdlLnNlbmQgPSAnLi4vaW1hZ2VzL2ZpcnN0LnBuZydcbiAgICAgIHNlbGYuaW1hZ2UubGlrZSA9ICcuLi9pbWFnZXMvZ2lmdC5wbmcnXG4gICAgICBzZWxmLmltYWdlLmRvbmUgPSAnLi4vaW1hZ2VzL2NvbS5wbmcnXG4gICAgICBzZWxmLmltYWdlLmNhbWVyYSA9ICcuLi9pbWFnZXMv55u45py6LnBuZydcbiAgICAgIHNlbGYuaW1hZ2UubGlwc3RpY2sgPSAnLi4vaW1hZ2VzL2xpcHN0aWNrLnBuZydcbiAgICAgIHNlbGYuaW1hZ2UucmluZyA9ICcuLi9pbWFnZXMvcmluZy5wbmcnXG4gICAgICBzZWxmLmltYWdlLmZsb3dlciA9ICcuLi9pbWFnZXMvZmxvd2VyLnBuZydcbiAgICAgIHNlbGYuaW1hZ2UudGllID0gJy4uL2ltYWdlcy90aWUucG5nJ1xuICAgICAgc2VsZi5pbWFnZS5iYWcgPSAnLi4vaW1hZ2VzL2JhZy5wbmcnXG4gICAgICBzZWxmLndvcmQucGFyZW50ID0gJ+WmiOWmiCdcbiAgICAgIHNlbGYud29yZC5zZWxmID0gJ+iHquW3sSdcbiAgICAgIHNlbGYud29yZC5jb3VwbGUgPSAn6ICB5amGL+Wls+elqCdcbiAgICAgIHNlbGYud29yZC5mcmllbmQgPSAn5aeQ5aa5L+mXuuicnCdcbiAgICAgIHNlbGYud29yZC5lbGRlciA9ICfplb/ovognXG4gICAgICBzZWxmLndvcmQucGFydG5lciA9ICflkIzkuosnXG4gICAgICBzZWxmLmNvbG9yLmNvbG9yZmVtYWxlID0gJ3BpbmsnXG4gICAgICBzZWxmLmNvbG9yLnNvbGlkZmVtYWxlID0gJ3BpbmsnXG4gICAgICBzZWxmLmNvbG9yLnNvbGlkbWFsZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IuY29sb3JtYWxlID0gJ2JsYWNrJ1xuICAgIH0sXG4gICAgbWFsZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pbWFnZS5zZW5kID0gJy4uL2ltYWdlcy9maXJzdC5wbmcnXG4gICAgICBzZWxmLmltYWdlLmxpa2UgPSAnLi4vaW1hZ2VzL2dpZnQucG5nJ1xuICAgICAgc2VsZi5pbWFnZS5kb25lID0gJy4uL2ltYWdlcy9jb20ucG5nJ1xuICAgICAgc2VsZi5pbWFnZS5jYW1lcmEgPSAnLi4vaW1hZ2VzL2NhbWVyYS5wbmcnXG4gICAgICBzZWxmLmltYWdlLmxpcHN0aWNrID0gJy4uL2ltYWdlcy93YXRjaC5wbmcnXG4gICAgICBzZWxmLmltYWdlLnJpbmcgPSAnLi4vaW1hZ2VzL3JpbmcucG5nJ1xuICAgICAgc2VsZi5pbWFnZS5mbG93ZXIgPSAnLi4vaW1hZ2VzL2dsYXNzZXMucG5nJ1xuICAgICAgc2VsZi5pbWFnZS50aWUgPSAnLi4vaW1hZ2VzL3RpZS5wbmcnXG4gICAgICBzZWxmLmltYWdlLmJhZyA9ICcuLi9pbWFnZXMvYmFnLnBuZydcbiAgICAgIHNlbGYud29yZC5wYXJlbnQgPSAn54i454i4J1xuICAgICAgc2VsZi53b3JkLnNlbGYgPSAn6Ieq5bexJ1xuICAgICAgc2VsZi53b3JkLmNvdXBsZSA9ICfogIHlhawv55S356WoJ1xuICAgICAgc2VsZi53b3JkLmZyaWVuZCA9ICflhYTlvJ8v5Z+65Y+LJ1xuICAgICAgc2VsZi53b3JkLmVsZGVyID0gJ+mVv+i+iCdcbiAgICAgIHNlbGYud29yZC5wYXJ0bmVyID0gJ+WQjOS6iydcbiAgICAgIHNlbGYuY29sb3IuY29sb3JtYWxlID0gJ3BpbmsnXG4gICAgICBzZWxmLmNvbG9yLnNvbGlkbWFsZSA9ICdwaW5rJ1xuICAgICAgc2VsZi5jb2xvci5zb2xpZGZlbWFsZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IuY29sb3JmZW1hbGUgPSAnYmxhY2snXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19