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

var date = new Date();
var years = [];
var months = [];
var days = [];

for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}

for (var _i2 = 1; _i2 <= 31; _i2++) {
  days.push(_i2);
}

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
      focus: false,
      src: '',
      img: '',
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name1: '原来你也在这里',
      author: '刘若英',
      src1: '../music/刘若英 - 原来你也在这里 (Live).mp3'
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
      },
      bindButtonTap: function bindButtonTap() {
        var self = this;
        _wepy2.default.chooseVideo({
          sourceType: ['camera', 'album'],
          maxDuration: 60,
          camera: 'front',
          success: function success(res) {
            self.src = res.tempFilePath;
            self.setData({
              src: res.tempFilePath
            });
          }
        });
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            self.img = res.tempFilePaths[0];
            self.setData({
              img: res.tempFilePaths[0]
            });
          }
        });
      },
      bindTimeChange: function bindTimeChange(e) {
        var self = this;
        console.log('picker发送选择改变，携带值为', e.detail.value);
        self.setData({
          time: e.detail.value
        });
      },

      bindChange: function bindChange(e) {
        var val = e.detail.value;
        this.setData({
          year: this.data.years[val[0]],
          month: this.data.months[val[1]],
          day: this.data.days[val[2]]
        });
      },
      audioPlay: function audioPlay() {
        this.audioCtx.play();
      },
      audioPause: function audioPause() {
        this.audioCtx.pause();
      },
      audio14: function audio14() {
        this.audioCtx.seek(14);
      },
      audioStart: function audioStart() {
        this.audioCtx.seek(0);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwiaSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYW1lIiwic2V4IiwiYm9ybiIsIml0ZW1zIiwidmFsdWUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsImZvY3VzIiwic3JjIiwiaW1nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwicG9zdGVyIiwibmFtZTEiLCJhdXRob3IiLCJzcmMxIiwibWV0aG9kcyIsInNldCIsInNlbGYiLCJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImZvcm1TdWJtaXQiLCJmb3JtUmVzZXQiLCJiaW5kS2V5SW5wdXQiLCJiaW5kQnV0dG9uVGFwIiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwibWF4RHVyYXRpb24iLCJjYW1lcmEiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRoIiwic2V0RGF0YSIsImltYWdlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsImJpbmRUaW1lQ2hhbmdlIiwidGltZSIsImJpbmRDaGFuZ2UiLCJ2YWwiLCJhdWRpb1BsYXkiLCJhdWRpb0N0eCIsInBsYXkiLCJhdWRpb1BhdXNlIiwicGF1c2UiLCJhdWRpbzE0Iiwic2VlayIsImF1ZGlvU3RhcnQiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxJQUFNQyxRQUFRLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEVBQWY7QUFDQSxJQUFNQyxPQUFPLEVBQWI7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLElBQWIsRUFBbUJBLEtBQUtMLEtBQUtNLFdBQUwsRUFBeEIsRUFB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Y0ssSUFBZCxDQUFtQixDQUFuQjtBQUNEO0FBMUVPLEs7Ozs7OzRCQTRFRi9CLEMsRUFBRztBQUNUO0FBQ0EsV0FBSzBCLFFBQUwsR0FBZ0IsZUFBS08sa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDRDs7OzZCQUNRLENBQUc7Ozs7RUE5R3FCLGVBQUtDLEk7O2tCQUFuQjNELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKVxuY29uc3QgeWVhcnMgPSBbXVxuY29uc3QgbW9udGhzID0gW11cbmNvbnN0IGRheXMgPSBbXVxuXG5mb3IgKGxldCBpID0gMTk5MDsgaSA8PSBkYXRlLmdldEZ1bGxZZWFyKCk7IGkrKykge1xuICB5ZWFycy5wdXNoKGkpXG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgbW9udGhzLnB1c2goaSlcbn1cblxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICBkYXlzLnB1c2goaSlcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrku4vnu40nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAn5Lud5pyI6Jm5JyxcbiAgICBzZXg6ICflpbMnLFxuICAgIGJvcm46ICcxOTk4MDIwNicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgbmFtZTogJ1VTQScsIHZhbHVlOiAn576O5Zu9JyB9LFxuICAgICAgeyBuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiAndHJ1ZScgfSxcbiAgICAgIHsgbmFtZTogJ0JSQScsIHZhbHVlOiAn5be06KW/JyB9XG4gICAgXSxcbiAgICBpbnB1dFZhbHVlOiAnbnVsbCcsXG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIHNyYzogJycsXG4gICAgaW1nOiAnJyxcbiAgICB5ZWFyczogeWVhcnMsXG4gICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoczogbW9udGhzLFxuICAgIG1vbnRoOiAyLFxuICAgIGRheXM6IGRheXMsXG4gICAgZGF5OiAyLFxuICAgIHZhbHVlOiBbOTk5OSwgMSwgMV0sXG4gICAgcG9zdGVyOiAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDNyc0tGNDRHeWFTay5qcGc/bWF4X2FnZT0yNTkyMDAwJyxcbiAgICBuYW1lMTogJ+WOn+adpeS9oOS5n+WcqOi/memHjCcsXG4gICAgYXV0aG9yOiAn5YiY6Iul6IuxJyxcbiAgICBzcmMxOiAnLi4vbXVzaWMv5YiY6Iul6IuxIC0g5Y6f5p2l5L2g5Lmf5Zyo6L+Z6YeMIChMaXZlKS5tcDMnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNldCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5uYW1lID0gJ3RvbmcnXG4gICAgfSxcbiAgICBDaGFuZ2UoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2NoZWNrYm945Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGZvcm1SZXNldCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxuICAgIH0sXG4gICAgYmluZEtleUlucHV0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pbnB1dFZhbHVlID0gZS5kZXRhaWwudmFsdWVcblxuICAgICAgY29uc29sZS5sb2coc2VsZi5pbnB1dFZhbHVlKVxuICAgIH0sXG4gICAgYmluZEJ1dHRvblRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VWaWRlbyh7XG4gICAgICAgIHNvdXJjZVR5cGU6IFsnY2FtZXJhJywgJ2FsYnVtJ10sXG4gICAgICAgIG1heER1cmF0aW9uOiA2MCxcbiAgICAgICAgY2FtZXJhOiAnZnJvbnQnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHNlbGYuc3JjID0gcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW1hZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLmltZyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGltZzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZFRpbWVDaGFuZ2UoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICB0aW1lOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB5ZWFyOiB0aGlzLmRhdGEueWVhcnNbdmFsWzBdXSxcbiAgICAgICAgbW9udGg6IHRoaXMuZGF0YS5tb250aHNbdmFsWzFdXSxcbiAgICAgICAgZGF5OiB0aGlzLmRhdGEuZGF5c1t2YWxbMl1dXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXVkaW9QbGF5KCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcbiAgICB9LFxuICAgIGF1ZGlvUGF1c2UoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgICB9LFxuICAgIGF1ZGlvMTQoKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsoMTQpXG4gICAgfSxcbiAgICBhdWRpb1N0YXJ0KCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDApXG4gICAgfVxuICB9XG4gIG9uUmVhZHkoZSkge1xuICAgIC8vIOS9v+eUqCB3eC5jcmVhdGVBdWRpb0NvbnRleHQg6I635Y+WIGF1ZGlvIOS4iuS4i+aWhyBjb250ZXh0XG4gICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==