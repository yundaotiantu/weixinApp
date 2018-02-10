// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:'天气信息',
    city:''
  },

  //key:9f5e3dc03c984feea0492ae902b973bc 
  //url:https://free-api.heweather.com/s6/weather/now?location=广州&key=9f5e3dc03c984feea0492ae902b973bc 

  /*获取天气信息*/ 
  getWeather:function(){
    let city = this.data.city;
    const HOST = `https://free-api.heweather.com/s6/`;
    const key = '9f5e3dc03c984feea0492ae902b973bc';
    let urlString = `${HOST}weather?location=${city}&key=${key}`;
    wx.request({
      url:urlString,
      success:(res)=>{
        let wether= res.data.HeWeather6[0].now.cond_txt;
        this.setData({
          weather: wether
        });
        wx.navigateTo({
          url: '../index/index'
        })
      }
    });
  },

  getcity:function(event){
   this.setData({
     city:event.detail.value
   })
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