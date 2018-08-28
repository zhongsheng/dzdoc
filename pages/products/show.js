const app = getApp()
const http = require('../../utils/http.js')
var thisPage
var productId

Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty: 'hide',
    product: [],
    logs: []
  },

  tapBack: function(){
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options:' ,options)
    productId = options.id
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    thisPage = this
    http.request({
      url: app.requestUrl + '/products/'+ productId +'.json',
      success: function (res) {
        thisPage.setData({
          product: res.data.product,
          logs: res.data.logs
        })

        if(res.data.logs.length == 0){
          thisPage.setData({
            empty: 'show'
          })
        } else {
          thisPage.setData({
            empty: 'hide'
          })
        }

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
