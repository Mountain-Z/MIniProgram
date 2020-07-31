// components/my-Ex01/my-ex01.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		subTitle:{
			type:Array
		}
	},
	data: {
		index:0,
		currentIndex:0
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		clickTab(event){
			
			const index = event.currentTarget.dataset.index;
			this.setData({
				currentIndex:index
			})	
			this.triggerEvent('clickTab',{index,title:this.properties.subTitle[index]},{})	
		}
	}
})
