// pages/food/food.js

var config = require('../../utils/config.js') 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    url: config.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
  },
  requestData(){
    var that = this

    wx.request({
      url: that.data.url+'api/productlist', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        var arr = res.data.result
        for(var i=0; i<arr.length;i++){
          for(var j=0;j<arr[i].list.length;j++){
            arr[i].list[j].img_url = arr[i].list[j].img_url.replace(/\\/g,'/')
          }
        }

        that.setData({
          list:arr
        })
      }
    })
  },
  gotoFoodContent(event){
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../content/content?id=' + id
    })
  }

  
})