const app = getApp();
const http = require('../../utils/http.js');
var thisPage;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: []
  },
  tap_create: function () {
    wx.navigateTo({
      url: 'new_todo',
    })
  },

  tapShow: function (e) {
    wx.navigateTo({
      url: 'fold?url=' + e.currentTarget.dataset['u'] + '&name=' + e.currentTarget.dataset['n'] + '&id=' + e.currentTarget.id,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name
    })
    app.project.id = options.id;
    console.log(options)
    thisPage = this
    app.currentUrl = app.requestUrl + '/projects/' + options.id + '.json'



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
    http.request({
      url: app.currentUrl,
      success: function (res) {

        thisPage.setData({
          lists: res.data
        })
      }
    })
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



});
