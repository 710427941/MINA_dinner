// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    api:'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData(options.id)
  },
  requestData(id){
    var that = this
    var url = 'http://a.itying.com/api/productcontent?id='+id
    wx.request({
      url: url, 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var arr = res.data.result[0]

        arr.img_url = arr.img_url.replace(/\\/g,'/')


        console.log(res.data.result[0])
        that.setData({
          list:arr
        })
      }
    })
  }
})