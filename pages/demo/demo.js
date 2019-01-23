Page({
  data: {//变量只小写
    courseResult: 
    [
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', price: '￥19.00' }, 
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', price: '￥19.00' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', price: '￥19.00' }, 
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', price: '￥19.00' }
    ],
    videoResult:
    [
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '34' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '35' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '36' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '37' }
    ],
    topicResult:
    [
      { topicDetail: '什么是中基?\n人们为什么要学中基呢？中基有什么好的呢？', viewCount: 25, pv: 13, image:'../../image/test.jpg'},
      { topicDetail: '简述那个些年被中基伤害过的事件？你又想起来什么呢，什么呢，什么呢？', viewCount:30, pv:12,image:''},
      { topicDetail: '自己攒钱去西藏交孩子们写代码，可以吗？', viewCount:28, pv:9 , image:''}
    ],
    listenResult:
    [
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '27' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '29' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '16' },
      { image: '../../image/test.jpg', detail: 'CourseName\nTeacherName\n', traffic: 'Traffic', like: '37' }
    ],
    redisplay:'none',
    display: 'none',
    tabdisplay:'none',
    focus: false,
    currentTab: 0,
    swiperText: ["推荐课程", "优选微视", "讨论问答", "精彩音频"],
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
      tabdisplay:'block',
    })
  },
  /*点击遮影收回测选框 */
  showMain: function() {
    var that = this;
    that.setData({
      display: 'none',
      tabdisplay:'none',
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