// touchslide 与 svg、use 标签有兼容性问题，我在压缩代码里作了修改
TouchSlide({ slideCell: '#j_indexSlider', titCell: '.hd ul', autoPage: '<li></li>', autoPlay: true });

/**
 * 倒计时
 * @param {object} opt
 * ele: 触发对象，可以是id、class、tagName
 * totalTime: 倒计时总毫秒数
 * timingFn: 倒计时过程中触发
 * callback: 倒计时结束时触发
 * current: 包含倒计时的天、时、分、秒
 *
 * author: zhangzhensheng
 * date  : 2016-04-09
 */
function Countdown (opt) {
  this.ele       = null;
  this.totalTime = null;
  this.timingFn  = function () {
  };
  this.callback  = function () {
  };
  this.current   = {
    curDay   : 0,
    curHour  : 0,
    curMinute: 0,
    curSecond: 0
  };
  this.init(opt);
  this.countDowner();
}
Countdown.prototype = {
  init        : function (opt) {
    this.ele       = opt.ele;
    this.totalTime = opt.totalTime;
    this.timingFn  = opt.timingFn;
    this.callback  = opt.callback;
  },
  countDowner : function () {
    var self = this;
    if (this.totalTime > 0) {
      var seconds            = this.totalTime / 1e3;
      var minutes            = Math.floor(seconds / 60);
      var hours              = Math.floor(minutes / 60);
      var days               = Math.floor(hours / 24);
      this.current.curDay    = this.getCurDay(days);
      this.current.curHour   = this.getCurHour(hours);
      this.current.curMinute = this.getCurMinute(minutes);
      this.current.curSecond = this.getCurSecond(seconds);
      this.timingFn && this.timingFn(this.current);
      this.countDownTimer = setTimeout(function () {
        self.totalTime -= 1e3;
        self.countDowner();
      }, 1e3);
    } else {
      this.countDownTimer && clearTimeout(this.countDownTimer);
      this.callback && this.callback();
    }
  },
  getCurDay   : function (days) {
    return days < 10 ? '0' + days : days;
  },
  getCurHour  : function (hours) {
    return hours % 24 < 10 ? '0' + hours % 24 : hours % 24;
  },
  getCurMinute: function (minutes) {
    return minutes % 60 < 10 ? '0' + minutes % 60 : minutes % 60;
  },
  getCurSecond: function (seconds) {
    return Math.floor(seconds % 60) < 10 ? '0' + Math.floor(seconds % 60) : Math.floor(seconds % 60);
  },
  destroy: function() {
    clearInterval(this.countDownTimer);
  }
};
var item = $('.index__auction-item');
new Countdown({
  ele: $('.j_time'),
  totalTime: 6000000,
  timingFn: function(current) {
    // 每秒更新时间
    this.ele.html(current.curHour+':'+current.curMinute+':'+current.curSecond);
    // 每秒加价
    var ranIdx = Math.floor(Math.random()*item.length);
    var priceObj = $(item[ranIdx]).find('.j_price');
    var price = priceObj.html().slice(1);
    priceObj.html('&yen;'+(price/1.0+0.1).toFixed(2));
    priceObj.css('background', '#ff2d4a');
    setTimeout(function(){
      priceObj.css('background', '#fff');
      priceObj.addClass('change-bg');
    },200);
  },
  callback: function() {
  }
}); 