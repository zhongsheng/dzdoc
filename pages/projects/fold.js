const app = getApp();
const http = require('../../utils/http.js');
var thisPage;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: []
  },
  openFile: function(e) {
    wx.showLoading({
      title: '加载中',
    });
    let fileUrl = app.requestUrl + e.currentTarget.id;
    wx.downloadFile({
      url: fileUrl,
      success: function (res) {
        wx.hideLoading()
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        });
      },
      fail: function(e){
        wx.hideLoading();
        wx.showModal({
          title: '提示',
          content: '加载失败',
        });
      }
    });
  },
  tap_view: function(){},
  tap_copy: function(e){
    let dataset = e.currentTarget.dataset;
    let message = app.requestUrl
        + dataset['u']
        + "?a=点击链接下载"
        +  dataset['n'];

    wx.setClipboardData({
      data: message,
      success: function(res) {
        wx.showToast({
          title: '拷贝成功',
          icon: 'success',
          duration: 2000
        })
      }
    });
  },
  tapShow: function (e) {
    wx.navigateTo({
      url: 'fold?id=' + e.currentTarget.id + '&name=' + e.currentTarget.dataset.productName,
    });
  },
  tap_print: function(e){
    http.request({
      url: app.requestUrl + '/print/' + e.currentTarget.id + '.json',
      success: function(res){
        wx.showModal({
          title: '提示',
          content: '文件已经发送给打印机,文件较大,请耐心等待',
        })
        console.log(res);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    thisPage = this
    http.request({
      url: app.requestUrl + '/projects/'+ options.id + '.json',
      success: function(res){
        wx.setNavigationBarTitle({
          title: res.data.name
        })
        // for (let n in res.data) {
        //   // only show the date
        //   res.data[n].updated_at = res.data[n].updated_at.replace(/T.*/,'');
        // }
        thisPage.setData({
          workflow: res.data
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



});
