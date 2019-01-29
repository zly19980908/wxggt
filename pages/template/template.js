App({
  tabbar: {
    backgroundColor: "white",
    color: "#dddddd",
    selectedColor: "#3cc51f",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [{
        pagePath: "../first/first",
        text: "首页",
        iconPath: "../../image/index1.png",
        selectedIconPath: "../../image/index2.png",
        selected:true
        
      },
      {
        pagePath: "../first/first",
        text: "中医论坛",
        iconPath: "../../image/talk1.png",
        selectedIconPath: "../../image/talk2.png",
          },
      {
        pagePath: "../first/first",
        text: "我的学习",
        iconPath: "../../image/mystudy1.png",
        selectedIconPath: "../../image/mystudy2.png",
        selected: false
      },
      {
        pagePath: "../first/first",
        text: "个人中心",
        iconPath: "../../image/person1.png",
        selectedIconPath: "../../image/person2.png",
        selected: false
      }
    ],
    position: "bottom"
  },
  changeTabBar: function() {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.tabbar;
    for (var i = 0; i < tabBar.list.length; i++) {
      console.log(_pagePath + '--' + tabBar.list[i].pagePath)
      tabBar.list[i].selected = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].selected = true; //根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabbar: tabBar
    });
  },
})