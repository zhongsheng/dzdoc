

function updateSession(){
  wx.redirectTo({
    url: '../index/index',
  })
}
function request(obj) {
  wx.request({
    url: obj.url,
    data: obj.data,
    method: obj.method,
    header: {
      cookie: wx.getStorageSync('cookie')
    },
    success: function (res) {

      if (res.header['Set-Cookie']){
        wx.setStorageSync('cookie', res.header['Set-Cookie'])

      }
      obj.success(res)
    },
    fail: function (res) {
      console.log(res)
      updateSession()
      obj.fail(res)

    }
  })
}

function post(obj) {
  var thisApp = getApp()
  if(thisApp.authData.iv.length < 10){
    updateSession()

  }
  wx.request({
    url: obj.url,
    data: Object.assign( obj.data, thisApp.authData),
    method:"POST",
    header: {
      cookie: wx.getStorageSync('cookie'),
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {

      if (res.header['Set-Cookie']) {
        wx.setStorageSync('cookie', res.header['Set-Cookie'])
        console.log(wx.getStorageSync('cookie'))
      }
      obj.success(res)

    },
    fail: function (res) {
      updateSession()
      console.log(res)
      obj.fail(res)

    }
  })
}
module.exports = {
  request: request,
  post: post
}
