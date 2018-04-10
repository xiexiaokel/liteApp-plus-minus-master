//index.js
//获取应用实例
const app = getApp()
const imgHost = app.globalData.imgHost;

Page({
  data: {
    imgBtn:`${imgHost}/images/intro_btn.png`,
    imgTitle:`${imgHost}/images/title.png`,
    imgInvited:`${imgHost}/images/wx_icon.png`,
    imgAdv:`${imgHost}/images/adv.png`,
    popHead:`${imgHost}/images/pop_head.png`,
    fight_num: 375988,
    tabShow:2,
    showModal:false,//控制大弹窗显示隐藏
    showPop:false//控制开始按钮小弹窗显示
  },
  onLoad: function () {
    
  },
  //事件处理函数
  showModal:function(){
    this.setData({
      showModal:true
    })
  },
  fightStart: function () {
   console.log('开始挑战');
   this.setData({
     showPop:true
   })
  },
  invitedFriend:function(){
    console.log('邀请朋友事件方法')
  },
  tabCheck:function(e){
    switch (e.detail.key){
      case 'will':
        console.log('选中了毅力榜');
        this.setData({
          tabShow:1,
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
  gotoPrize:function(){
    console.log('立即领奖');
  },
  relationClick:function(){
    console.log('立即联系');
  }
})
