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
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwiaSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYW1lIiwic2V4IiwiYm9ybiIsIml0ZW1zIiwidmFsdWUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsImZvY3VzIiwic3JjIiwiaW1nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwicG9zdGVyIiwibmFtZTEiLCJhdXRob3IiLCJzcmMxIiwibWV0aG9kcyIsInNldCIsInNlbGYiLCJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImZvcm1TdWJtaXQiLCJmb3JtUmVzZXQiLCJiaW5kS2V5SW5wdXQiLCJiaW5kQnV0dG9uVGFwIiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwibWF4RHVyYXRpb24iLCJjYW1lcmEiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRoIiwic2V0RGF0YSIsImltYWdlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsImJpbmRUaW1lQ2hhbmdlIiwidGltZSIsImJpbmRDaGFuZ2UiLCJ2YWwiLCJhdWRpb1BsYXkiLCJhdWRpb0N0eCIsInBsYXkiLCJhdWRpb1BhdXNlIiwicGF1c2UiLCJhdWRpbzE0Iiwic2VlayIsImF1ZGlvU3RhcnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxJQUFNQyxRQUFRLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEVBQWY7QUFDQSxJQUFNQyxPQUFPLEVBQWI7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLElBQWIsRUFBbUJBLEtBQUtMLEtBQUtNLFdBQUwsRUFBeEIsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9D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QUNEO0FBMUVPLEs7Ozs7OzZCQTRFRCxDQUFHOzs7O0VBMUdxQixlQUFLRSxJOztrQkFBbkIxRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbmNvbnN0IHllYXJzID0gW11cbmNvbnN0IG1vbnRocyA9IFtdXG5jb25zdCBkYXlzID0gW11cblxuZm9yIChsZXQgaSA9IDE5OTA7IGkgPD0gZGF0ZS5nZXRGdWxsWWVhcigpOyBpKyspIHtcbiAgeWVhcnMucHVzaChpKVxufVxuXG5mb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gIG1vbnRocy5wdXNoKGkpXG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDMxOyBpKyspIHtcbiAgZGF5cy5wdXNoKGkpXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65LuL57uNJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbmFtZTogJ+S7neaciOiZuScsXG4gICAgc2V4OiAn5aWzJyxcbiAgICBib3JuOiAnMTk5ODAyMDYnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IG5hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvScgfSxcbiAgICAgIHsgbmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnIH0sXG4gICAgICB7IG5hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvycgfVxuICAgIF0sXG4gICAgaW5wdXRWYWx1ZTogJ251bGwnLFxuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBzcmM6ICcnLFxuICAgIGltZzogJycsXG4gICAgeWVhcnM6IHllYXJzLFxuICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aHM6IG1vbnRocyxcbiAgICBtb250aDogMixcbiAgICBkYXlzOiBkYXlzLFxuICAgIGRheTogMixcbiAgICB2YWx1ZTogWzk5OTksIDEsIDFdLFxuICAgIHBvc3RlcjogJ2h0dHA6Ly95Lmd0aW1nLmNuL211c2ljL3Bob3RvX25ldy9UMDAyUjMwMHgzMDBNMDAwMDAzcnNLRjQ0R3lhU2suanBnP21heF9hZ2U9MjU5MjAwMCcsXG4gICAgbmFtZTE6ICfljp/mnaXkvaDkuZ/lnKjov5nph4wnLFxuICAgIGF1dGhvcjogJ+WImOiLpeiLsScsXG4gICAgc3JjMTogJy4uL211c2ljL+WImOiLpeiLsSAtIOWOn+adpeS9oOS5n+WcqOi/memHjCAoTGl2ZSkubXAzJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBzZXQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYubmFtZSA9ICd0b25nJ1xuICAgIH0sXG4gICAgQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2JveOWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBmb3JtUmVzZXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgICB9LFxuICAgIGJpbmRLZXlJbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW5wdXRWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG5cbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuaW5wdXRWYWx1ZSlcbiAgICB9LFxuICAgIGJpbmRCdXR0b25UYXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlVmlkZW8oe1xuICAgICAgICBzb3VyY2VUeXBlOiBbJ2NhbWVyYScsICdhbGJ1bSddLFxuICAgICAgICBtYXhEdXJhdGlvbjogNjAsXG4gICAgICAgIGNhbWVyYTogJ2Zyb250JyxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLnNyYyA9IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGltYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5pbWcgPSByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRUaW1lQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgdGltZTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgeWVhcjogdGhpcy5kYXRhLnllYXJzW3ZhbFswXV0sXG4gICAgICAgIG1vbnRoOiB0aGlzLmRhdGEubW9udGhzW3ZhbFsxXV0sXG4gICAgICAgIGRheTogdGhpcy5kYXRhLmRheXNbdmFsWzJdXVxuICAgICAgfSlcbiAgICB9LFxuICAgIGF1ZGlvUGxheSgpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gICAgfSxcbiAgICBhdWRpb1BhdXNlKCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgfSxcbiAgICBhdWRpbzE0KCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDE0KVxuICAgIH0sXG4gICAgYXVkaW9TdGFydCgpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==