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
      navigationBarTitleText: '个人介绍'
    }, _this.data = {
      name: '仝月虹',
      sex: '女',
      born: '19980206',
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'set',
    value: function set() {
      var self = this;
      self.name = 'tong';
    }
  }, {
    key: 'Change',
    value: function Change(e) {
      console.log(e);
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYW1lIiwic2V4IiwiYm9ybiIsIml0ZW1zIiwidmFsdWUiLCJjaGVja2VkIiwic2VsZiIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sS0FERDtBQUVMQyxXQUFLLEdBRkE7QUFHTEMsWUFBTSxVQUhEO0FBSUxDLGFBQU8sQ0FDTCxFQUFDSCxNQUFNLEtBQVAsRUFBY0ksT0FBTyxJQUFyQixFQURLLEVBRUwsRUFBQ0osTUFBTSxLQUFQLEVBQWNJLE9BQU8sSUFBckIsRUFBMkJDLFNBQVMsTUFBcEMsRUFGSyxFQUdMLEVBQUNMLE1BQU0sS0FBUCxFQUFjSSxPQUFPLElBQXJCLEVBSEs7QUFKRixLOzs7OzswQkFXRDtBQUNKLFVBQUlFLE9BQU8sSUFBWDtBQUNBQSxXQUFLTixJQUFMLEdBQVksTUFBWjtBQUNEOzs7MkJBQ01PLEMsRUFBRztBQUNSQyxjQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUMsY0FBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDRixFQUFFRyxNQUFGLENBQVNOLEtBQXREO0FBQ0Q7Ozs2QkFFUSxDQUFFOzs7O0VBekJzQixlQUFLTyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS7i+e7jSdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogJ+S7neaciOiZuScsXG4gICAgICBzZXg6ICflpbMnLFxuICAgICAgYm9ybjogJzE5OTgwMjA2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICAgIHtuYW1lOiAnQlJBJywgdmFsdWU6ICflt7Topb8nfVxuICAgICAgXVxuICAgIH1cblxuICAgIHNldCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5uYW1lID0gJ3RvbmcnXG4gICAgfVxuICAgIENoYW5nZShlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgY29uc29sZS5sb2coJ2NoZWNrYm945Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7fVxuICB9XG4iXX0=