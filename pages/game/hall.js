// pages/game/hall.js
Page({
  
  create_link:function(){
    wx.navigateTo({
      url: '/pages/game/create',
    })
  },
  zhongqiu_link:function(){
    wx.navigateTo({
      url: '/pages/game/mutiplay',
    })
  }
})