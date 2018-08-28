// Login then redirect to dashboard

const app = getApp()
const http = require('../../utils/http.js')
Page({
  data: {
    motto: Math.PI,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onShow: function () {
    wx.login({
      success: res => {
        if (res.code) {
          http.request({
            url: app.requestUrl + '/wx_login',
            data: {
              code: res.code
            },
            success: function (res) {

              if(res.data.error){
                // Binding account
                wx.navigateTo({
                  url: 'sign_up',
                })
              }

              if(res.data.id){
                app.authData.user_id  = res.data.id
                app.authData.username = res.data.name

                wx.switchTab({
                  url: './dashboard',
                })
              }

            },
            fail: function (res) {
              console.log(res)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })


  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
