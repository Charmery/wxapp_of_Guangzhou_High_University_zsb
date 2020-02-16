// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'history',
        value: '历史'
      },
      {
        name: 'geography',
        value: '地理'
      },
      {
        name: 'politics',
        value: '政治'
      },
      {
        name: 'biolohy',
        value: '生物'
      },
      {
        name: 'physics',
        value: '物理'
      },
      {
        name: 'chemistry',
        value: '化学'
      }
    ],
    itemss: [{
        name: 'Wrench',
        value: '扳手'
      },
      {
        name: 'Harmonica',
        value: '口琴'
      },
      {
        name: 'Ball pen',
        value: '圆珠笔'
      },
      {
        name: 'Doll',
        value: '公仔'
      },
      {
        name: 'Test tube',
        value: '试管'
      },
      {
        name: 'Microphone',
        value: '麦克风'
      },
    ]
  },

  radioChange_one: function(e) {
    switch (e.detail.value) {
      case 'history':
        this.setData({
          check_one: '1'
        });
        break;
      case 'geography':
        this.setData({
          check_one: '2'
        });
        break;
      case 'politics':
        this.setData({
          check_one: '3'
        });
        break;
      case 'biolohy':
        this.setData({
          check_one: '4'
        });
        break;
      case 'physics':
        this.setData({
          check_one: '5'
        });
        break;
      case 'chemistry':
        this.setData({
          check_one: '6'
        });
        break;
    };
  },
  radioChange_two: function(e) {
    console.log(e.detail.value);
    switch (e.detail.value) {
      case 'Wrench':
        this.setData({
          check_two: '1'
        });
        break;
      case 'Harmonica':
        this.setData({
          check_two: '2'
        });
        break;
      case 'Ball pen':
        this.setData({
          check_two: '3'
        });
        break;
      case 'Doll':
        this.setData({
          check_two: '4'
        });
        break;
      case 'Test tube':
        this.setData({
          check_two: '5'
        });
        break;
      case 'Microphone':
        this.setData({
          check_two: '6'
        });
        break;
    };
  },
  jump: function() {
    var check_first = this.data.check_one;
    var check_second = this.data.check_two;
    var check = check_first + check_second;
    console.log(check);
    wx.setStorageSync('the_ckeck', check)
    wx.navigateTo({
      url: '/pages/answer/answer'
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})