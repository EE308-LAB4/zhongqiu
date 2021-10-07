// pages/game/hall.js
Page({
  zhongqiu_link:function(){
    wx.navigateTo({
      url: '/pages/game/mutiplay',
    })
  },
  create_link:function(){
    wx.navigateTo({
      url: '/pages/game/create',
    })
  }
})