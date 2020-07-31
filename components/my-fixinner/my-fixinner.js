// components/my-fixinner/my-fixinner.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		counter2:0
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handlefixinner(num){
			this.setData({
				counter2:this.data.counter2 + num
			})
		}
	}
})
