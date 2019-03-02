

//获取元素的id 返回的是个对象
function myF(id)
{
  return document.getElementById(id);
}



//一个元素的任意一个样式的属性值
			function getstyle(element, attr) {
				//判断浏览器是否支持这个方法
				return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr]
			}
			
			
			// 页面卷出去的距离
			function getscroll(){
				return{
					//向左卷出去的距离
					left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,
					//向上卷出去的距离
					top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop
				}
			}

//变速动画移动函数
			function aimate(element,target){
				clearInterval(element.etr);
				element.etr=setInterval(function(){
					//获取当前元素的位置
					var current=element.offsetLeft;
					var step=(target-current)/10;
					//判断是大于零 就往前取整数 小于零往后取整数
					step=step>0?Math.ceil(step):Math.floor(step);
					current+=step;
					
					//移动的距离
					element.style.left=current+"px";
					//判断当前位置是否达到目标位置
					if(current==target){
						//清除动画
						clearInterval(element.etr);
					}
					//检测代码
					console.log("目标位置:"+target+",当前位置："+current+",移动啦多少步："+step);
				},20)
			}
			
			//匀速动画移动函数
			function anmate(element,target){
				clearInterval(element.etr);
				element.etr=setInterval(function(){
					//获取当前元素的位置
					var current=element.offsetLeft;
					var step=10;
					//判断是前进还是后退
					step=current<target?step:-step;
					current+=step;
					//判断当前位置是否达到目标位置
					if(Math.abs(target-current)>Math.abs(step)){
						//元素每次移动距离
						element.style.left=current+"px";
					}else{
						clearInterval(element.etr);
						//最终元素到目标位置
						element.style.left=target+"px";
					}
				},20)
			}
			

       //动画移动函数
			//attr----属性
			//ttob----对象
			//调用函数---fn
			//多种属性的动画调用函数
			function animate(element, ttob,fn) {
				clearInterval(element.etr);

				element.etr = setInterval(function() {
					//假设全部到达目标
					var flag = true;
					//遍历对象
					for(var attr in ttob) {
						//判断属性是否是透明度
						if(attr == "opacity") {
							//获取元素的透明度 放大一百倍
							var current=getstyle(element,attr)*100;
							//目标透明度放大一百倍
							var target=ttob[attr]*100;
							var step=(target-current)/10;
							step=step>0?Math.ceil(step):Math.floor(step);
							current+=step;
							element.style[attr] = current/100;
						} else if(attr=="zIndex") { //判断属性是否是层级
							element.style[attr]=ttob[attr];
						} else {
							//普通属性
							//获取当前元素的属性
							var current = parseInt(getstyle(element, attr));
							//当前属性的目标值
							var target = ttob[attr];
							var step = (target - current) / 10;
							//判断是大于零 就往前取整数 小于零往后取整数
							step = step > 0 ? Math.ceil(step) : Math.floor(step);
							current += step;
							//移动的距离
							element.style[attr] = current + "px";
						}
						//是否达到目标值
						if(target != current) {
						   flag = false;
						}
					}
					//判断当前位置是否达到目标位置
					if(flag) {
						//清除动画
						clearInterval(element.etr);
						//所以属性达到目标才可以使用这个函数，前提用户传入这个函数
						if(fn){
						   fn();
						}
					}
					//检测代码
					console.log("目标位置:" + target + ",当前位置：" + current + ",移动啦多少步：" + step);
				}, 20)
			}