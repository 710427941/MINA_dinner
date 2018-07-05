// pages/content/content.js

var WxParse = require('../../wxParse/wxParse.js')
var config = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    api: config.host
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData(options.id)
  },
  requestData(id){

    var that = this
    var url =that.data.api+'api/productcontent?id='+id

    wx.request({
      url: url, 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        var arr = res.data.result[0]
        arr.img_url = arr.img_url.replace(/\\/g,'/')

        var article = arr.content
        WxParse.wxParse('article', 'html', article, that, 5)
        
        that.setData({
          list:arr
        })
      }
    })
  }
})