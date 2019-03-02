$(function() {
	$(".box").fullpage({
		//设置每个页面的颜色
		sectionsColor: ["#f9a03f", "#b8bedd", "#f0e6ef", "#efc3e6", "#f0a6ca", "#9c89b8", "#ddf9c1", "#f8dda4"],
		//显示导航栏
		navigation: true,
		//默认是垂直居中 改成顶部对齐
		verticalCentered: false,
		//滚动函数 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数。
		//		   anchorLink 是锚链接的名称
		//		   index 是section的索引， 从1开始计算
		//		在没有设置锚文本的情况下， 只有使用唯一的index参数。
		afterLoad: function(link, index) {
			//滚动到第二页面是 执行第二屏的动画  为页面添加一个类
			$(".section").eq(index - 1).addClass("new");
		},

		//		滚动前的回调函数， 接收 index、 nextIndex 和 direction 3 个参数
		//		index 是离开的“ 页面” 的序号， 从1开始计算；
		//		nextIndex 是滚动到的“ 页面” 的序号， 从1开始计算；
		//		direction 判断往上滚动还是往下滚动， 值是 up 或 down。
		onLeave: function(index, nextindex, direction) {
			if(index == 2 && nextindex == 3) {
				$(".section").eq(index - 1).addClass("add");
			} else if(index == 3 && nextindex == 4) {
				$(".section").eq(index - 1).addClass("leaved");
			}else if(index == 5 && nextindex == 6) {
				$(".section").eq(index - 1).addClass("leaved");
		    };
		},
			
		//这个回调函数只是在生成页面结构的时候调用
		afterRender: function() {
			$("#more").click(function() {
				//向下滚动一页的函数
				$.fn.fullpage.moveSectionDown();
			});
		},

		//每个屏幕滚动动画执行的时间
		scrollingSpeed: 1000
	});
});




//检测动画结束函数 是动画更衔接
//$(".section4 .bus").on("transitionend",function(){
//				console.log("hahhh");
//	});