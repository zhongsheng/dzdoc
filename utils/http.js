

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
      obj.fail(res)

    }
  })
}

function post(obj) {
  const app = getApp()
  wx.request({
    url: obj.url,
    data: Object.assign( obj.data, app.authData),
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
      obj.fail(res)

    }
  })
}
module.exports = {
  request: request,
  post: post
}
