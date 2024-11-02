Page({
  data: {
    totalExpenditure: '￥0.00',
    totalIncome: '￥0.00',
    budget: '未设置预算',
    remainingBudget: '预算剩余未设置',
    todayExpenditure: '￥0.00',
    todayIncome: '￥0.00',
  },
  onLoad: function() {
    // 页面加载时执行的初始化操作
  },

  chartanalysi: function() {
  wx.redirectTo({
    url: '/miniprogram/pages/图标界面/index',
  });

  },

  addRecord: function() {
    // 记一笔的事件处理函数
  }
})