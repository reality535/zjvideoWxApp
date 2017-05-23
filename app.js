//app.js
App({
  onLaunch: function () {
   
  },
  // getUserInfo:function(cb){
  //   var that = this
  //   if(this.globalData.userInfo){
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   }else{
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             // console.log(res);
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  // getSystemInfo: function (cb) {
  //   var that = this
  //   if(that.globalData.systemInfo){
  //     typeof cb == "function" && cb(that.globalData.systemInfo)
  //   }else{
  //     wx.getSystemInfo({
  //       success: function(res) {
  //         that.globalData.systemInfo = res
  //         typeof cb == "function" && cb(that.globalData.systemInfo)
  //       }
  //     })
  //   }
  // },
  globalData:{
    userInfo:null,
    systemInfo:null
  }
})