// pages/home.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		count2:0,
		count:0,
		students:[
			{name:'张三',age:18},
			{name:'lisi',age:40}
		],
		showImage:'',
	},
	countUp(){
		console.log(this),
		this.setData({
			count:this.data.count + 1
		})
	},
	countDown(){		
		if(this.data.count > 0)
		this.setData({
			count:this.data.count - 1
		})
	},
	chooseImage(){
		wx.chooseImage({
		  success: (res) => {
			  console.log(res),
			this.setData({
				showImage:res.tempFilePaths
			})
		  },
		})
	},
	handleGetUserInfo(res){
		console.log(res)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},



})