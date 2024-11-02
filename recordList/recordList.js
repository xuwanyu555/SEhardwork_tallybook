Page({
  data: {
    records: []
  },

  onLoad() {
    const records = wx.getStorageSync('records') || [];
    this.setData({ records });
  },

  viewRecord(e) {
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({ url: `/pages/recordDetail/recordDetail?index=${index}` });
  }
});
