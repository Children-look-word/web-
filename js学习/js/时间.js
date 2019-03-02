
			/**
			 * 获取指定的时间格式
			 * @param {Object} dt    时间对象
			 * @return {String}       返回的的是字符串的时间日期
			 */
			function getDate(dt){
				var year=dt.getFullYear();
				var month=dt.getMonth()+1;
				var day=dt.getDate();
				var hour=dt.getHours();
				var minute=dt.getMinutes();
				var second=dt.getSeconds();
				month=month<10?"0"+month:month;
				day=day<10?"0"+day:day;
				hour=hour<10?"0"+hour:hour;
				minute=minute<10?"0"+minute:minute;
				second=second<10?"0"+second:second;
				return year+"年"+month+"月"+day+"日  "+hour+":"+minute+":"+second;
			}