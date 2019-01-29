// pages/first/first.js

Page({
  data: {
    bordercolor: "rgb(211, 66, 22)",
    v1: "view3text1",
    v2: "",
    v3: "",
    tabbar: {},
  },
  changeText: function(event) {//热门话题控制
    var that=this;
    var c = event.currentTarget.id;
    console.log(c);
    that.setData({
      v1: "",
      v2: "",
      v3: "",
    });
    if(c=="v1")
    {
      that.setData({
        v1: "view3text1",
      });
     
    }
    else if(c=="v2")
    {
      that.setData({
        v2: "view3text1",
      });
    }
    else
    {
      that.setData({
        v3: "view3text1",
      });
    }

  },
  //跳转到小视频主页面
  smallVideo: function()
  {
    
    wx.navigateTo({
      url: '../smallVideo/smallVideo'
    }),
    console.log("1")

  },
  onPullDownRefresh: function () {

    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载

    setTimeout(function () {

      // complete

      wx.hideNavigationBarLoading() //完成停止加载

      wx.stopPullDownRefresh() //停止下拉刷新

    }, 1500);

  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const app = getApp();
    var that = this;
    app.changeTabBar(); 
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})