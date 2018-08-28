//logs.js
const util = require('../../utils/util.js')

Page({

  data: {
    logs: []
  },
  clickBack: function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  onLoad: function () {
    wx.showTabBar({

    })
  }
})
