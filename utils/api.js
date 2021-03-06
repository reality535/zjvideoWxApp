'use strict';
import Promise from './es6-promise'

module.exports = {
  PAGE_WORK: '/pages/work-detail/work-detail',

  VIDEO_LIST_ALL: 'https://www.zjhaining.com/weixin_page/api.php?op=videolist&order=listorder&id=41',
  VIDEO_LIST_ONE: 'https://www.zjhaining.com/weixin_page/api.php?op=videolist&order=listorder&id=42',
  VIDEO_LIST_TWO: 'https://www.zjhaining.com/weixin_page/api.php?op=videolist&order=listorder&id=43',
  VIDEO_LIST_THREE: 'https://www.zjhaining.com/weixin_page/api.php?op=videolist&order=listorder&id=44',
  VIDEO_LIST_FOUR: 'https://www.zjhaining.com/weixin_page/api.php?op=videolist&order=listorder&id=45',
  VIDEO_LIST_FIVE: 'https://www.zjhaining.com/weixin_page/api.php?op=videolist&order=listorder&id=46',
 
  VIDEO_CONTENT: 'https://www.zjhaining.com/weixin_page/api.php?op=getvideo&id=',

  get (url) {
    return new Promise((resolve, reject) => {
      // console.log(url)
      wx.request({
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  post (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencode;charset=UTF-8;'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  json2Form(json) {
    var str = []
    for(var p in json){
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
    }
    return str.join("&")
  }

};
