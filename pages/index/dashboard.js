const app = getApp()
const http = require('../../utils/http.js')
var thisPage

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: ''
  },

  // openFile: function(e){
  //   wx.downloadFile({
  //     url: 'http://img.danishshowroom.cn/FDA.pdf',
  //     success: function (res) {
  //       var filePath = res.tempFilePath
  //       wx.openDocument({
  //         filePath: filePath,
  //         success: function (res) {
  //           console.log('打开文档成功')
  //         }
  //       })
  //     }
  //   })
  // },

  onLoad: function (options) {
    wx.showTabBar({})

    this.setData({
      username: app.authData.username
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
