const http = require('./utils/http.js')

App({
  onLaunch: function (options) {
    wx.hideTabBar({})

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // Initialize session arguments
              this.globalData.userInfo = res.userInfo
              this.authData.encrypted_data = res.encryptedData
              this.authData.iv = res.iv

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  requestUrl: 'https://crm.dzunion.cn',

  authData: {
    user_id: '',
    username: '',
    encrypted_data: '',
    iv: ''
  },

  globalData: {
    userInfo: null
  }
})
