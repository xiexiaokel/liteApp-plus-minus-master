// pages/fighting/fighting.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicIcon:`${imgHost}/images/music.png`,
    rightIcon:`${imgHost}/images/right.png`,
    wrongIcon: `${imgHost}/images/wrong.png`,
    count:3,
    animationData:{},
    timeData:100,
    qaNumber:'40',
    qaList:[
      {id:'1',startNum:'3',endNum:'5',result:'0'},
      { id: '2', startNum: '6', endNum: '1', result: '0' },
      { id: '3', startNum: '4', endNum: '7', result: '2' },
      { id: '4', startNum: '3', endNum: '2', result: '4' }
    ],
    currentQa:{}
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
    // 游戏开始倒计时
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation
    let count = 4;
    let cutdown = setInterval(() => {
      animation.scale(10, 10).step()
      console.log(22);
      count = count - 1;
      this.setData({
        count: count,
        animationData: animation.export()
      })
      if (count < 1) {
        clearInterval(cutdown);
      }
    }, 1000)
    const { qaList } = this.data;
    this.setData({
      currentQa: qaList[0]
    })
    //游戏答题倒计时
    var date = new Date();
    var that = this;
    var time = 100;
    var timer = setInterval(function () {
      console.log('222')
      time = time - 0.2;
      that.setData({
        timeData: time
      });
      if (time < 0) {
        clearInterval(timer);
        console.log(new Date() - date);
      }
    }, 10);
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