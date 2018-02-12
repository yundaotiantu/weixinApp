// pages/ip/ip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:'地理定位',
    ip:null
  },

  getIp:function(event){
    this.setData({
      ip:event.detail.value
    })
  },

  getLocation: function () {
    let ip = this.data.ip;
    let page = this;
    wx.request({
      url: `http://127.0.0.1:3000?ip=${ip}`,
      success: function (res) {
        page.setData({
          location: res.data.loc
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})