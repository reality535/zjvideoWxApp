//index.js
//获取应用实例
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    currentNavbar:0,
    navbar: ['全部','美食', '美景','活动','音乐','其他'],
    // list_one: [],
    // list_two:[],
    // list_all:[],
    // all_page:1,
    // one_page:1,
    // two_page:1,
    // systemInfo: {},
    // name:"宣传片",
    hidden:true,


    list_0:[],
    list_1:[],
    list_2: [],
    list_3: [],
    list_4: [],
    list_5: [],
    list_6: [],

    page_0:1,
    page_1:1,
    page_2: 1,
    page_3: 1,
    page_4: 1,
    page_5: 1,
    page_6: 1
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // this.loadVideoAll();


    this.loadCurrentVideo(api.VIDEO_LIST_ALL, this.data.page_0, this.data.currentNavbar);
    // this.loadCurrentVideo(api.VIDEO_LIST_TWO, this.data.page_1, this.data.currentNavbar);
  },

  onPullDownRefresh: function () {
    console.log('下拉刷新！！！！');

    if (this.data.currentNavbar == 0) {
      console.log(this.data.list_all);
      this.setData({
        list_0: [],
        page_0: 1
      });
      this.loadCurrentVideo(api.VIDEO_LIST_ALL, this.data.page_0, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 1) {
      this.setData({
        list_1: [],
        page_1: 1

      });
      this.loadCurrentVideo(api.VIDEO_LIST_ONE, this.data.page_1, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 2) {
      this.setData({
        list_2: [],
        page_2: 1
      });
      this.loadCurrentVideo(api.VIDEO_LIST_TWO, this.data.page_2, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 3) {
      this.setData({
        list_3: [],
        page_3: 1
      });
      this.loadCurrentVideo(api.VIDEO_LIST_THREE, this.data.page_3, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 4) {
      this.setData({
        list_4: [],
        page_4: 1
      });
      this.loadCurrentVideo(api.VIDEO_LIST_FOUR, this.data.page_4, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 5) {
      this.setData({
        list_5: [],
        page_5: 1
      });
      this.loadCurrentVideo(api.VIDEO_LIST_FOUR, this.data.page_5, this.data.currentNavbar);
    }
    
    wx.stopPullDownRefresh();
  },
  swichNav(e){
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    });
    if (e.currentTarget.dataset.idx == 1&& this.data.list_1.length == 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_ONE, this.data.page_1, this.data.currentNavbar);

    } else if (e.currentTarget.dataset.idx == 2 && this.data.list_2.length == 0){
      this.loadCurrentVideo(api.VIDEO_LIST_TWO, this.data.page_2, this.data.currentNavbar);

    } else if (e.currentTarget.dataset.idx == 3 && this.data.list_3.length == 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_THREE, this.data.page_3, this.data.currentNavbar);

    } else if (e.currentTarget.dataset.idx == 4 && this.data.list_4.length == 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_FOUR, this.data.page_4, this.data.currentNavbar);

    } else if (e.currentTarget.dataset.idx == 5 && this.data.list_5.length == 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_FIVE, this.data.page_5, this.data.currentNavbar);

    } 
  },
  
  loadCurrentVideo:function(url,page,idx){
    var that = this;
    // wx.showNavigationBarLoading();
    var listIdx = "list_" + idx;
    var pageIdx = "page_" + idx;
    // console.log(url + '&page=' + page);
    wx.showNavigationBarLoading();
    api.get(url + '&page=' + page)
      .then(res => {
        if (res.data.length) {

          var updateData = {};
          updateData[listIdx] = this.data[listIdx].concat(res.data);
          updateData[pageIdx] = ++this.data[pageIdx];

          // console.log(updateData);
          this.setData(updateData);

          wx.hideNavigationBarLoading();
        }else{
          // console.log("数据已加载完成！");
          wx.hideNavigationBarLoading();
        }

      })
  },
  // 加载全部视频数据
  // loadVideoAll: function () {
  //   wx.showNavigationBarLoading();
  //   api.get(api.VIDEO_LIST_ALL + '&page=' + this.data.all_page)
  //     .then(res => {
  //       if (res.data.length) {
  //         this.setData({
  //           list_all: this.data.list_all.concat(res.data),
  //           all_page:++this.data.all_page
  //         });
  //         wx.hideNavigationBarLoading();
  //       }else{
          
  //         wx.hideNavigationBarLoading();
  //       }

  //     })
  // },
  // 加载宣传片视频数据
  // loadVideo:function(){
  //   wx.showNavigationBarLoading();
  //   api.get(api.VIDEO_LIST + '&page=' + this.data.one_page)
  //       .then(res => {
  //         if(res.data.length){
  //           this.setData({
  //             list_one: this.data.list_one.concat(res.data),
  //             one_page: ++this.data.one_page
  //           });
  //           wx.hideNavigationBarLoading();
  //         } else {
            
  //           wx.hideNavigationBarLoading();
  //         }
  //       })
  // },
  // 加载记录片视频数据
  // loadVideoTwo: function () {
  //   wx.showNavigationBarLoading();
  //   api.get(api.VIDEO_LIST_TWO + '&page=' + this.data.two_page)
  //     .then(res => {
  //       if (res.data.length) {
  //         this.setData({
  //           list_two: this.data.list_two.concat(res.data),
  //           two_page: ++this.data.two_page
  //         });
  //         wx.hideNavigationBarLoading(); 
  //       } else {
          
  //         wx.hideNavigationBarLoading();
  //       }
  //     })
  // },

  // 上拉加载
  // 上拉加载回调接口
  onReachBottom: function () {
    
    
    if (this.data.currentNavbar == 0 && this.data.list_0.length != 0){
      this.loadCurrentVideo(api.VIDEO_LIST_ALL, this.data.page_0, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 1 && this.data.list_1.length != 0){
      this.loadCurrentVideo(api.VIDEO_LIST_ONE, this.data.page_1, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 2 && this.data.list_2.length != 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_TWO, this.data.page_2, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 3 && this.data.list_3.length != 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_THREE, this.data.page_3, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 4 && this.data.list_4.length != 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_FOUR, this.data.page_4, this.data.currentNavbar);
    } else if (this.data.currentNavbar == 5 && this.data.list_5.length != 0) {
      this.loadCurrentVideo(api.VIDEO_LIST_FIVE, this.data.page_5, this.data.currentNavbar);
    }
  }

 
})
