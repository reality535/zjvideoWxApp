//index.js
//获取应用实例
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    currentNavbar:'0',
    navbar: ['全部','宣传片', '记录片','美食','美景','活动','其他'],
    list_one: [],
    list_two:[],
    list_all:[],
    all_page:1,
    one_page:1,
    two_page:1,
    systemInfo: {},
    name:"宣传片",
    hidden:true,


    list_0:[],
    list_1:[],
    page_0:1,
    page_1:1
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.loadVideoAll();


    // this.loadCurrentVideo(api.VIDEO_LIST_ALL, this.data.page_0, 0);
    // this.loadCurrentVideo(api.VIDEO_LIST_TWO, this.data.page_1, this.data.currentNavbar);
  },

  onPullDownRefresh: function () {
    console.log('下拉刷新！！！！');

    if (this.data.currentNavbar == 0) {
      console.log(this.data.list_all);
      this.setData({
        list_all: [],
        all_page: 1
      });
      this.loadVideoAll();
    } else if (this.data.currentNavbar == 1) {
      this.setData({
        list_one: [],
        one_page: 1

      });
      this.loadVideo();
    } else if (this.data.currentNavbar == 2) {
      this.setData({
        list_two: [],
        two_page: 1
      });
      this.loadVideoTwo();
    }
    
    wx.stopPullDownRefresh();
  },
  swichNav(e){
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    });
    if (e.currentTarget.dataset.idx == 1&& this.data.list_one.length == 0) {
      this.loadVideo();
    } else if (e.currentTarget.dataset.idx == 2 && this.data.list_two.length == 0){
      this.loadVideoTwo();
    }
  },
  
  // loadCurrentVideo:function(url,page,idx){
  //   var that = this;
  //   // wx.showNavigationBarLoading();
  //   var listIdx = "list_" + idx;
  //   var pageIdx = "page_" + idx;
  //   console.log(url + '&page=' + page);

  //   api.get(url + '&page=' + page)
  //     .then(res => {
  //       if (res.data.length) {
  //         console.log(res);
  //         var updateData = {};
  //         updateData[listIdx] = this.data[listIdx].concat(res.data);
  //         updateData[pageIdx] = ++this.data[pageIdx];
  //         console.log(updateData);
  //         this.setData(updateData);
  //         console(this.data[listIdx]);
  //       }else{
  //         console.log("获取失败！");
  //       }

  //     })
  // },
  // 加载全部视频数据
  loadVideoAll: function () {
    wx.showNavigationBarLoading();
    api.get(api.VIDEO_LIST_ALL + '&page=' + this.data.all_page)
      .then(res => {
        if (res.data.length) {
          this.setData({
            list_all: this.data.list_all.concat(res.data),
            all_page:++this.data.all_page
          });
          wx.hideNavigationBarLoading();
        }else{
          
          wx.hideNavigationBarLoading();
        }

      })
  },
  // 加载宣传片视频数据
  loadVideo:function(){
    wx.showNavigationBarLoading();
    api.get(api.VIDEO_LIST + '&page=' + this.data.one_page)
        .then(res => {
          if(res.data.length){
            this.setData({
              list_one: this.data.list_one.concat(res.data),
              one_page: ++this.data.one_page
            });
            wx.hideNavigationBarLoading();
          } else {
            
            wx.hideNavigationBarLoading();
          }
        })
  },
  // 加载记录片视频数据
  loadVideoTwo: function () {
    wx.showNavigationBarLoading();
    api.get(api.VIDEO_LIST_TWO + '&page=' + this.data.two_page)
      .then(res => {
        if (res.data.length) {
          this.setData({
            list_two: this.data.list_two.concat(res.data),
            two_page: ++this.data.two_page
          });
          wx.hideNavigationBarLoading(); 
        } else {
          
          wx.hideNavigationBarLoading();
        }
      })
  },

  // 上拉加载
  // 上拉加载回调接口
  onReachBottom: function () {
    
    
    if (this.data.currentNavbar == 0 && this.data.list_all.length != 0){
      console.log(this.data.all_page);
      this.loadVideoAll();
    } else if (this.data.currentNavbar == 1 && this.data.list_one.length != 0){
      console.log(this.data.one_page);
      this.loadVideo();
    } else if (this.data.currentNavbar == 2 && this.data.list_two.length != 0) {
      console.log(this.data.two_page);
      this.loadVideoTwo();
    }
  }

 
})
