// components/mainNav/mainNav.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    page: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [
      { key: 'fighting', id: '1', text: '我要挑战', imgUrl: `${app.globalData.imgHost}/images/fighting_default_icon.png`, imgSelected: `${app.globalData.imgHost}/images/fighting_active_icon.png`, isChecked: true },
      { key: 'mine', id: '2', text: '各人中心', imgUrl: `${app.globalData.imgHost}/images/mine_default_icon.png`, imgSelected: `${app.globalData.imgHost}/images/mine_active_icon.png`, isChecked: false }
    ]
  },

  /**
   * 组件的方法列表
   */
  ready: function (e) {
    const { page, tabList } = this.data;
    tabList.forEach(item => {
      item.key == page ? item.isChecked = true : item.isChecked = false;

    })
    this.setData({
      tabList: tabList
    })
  },
  methods: {
    selectItem: function (e) {
      console.log(e);
      const newTabList = this.data.tabList;
      const currId = e.currentTarget.dataset.id;
      newTabList.forEach(function (item, index) {
        if (item.id == currId) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
        }
      })
      this.setData({
        tabList: newTabList
      }, () => {
        switch (currId) {
          case '1':
            wx.redirectTo({
              url: '../fighting/fighting',
            });
            break;
          case '2':
            wx.redirectTo({
              url: '../mine/mine',
            });
            break;
        }
      })
    }
  }
})
