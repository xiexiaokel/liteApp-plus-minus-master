// components/memberList/memberList.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderBy:{
      type:String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    memberList: [{
      nickName: '你大爷',
      picture:`${imgHost}/images/head_pic.png`,
      prizeNum:'500',
      fightNum:'300',
    },
    {
      nickName: '你大妈',
      picture:`${imgHost}/images/head_pic.png`,
      prizeNum:'400',
      fightNum:'300',
    },
    {
      nickName: '你大姨',
      picture: `${imgHost}/images/head_pic.png`,
      prizeNum: '300',
      fightNum: '300',
    },
    {
      nickName: '你大舅',
      picture: `${imgHost}/images/head_pic.png`,
      prizeNum: '200',
      fightNum: '300',
    },
    {
      nickName: '你大叔',
      picture: `${imgHost}/images/head_pic.png`,
      prizeNum: '100',
      fightNum: '300',
    },
    {
      nickName: '你大叔',
      picture: `${imgHost}/images/head_pic.png`,
      prizeNum: '100',
      fightNum: '300',
    },
    {
      nickName: '你大叔',
      picture: `${imgHost}/images/head_pic.png`,
      prizeNum: '100',
      fightNum: '300',
    },
    {
      nickName: '你大叔',
      picture: `${imgHost}/images/head_pic.png`,
      prizeNum: '100',
      fightNum: '300',
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
