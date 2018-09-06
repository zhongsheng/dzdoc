const app = getApp()
const http = require('../../utils/http.js')
var thisPage

Page({
  data: {
    products: []
  },

  tapShow: function (e) {
    wx.navigateTo({
      url: 'show?id=' + e.currentTarget.id + '&name=' + e.currentTarget.dataset.productName,
    });
  },

  tapEdit: function (e) {
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: 'edit?id=' + e.currentTarget.id + '&name=' + e.currentTarget.dataset.productName,
    });
  },

  onReady: function () {
  },

  onShow: function(){
    thisPage = this
    http.request({
      url: app.requestUrl + '/products.json',
      success: function(res){
        thisPage.setData({
          products: res.data
        })
      }
    })

  }
})
