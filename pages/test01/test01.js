// pages/test01/test01.js
Page({
	data: {
		letters:['a','b','c','d'],
		counter1:0
	},
	fixInner(){
		const my_fix = this.selectComponent(".my_fix")
		console.log(my_fix)
		// 法一

		// my_fix.setData({
		// 	counter2:my_fix.data.counter2 + 1
		// })

		//法二
		my_fix.handlefixinner(19)
	},
	fixouter(){
		this.setData({
			counter1:this.data.counter1 + 1 
		})
	}
})