const http = require('./utils/http.js')

App({
  onLaunch: function (options) {

    wx.hideTabBar({})
    var thisApp = this;
    wx.getSetting({
      success: res => {
        wx.getSystemInfo({
          success: function(res) {
            if(res.brand == 'devtools'){
              thisApp.requestUrl = "http://127.0.0.1:3000"
            }
          },
        })
        
        if (res.authSetting['scope.userInfo']) {
          
        }
      }
    })
  },

  requestUrl: "https://crm.dzunion.cn",
  
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
