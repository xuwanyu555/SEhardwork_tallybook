Page({
  data: {
    activeTab: 'expense', // 默认选中支出
    expenseCount: 15,
    expenseTotal: 378.17,
    incomeCount: 3,
    incomeTotal: 1000.00,
    balance: 621.83,
    bars: [70, 50, 80, 45, 60, 70, 90, 60, 40, 50, 70, 30, 60, 80, 50, 90, 70, 80, 60, 50, 30, 50, 80, 60, 90, 50, 80, 30, 50, 60],
    selectedAmount: 0,
  },

  // 返回按钮功能
  goBack() {
    wx.navigateBack();
  },

  // 切换支出/收入标签页
  switchTab(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      activeTab: type
    });
  },

  // 显示选中的柱状图的金额
  showAmount(e) {
    const amount = e.currentTarget.dataset.amount;
    this.setData({
      selectedAmount: amount
    });
  },
})
