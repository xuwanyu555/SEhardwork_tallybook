Page({
  data: {
    budget: 0.00,
    tempBudget: '' // 用于临时存储输入值
  },

  showBudgetModal() {
    wx.showModal({
      title: '设置预算',
      editable: true,  // 开启输入框
      placeholderText: '请输入预算金额',
      content: '',
      success: (res) => {
        if (res.confirm) {
          // 验证输入是否为有效数字
          const newBudget = parseFloat(res.content);
          if (!isNaN(newBudget) && newBudget >= 0) {
            this.setData({
              budget: newBudget.toFixed(2)
            });
          } else {
            wx.showToast({
              title: '请输入有效金额',
              icon: 'error'
            });
          }
        }
      }
    });
  }
})