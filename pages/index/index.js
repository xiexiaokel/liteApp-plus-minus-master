//index.js
//获取应用实例
const app = getApp()
const imgHost = app.globalData.imgHost;

Page({
  data: {
    imgBtn: `${imgHost}/images/intro_btn.png`,
    imgTitle: `${imgHost}/images/title.png`,
    imgInvited: `${imgHost}/images/wx_icon.png`,
    imgAdv: `${imgHost}/images/adv.png`,
    safeIcon: `${imgHost}/images/safe_icon.png`,
    popHead: `${imgHost}/images/pop_head.png`,
    fight_num: 375988,
    tabShow: 2,//控制首页tab卡默认显示内容
    showModal: false,//控制大弹窗显示隐藏
    showPop: false,//控制开始按钮小弹窗显示
    tabTitleList: [//tab分类
      { key: "prize", text: '奖品列表', checked: true },
      { key: "honor", text: '荣誉榜', checked: false },
      { key: "will", text: '毅力榜', checked: false }
    ],
    marqueeList:
    [{ id: '1', goods: 'YSL圣罗兰方管正红色52', nickName: '小灰灰', time: '2018-04-12 15:34' },
    { id: '2', goods: 'YSL圣罗兰方管正红色52', nickName: '小灰灰', time: '2018-04-12 15:34' },
    { id: '3', goods: 'YSL圣罗兰方管正红色52', nickName: '小灰灰', time: '2018-04-12 15:34' },
    { id: '4', goods: 'YSL圣罗兰方管正红色52', nickName: '小灰3灰', time: '2018-04-12 15:34' },
    { id: '5', goods: 'YSL圣罗兰方管正红色52', nickName: '小灰3灰', time: '2018-04-12 15:34' },
    { id: '6', goods: 'YSL圣罗兰方管正红色52', nickName: '小灰4灰', time: '2018-04-12 15:34' }
    ],//跑马灯数据列表
    interval: '3000',//跑马灯间隔时间
    duration: '500',//跑马灯滑动时间,
    goodsList:[
      { id: '1', name:'YSL圣罗兰方管正红色52', price:'300',surplus:'3',limit:'3',picture:`${imgHost}/images/prize.png`},
      { id: '2', name: 'YSL圣罗兰方管正绿色52', price: '400', surplus: '3', limit: '3', picture: `${imgHost}/images/prize.png` }
    ]//奖品数据
  },
  onLoad: function () {

  },
  //事件处理函数
  showModal: function () {
    this.setData({
      showModal: true
    })
  },
  fightStart: function () {
    console.log('开始挑战');
    this.setData({
      showPop: true
    })
  },
  invitedFriend: function () {
    console.log('邀请朋友事件方法')
  },
  getPrize:function(){
    wx.navigateTo({
      url: '../prize/prize',
    })
  },
  tabCheck: function (e) {
    switch (e.detail.key) {
      case 'will':
        console.log('选中了毅力榜');
        this.setData({
          tabShow: 1,
        })
        break;
      case 'prize':
        console.log('选中了娃娃奖品');
        this.setData({
          tabShow: 2,
        })
        break;
      case 'honor':
        console.log('选中了荣誉榜');
        this.setData({
          tabShow: 0,
        })
        break;
      default:
        break;
    }
  },
  gotoPrize: function () {
    console.log('立即领奖');
  },
  relationClick: function () {
    console.log('立即联系');
  }
})
