//获取应用实例
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    title:'视频',
    video_detail:{},
    relation:[],
    hotList: []
  },


  onLoad: function (options) {
    console.log(options);
    if(options){
      this.setData({
        id: options.id,
        title: options.title
      });
      console.log(this.data.id)
      this.loadVideoDetail(this.data.id);
    }
  },


  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title
    })
  },

  loadVideoDetail: function (id) {
    api.get(api.VIDEO_CONTENT + id)
      .then(res => {
        console.log(res);
        this.setData({
          video_detail: res.data,
          hotList: res.data.relation
        });
        // console.log("dfdfdfdf");
        console.log(this.data.hotList);
      })
  }

})