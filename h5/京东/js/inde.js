//顶部搜索
window.onload = function() {
		search();
		banner();
		countdown();
	}
	//顶部搜索
var search = function() {
	//获取元素
	var searcbox = document.querySelector(".jd_search_box");
	var banner = document.querySelector(".jd_banner");
	var height = banner.offsetHeight;
	//页面滚动事件
	window.onscroll = function() {
		var scrolltop = document.documentElement.scrollTop;
		var opacity = 0;
		if(scrolltop < height) {
			opacity = scrolltop / height * 0.8;
		} else {
			opacity = 0.8;
		}
		searcbox.style.background = "rgba(201,21,35," + opacity + ")";
	}
};
//轮播图
var banner = function() {
	//获取元素
	var banner = document.querySelector(".jd_banner");
	//获取图片的宽度
	var width = banner.offsetWidth;
	//获取图片容器
	var imgbox = document.querySelector("ul:first-child");
	//获取点容器
	var dotbox = document.querySelector("ul:last-child");
	//获取所有的点
	var dot = dotbox.querySelectorAll("li");
	//过渡函数
	var addTransition = function() {
			imgbox.style.transition = "all 0.2s";
			imgbox.style.webkitTransition = "all 0.2s";
		}
		//清除过渡函数
	var removeTransition = function() {
			imgbox.style.transition = "none";
			imgbox.style.webkitTransition = "none";
		}
		//位移函数
	var shiftTransform = function(translateX) {
		imgbox.style.transform = "translateX(" + translateX + "px)";
		imgbox.style.webkitTransition = "translateX(" + translateX + "px)";
	}

	//索引 第一张图片
	var index = 1;
	//动画
	var time = setInterval(function() {
		index++;
		//加过渡
		addTransition();
		//加位移
		shiftTransform(-index * width);
	}, 2000);
	//判断是否为最后一张  无缝连接
	imgbox.addEventListener("transitionend", function() {
		if(index >= 9) {
			index = 1;
			//清除过渡
			removeTransition();
			//位移
			shiftTransform(-index * width);
		}
		//滑动的时候也要清除过渡
		else if(index <= 0) {
			index = 8;
			//清除过渡
			removeTransition();
			//位移
			shiftTransform(-index * width);
		}
		setDot();
	});
	//点切换的方法
	var setDot = function() {
		for(var i = 0; i < dot.length; i++) {
			var obj = dot[i];
			obj.classList.remove("now");
		}
		//为当前图片所有添加类
		dot[index - 1].classList.add("now");
	};

	//触摸事件
	var startX = 0;
	var distance = 0;
	var ismove = false;
	imgbox.addEventListener("touchstart", function(e) {
		//清除动画
		clearInterval(time);
		//记录触摸的X的坐标
		startX = e.touches[0].clientX;
	});
	//触摸位移事件
	imgbox.addEventListener("touchmove", function(e) {
		//记录移动的X坐标
		var removeX = e.touches[0].clientX;
		//移动啦多少距离
		distance = removeX - startX;
		//当前图片的距离加移动距离
		var startasX = -index * width + distance;
		//清除过渡 添加位移
		removeTransition();
		shiftTransform(startasX);
		ismove = true;
	});
	//触摸结束事件
	imgbox.addEventListener("touchend", function() {
		if(ismove) {
			if(Math.abs(distance) < width / 3) {
				//
				addTransition();
				shiftTransform(-index * width);
			} else {
				//右边划一张
				if(distance > 0) {
					index--;
				} else {//左边划一张
					index++;
				}
				//动画移动
				addTransition();
				shiftTransform(-index * width);
			}
		}
		//重置数据
		startX = 0;
		distance = 0;
		ismove = false;
		clearInterval(time);
		time = setInterval(function() {
			index++;
			//加过渡
			addTransition();
			//加位移
			shiftTransform(-index * width);
	    }, 2000);
	});
};

//倒计时
var countdown = function() {
	//每一秒改变当前时间 假设时间为4小时
	var times=4*60*60;
	//获取时间元素
	var span=document.querySelector(".time").querySelectorAll("span");
	//时间动画函数
	var time=setInterval(function(){
		
		times--;
		//转化
		var h=Math.floor(times/3600);
		var m=Math.floor(times%3600/60);
		var s=Math.floor(times%60);
		
		span[0].innerHTML=Math.floor(h/10);
		span[1].innerHTML=h%10;
		span[3].innerHTML=Math.floor(m/10);
		span[4].innerHTML=m%10;
		span[6].innerHTML=Math.floor(s/10);
		span[7].innerHTML=s%10;
		
		if(times<0){
			clearInterval(time);
		}
		
	},1000)
	
};