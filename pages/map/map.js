// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'110.3347',
    latitude:'25',
    scale:'5',
    markers:[
      {
        longitude: 110.3347,
        latitude:25,
        iconPath:'/resource/img/pin.png',
        width:26,
        height:32
      }
    ],
    polyline:[
      {
        points:[
          {
            longitude: 111.3347,
            latitude:26
          },
          {
            longitude: 109.3347,
            latitude: 24
          },
          {
            longitude: 108.3347,
            latitude: 26
          },
          {
            longitude: 111.3347,
            latitude: 26
          }
        ],
        color:'#ff0000',
        width:1
      }
          
    ]
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