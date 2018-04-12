// pages/prize/prize.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitleList: [//tab分类
      { key: "prize", text: '挑战领奖', checked: true },
      { key: "record", text: '领奖记录', checked: false },
    ],
    currentKey:'prize',
    goodsList: [
      { id: '1', name: 'YSL圣罗兰方管正红色52', price: '300', surplus: '3', limit: '3', picture: `${imgHost}/images/prize.png`,getTime:'2018-04-13 14:34' },
      { id: '2', name: 'YSL圣罗兰方管正绿色52', price: '400', surplus: '3', limit: '3', picture: `${imgHost}/images/prize.png`, getTime: '2018-04-13 14:34' }
    ]//奖品数据
  },
  itemClick:function(e){
    const { tabTitleList} = this.data;
    var key = e.currentTarget.dataset.key;
    tabTitleList.forEach(item=>{
      item.key==key ? item.checked=true :item.checked=false
    })
    this.setData({
      tabTitleList,
      currentKey:key
    })
  },
  gotoAddress:function(){
    wx.navigateTo({
      url: '../address/address',
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