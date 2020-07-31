// components/my-event/my-event.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		count2:{
			type:Number,
			value:0
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		count2UP(){
			this.setData({
				count2:count2 + 1
			})
		}
	}
})
