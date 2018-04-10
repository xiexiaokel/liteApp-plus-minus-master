// components/pictureList/pictureList.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    prizeList:[
      {text:'小灰灰',picture:`${imgHost}/images/prize.png`},
      { text: '小拜拜白白', picture: `${imgHost}/images/prize.png` }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getPrize:function(){
      this.triggerEvent('getPrize');
    }
  }
})
