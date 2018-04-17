// pages/fighting/fighting.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  num: 0,
  timer: {},
  /**
   * 页面的初始数据
   */
  data: {
    musicIcon:`${imgHost}/images/music.png`,
    rightIcon:`${imgHost}/images/right.png`,
    wrongIcon:`${imgHost}/images/wrong.png`,
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
    currentQa:{},
    isStart:false,
    answer:false,//控制显示失败弹窗还是成功弹窗
    showAlert:true,//控制弹窗显示隐藏
    alertIcon:`${imgHost}/images/fail_icon.png`,
    successImg:`${imgHost}/images/success_icon.png`,
    successBtn:`${imgHost}/images/success_btn.png`
  },
  // 领取奖品方法
  getPrize:function(){
    this.setData({
      showAlert:false
    })
    wx.navigateTo({
      url: '../prize/prize',
    })
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
    var that = this;
    const { qaList } = this.data;
    this.setData({
      currentQa: qaList[0]
    });
    this.num = 0;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 游戏开始倒计时
    let animation = wx.createAnimation()

    this.animation = animation
    let count = 4;
    let cutdown = setInterval(function() {
      console.log(22);
      count = count - 1;

      animation.scale(10, 10).opacity(0).step({
        duration: 1000,
        timingFunction: 'ease',
        transformOrigin:'50% 50%'
      });
      animation.scale(1, 1).opacity(1).step({
        duration: 0,
        timingFunction: 'step-start',
        transformOrigin: '50% 50%'
      });
      this.setData({
        count: count,
        animationData: animation.export()
      });
      if (count < 2) {
        clearInterval(cutdown);
        setTimeout(function() {
          this.setData({
            isStart: true
          });
          this.goAnswer();
        }.bind(this), 1000);
      }
    }.bind(this), 1080);
    // const { qaList } = this.data;
    // this.setData({
    //   currentQa: qaList[0]
    // })
    // //游戏答题倒计时
    // var date = new Date();
    // var that = this;
    // var time = 100;
    // var timer = setInterval(function () {
    //   console.log('222')
    //   time = time - 0.2;
    //   that.setData({
    //     timeData: time
    //   });
    //   if (time < 0) {
    //     clearInterval(timer);
    //     console.log(new Date() - date);
    //   }
    // }, 10);
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
  
  },

  goAnswer: function () {
    if (this.num >= this.data.qaList.length) {
      return;
    }
    var that = this;
    var time = 100;
    this.timer = setInterval(function () {
      time = time - 0.2;
      that.setData({
        timeData: time
      });
      if (time < 0) {
        clearInterval(that.timer);
      }
    }, 10);
  },

  changeQuest: function () {
    var that = this;
    if (this.num >= this.data.qaList.length) {
      return;
    }

    if (this.num >= this.data.qaList.length - 1) {
      return;
    }
    this.num = this.num + 1;
    this.setData({
      currentQa: this.data.qaList[that.num]
    });
    this.goAnswer(this.num);
  },

  answerQuest: function (event) {
    var value = event.currentTarget.dataset.value;
    if (value == 1) {
      clearInterval(this.timer);
      this.changeQuest();
    } else {
      clearInterval(this.timer);
    }

  }
})