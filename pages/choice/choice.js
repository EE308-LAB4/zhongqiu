// pages/choice/choice.js
Page({
  zhongqiu_link:function(){
    wx.navigateTo({
      url: '/pages/game/zhongqiu',
    })
  },
  hall_link:function(){
    wx.navigateTo({
      url: '/pages/game/hall',
    })
  }
})