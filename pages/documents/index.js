const app = getApp()
const http = require('../../utils/http.js')
var thisPage


Page({

  /**
   * 页面的初始数据
   */
  data: {
    docs: []
  },
  tapShow: function (e) {
    wx.navigateTo({
      url: 'fold?id=' + e.currentTarget.id + '&name=' + e.currentTarget.dataset.productName,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    thisPage = this
    http.request({
      url: app.requestUrl + '/collections.json',
      success: function(res){
        // for (let n in res.data) {
        //   // only show the date
        //   res.data[n].updated_at = res.data[n].updated_at.replace(/T.*/,'');
        // }
        thisPage.setData({
          docs: res.data
        })
      }
    })


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
