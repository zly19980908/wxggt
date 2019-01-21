Page({
  data: {
    redisplay:'none',
    display: 'none',
    windowWidth: wx.getSystemInfoSync().windowWidth,
    focus: false,
    currentTab: 0,
    swiperText: ["推荐课程", "优选微视", "讨论问答", "精彩音频"],
    translate: '',
    resultText:['微信','微信小程序','微信小','微信程','微信序']
  },
  clickTab: function(e) { /*点击选项卡切换页面*/
    var that = this; /*将this赋值给临时的that*/
    if (this.data.currentTap === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current /*不能有；*/
      });
    }
  },
  swiperTab: function(e) { /*滑动选项卡切换页面 */
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /*点击筛选弹出侧选框*/
  showView: function(e) {
    var that = this;
    that.setData({
      display: 'block',
      translate: 'transform: translateX(' + (-this.data.windowWidth * 0.3) + 'px);' /* 旋转div，div水平平移量，translateY为竖直平移 */
    })
  },
  showMain: function() {
    var that = this;
    that.setData({
      display: 'none',
      translate: ''
    })
  },
  bindViewTap: function(e) {
    var that = this;
    that.setData({
      focus: true
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件')
  },
  showResult:function(e){
    var that = this;
    var s = e.detail.value.split('');//将输入得字符串分割成一个个字符
    var length = s.length;//数组长度
    console.log(s[length-1]);
    if (s[length-1] === '微'){//判断输入的最后一个字
    that.setData({
      redisplay: 'block'
    });
    }
  }
})