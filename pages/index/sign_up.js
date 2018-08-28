const app = getApp()
const http = require('../../utils/http.js')
var thisPage
Page({
  data: {
    error: '',
    password: '',
    foucs: false,
    tip:'原网页版账号密码'
  },

  formSubmit: function(e){

    thisPage = this
    // e.detail.value
    wx.login({
      success: res => {
        if (res.code) {
          http.request({
            url: app.requestUrl + '/wx_login',
            data: {
              code: res.code,
              password: e.detail.value.password,
              name: e.detail.value.username
            },
            success: function (res) {
              if (res.data.error) {

                wx.showModal({
                  title: '提示',
                  content: res.data.error,
                  showCancel: false,
                  success: function(){
                    thisPage.setData({ password: '', focus: true })
                  }
                })

              }else{
                wx.reLaunch({
                  url: './index',
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
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }

})
