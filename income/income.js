// pages/inputBill/inputBill.js
Page({
  data: {
    activeTab: '支出',
    categories: [
      { name: '其他', icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/jizhang/shouye/qitablue.png' },
      { name: '衣物', icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/jizhang/shouye/yifublue.png' },
      { name: '住房', icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/jizhang/shouye/zhufangblue.png' },
      { name: '餐饮', icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/jizhang/shouye/canyinblue.png' },
      { name: '交通', icon: 'https://mp-34a5d4ee-1705-4d90-aebc-3458b73c8f4f.cdn.bspapp.com/jizhang/shouye/jiaotongblue.png' }
    ],
    selectedCategory: '其他',
    amount: '',
    note: '',
    currentDate: ''
  },

  onLoad() {
    this.setData({
      currentDate: this.formatDate(new Date())
    });
  },

  switchTab(event) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({ activeTab: tab });
  },

  selectCategory(event) {
    const category = event.currentTarget.dataset.category;
    this.setData({ selectedCategory: category });
  },

  inputNote(event) {
    this.setData({ note: event.detail.value });
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}年${month}月${day}日 ${hours}:${minutes}`;
  },

  onKeyTap(event) {
    const key = event.currentTarget.dataset.key;
    let { amount } = this.data;
    if (key === '清零') {
      amount = '';
    } else if (key === '确定') {
      // 保存账单逻辑
      wx.showToast({ title: '账单已保存', icon: 'success' });
    } else {
      amount += key;
    }
    this.setData({ amount });
  }
});
