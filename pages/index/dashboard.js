const app = getApp()
const http = require('../../utils/http.js')
var thisPage

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    news: null
  },
  tapShow: function (e) {

    wx.navigateTo({
      url: '../projects/fold?url=' + e.currentTarget.dataset['u']  
            + '&name=' + e.currentTarget.dataset['n'] 
            + '&id=' + e.currentTarget.id,
    });
  },
  onLoad: function (options) {
    thisPage = this
    wx.showTabBar({})

    this.setData({
      username: app.authData.username
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    http.request({
      url: app.requestUrl + '/workflows.json',
      success: function(res){
        thisPage.setData({
          news: res.data
        })
      }
    })

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
