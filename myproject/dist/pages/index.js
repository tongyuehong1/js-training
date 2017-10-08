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
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }],
      inputValue: 'null',
      focus: false
    }, _this.methods = {
      set: function set() {
        var self = this;
        self.name = 'tong';
      },
      Change: function Change(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      },
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      formReset: function formReset() {
        console.log('form发生了reset事件');
      },
      bindKeyInput: function bindKeyInput(e) {
        var self = this;
        self.inputValue = e.detail.value;

        console.log(self.inputValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYW1lIiwic2V4IiwiYm9ybiIsIml0ZW1zIiwidmFsdWUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsImZvY3VzIiwibWV0aG9kcyIsInNldCIsInNlbGYiLCJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImZvcm1TdWJtaXQiLCJmb3JtUmVzZXQiLCJiaW5kS2V5SW5wdXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxLQUREO0FBRUxDLFdBQUssR0FGQTtBQUdMQyxZQUFNLFVBSEQ7QUFJTEMsYUFBTyxDQUNMLEVBQUVILE1BQU0sS0FBUixFQUFlSSxPQUFPLElBQXRCLEVBREssRUFFTCxFQUFFSixNQUFNLEtBQVIsRUFBZUksT0FBTyxJQUF0QixFQUE0QkMsU0FBUyxNQUFyQyxFQUZLLEVBR0wsRUFBRUwsTUFBTSxLQUFSLEVBQWVJLE9BQU8sSUFBdEIsRUFISyxDQUpGO0FBU0xFLGtCQUFZLE1BVFA7QUFVTEMsYUFBTztBQVZGLEssUUFhUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1YsSUFBTCxHQUFZLE1BQVo7QUFDRCxPQUpPO0FBS1JXLFlBTFEsa0JBS0RDLENBTEMsRUFLRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDRixFQUFFRyxNQUFGLENBQVNYLEtBQXREO0FBQ0QsT0FQTztBQVFSWSxnQkFSUSxzQkFRR0osQ0FSSCxFQVFNO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLEVBQUVHLE1BQUYsQ0FBU1gsS0FBL0M7QUFDRCxPQVZPO0FBV1JhLGVBWFEsdUJBV0k7QUFDVkosZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNELE9BYk87QUFjUkksa0JBZFEsd0JBY0tOLENBZEwsRUFjUTtBQUNkLFlBQUlGLE9BQU8sSUFBWDtBQUNBQSxhQUFLSixVQUFMLEdBQWtCTSxFQUFFRyxNQUFGLENBQVNYLEtBQTNCOztBQUVBUyxnQkFBUUMsR0FBUixDQUFZSixLQUFLSixVQUFqQjtBQUNEO0FBbkJPLEs7Ozs7OzZCQXNCRCxDQUFHOzs7O0VBeENxQixlQUFLYSxJOztrQkFBbkJ2QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65LuL57uNJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAn5Lud5pyI6Jm5JyxcbiAgICBzZXg6ICflpbMnLFxuICAgIGJvcm46ICcxOTk4MDIwNicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgbmFtZTogJ1VTQScsIHZhbHVlOiAn576O5Zu9JyB9LFxuICAgICAgeyBuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiAndHJ1ZScgfSxcbiAgICAgIHsgbmFtZTogJ0JSQScsIHZhbHVlOiAn5be06KW/JyB9XG4gICAgXSxcbiAgICBpbnB1dFZhbHVlOiAnbnVsbCcsXG4gICAgZm9jdXM6IGZhbHNlXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNldCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5uYW1lID0gJ3RvbmcnXG4gICAgfSxcbiAgICBDaGFuZ2UoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2NoZWNrYm945Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGZvcm1SZXNldCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxuICAgIH0sXG4gICAgYmluZEtleUlucHV0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pbnB1dFZhbHVlID0gZS5kZXRhaWwudmFsdWVcblxuICAgICAgY29uc29sZS5sb2coc2VsZi5pbnB1dFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHsgfVxufVxuIl19