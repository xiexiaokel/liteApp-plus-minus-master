// components/tabBar/tabBar.js
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
    tabTitleList: [
      { key: "prize", text: '奖品列表', checked: true },
      { key: "honor", text: '荣誉榜', checked: false },
      { key: "will", text: '毅力榜', checked: false }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemCheck: function (e) {
      const { tabTitleList } = this.data;
      const currentKey = e.currentTarget.dataset.key;
      tabTitleList.forEach(item => {
        item.key == currentKey ? item.checked = true : item.checked = false;
        this.setData({
          tabTitleList
        });
      })
      const tabDetail = {
        key: currentKey
      }
      this.triggerEvent('itemCheck', tabDetail);
    }
  }
})
