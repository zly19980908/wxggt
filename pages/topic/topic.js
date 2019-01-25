// pages/topic/topic.js
Page({

  data: {
    redisplay:'none',
    resultText: ['微信', '微信小程序', '微信小', '微信程', '微信序'],
    color: ["#5CACEE", "black", "black", "black"],
    topicResult:[
      {
      nick:"无锡观光团",
      time:"14分钟",
      topicdetail:"课程学习：搜索相关内容，观看教学视频，观看直播，社区讨论(发布讨论话题，针对话题进行讨论)，随堂测试，结业考试，课程练习，评教，课程老师信息查询，教学资料下载，打赏。.课堂",
      share:500,
      pv:670,
      like:5000
      },
      {
        nick: "无锡观光团",
        time: "14分钟",
        topicdetail: "课程学习：搜索相关内容，观看教学视频，观看直播，社区讨论(发布讨论话题，针对话题进行讨论)，随堂测试，结业考试，课程练习，评教，课程老师信息查询，教学资料下载，打赏。.课堂",
        share: 500,
        pv: 670,
        like: 5000
      }]
    },

  /*点击view改变字体颜色 */
  bindChangView:function(e){
    var that = this;
    var index = e.target.id;//获取view的id
    console.log(index);
    for(var i=0;i<4;i++){
      var color = "color["+i+"]";//获取数组对象
      if(i == index){//id为index的view字体变色
         that.setData({
           [color]:"#5CACEE",
         });
      }
      else{
        that.setData({
          [color]: "black"
        });
      }
    }
  },

  //输入时自动匹配
  showResult: function (e) {
    var that = this;
    var s = e.detail.value.split('');//将输入得字符串分割成一个个字符
    var length = s.length;//数组长度
    console.log(s[length - 1]);
    if (s[length - 1] == '微') {//判断输入的最后一个字
      that.setData({
        redisplay: 'block'
      });
    }
  },
  //输入完成下方消失
  closeResult: function (e) {
    var that = this;
    that.setData({
      redisplay: 'none',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})