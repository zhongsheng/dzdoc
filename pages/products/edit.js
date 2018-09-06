const app = getApp()
const http = require('../../utils/http.js')
var thisPage

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productID: 0,
    productName:'',
    tip: ''
  },
  formSubmit: function(e){
    http.post({
      url: app.requestUrl + '/wechat_v1/create',
      data: e.detail.value,
      success: function(res){
        if(res.statusCode == 500){
          wx.showModal({
            title: '提示',
            content: "长时间没用,点击确定,自动刷新",
            showCancel: false,
            success: function (show_res) {
              wx.redirectTo({
                url: '../index/index',
              })
            }
          });
  
        }
        console.log(res)
        if(res.data.product_id > 0){
          wx.showModal({
            title: '提示',
            content: "出库成功",
            showCancel: false,
            success: function(show_res){
              if (show_res.confirm) {
                wx.navigateBack({ delta: 1 });
              }
            }
          });
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.error,
            showCancel: false,
            success: function(){

            }
          });
        }
      } // success end

    })
  },

  /**
   * Setting product id used for POST
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({  title: "出库" });

    this.setData({
      productID: options.id,
      productName: options.name
    });

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
