const app = getApp()

Page({
  data: {
    claA:'color',
    claB:'B',
    claC:'C',
    val:'',
    valr:'',
    arr:[],
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },

  // 导航切换
  qq(e){
    this.setData({
      claA:'color',
      claB:'B',
      claC:'C'
    })
    
  },
  phone(e){
    this.setData({
      claA:'A',
      claB:'color',
      claC:'C'
    })
  },
  sm(e){
   this.setData({
      claA:'A',
      claB:'B',
      claC:'colorRed'
    })
  },

  // 数据绑定
  tapQq(e){
    this.setData({
      val:e.detail.value
    })
  },
  tapPhone(e){
     this.setData({
      valr:e.detail.value
    })
  },
  ann(e){
    var than = this;
    tt.request({
      url: 'https://apio.ink/mfcz/php/tz.php', //仅为示例，并非真实的接口地址
      data: {
        uin:this.data.valr,
        uid:this.data.val
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res)
        if(res.data.result == 100){
          wx.showToast({
            title: "授权码不存在",
            duration:2000
          });
          return false;
        };
        if(res.data.dwz.length == 0){
          wx.showToast({
            title: "暂无数据",
            duration:2000
          });
        }else if(res.data.dwz.length>0){
          wx.showToast({
            title: "查询成功",
            duration:2000
          });
          if(res.data.dwz.length == 1){
            than.setData({
              arr:'手机号：'+res.data.dwz[0].mobile
            })
          }else if(res.data.dwz.length > 1){
            than.setData({
              arr:'手机号：'+res.data.dwz[0].mobile/n+"手机号"+res.data.dwz[1].mobile
            })
          }
         
        }
       
        
      }
    })


    
  }
})
