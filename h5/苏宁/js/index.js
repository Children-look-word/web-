$(function(){
	
	//获取轮播图
	 var banner=$(".sn_banner");
	 //获取图片的宽度
	 var width=banner.width();
//	 console.log(width);

	//获取图片
	var imgbox=banner.find("ul:first");
	//获取点
	var spot=banner.find("ul:last");
	var allSpot=spot.find("li");
	
	var funanimation=function(){
		imgbox.animate({transform:'translateX('+(-index*width)+'px)'},200,function(){
			//无缝连接
			if(index>=9){
				index=1;
				imgbox.css({transform:'translateX('+(-index*width)+'px)'});
			}else if(index<=0){
				index=8;
				imgbox.css({transform:'translateX('+(-index*width)+'px)'});
			}
			allSpot.removeClass("active").eq(index-1).addClass("active")
		})
	};
	
	var index=1;
	var time=setInterval(function(){
		index++;
		funanimation();
	},1000);
	
	banner.on("swipeLeft",function(){
		index++;
		funanimation();
	})
	banner.on("swipeRight",function(){
		index--;
		funanimation();
	})
	
	
});
