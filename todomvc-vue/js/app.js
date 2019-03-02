(function(){
//	var todos=[
//		{
//			id:1,
//			title:'吃饭',
//			complete:false
//		},
//		{
//			id:2,
//			title:'看书',
//			complete:true
//		},
//		{
//			id:3,
//			title:'敲代码',
//			complete:false
//		}
//	]
	
	//创建自定义属性
	Vue.directive('focus', {
		  // 当被绑定的元素插入到 DOM 中时……
		  inserted: function (el) {
		    // 聚焦元素
		    el.focus()
		  }
	});
	
	//编辑文本获取焦点
	Vue.directive('dbtext', {
//		update(el,binding){
//			el.focus();
//		}
		update(el,binding){
			console.log(binding.value);  //curretedting==item
			if(binding.value){
				el.focus();
			}
		}
	});
	
	
	var vm=new Vue({
		el:'#app',
		data:{
			todos:JSON.parse(window.localStorage.getItem('todos')||'[]'),
			curretedting:'',
			filterText:''
		},
		
		computed:{  //computed 计算属性 
			
			//filter 返回符合条件的数组
			selectedNum:{
				get(){
					 return this.todos.filter( item=> item.complete).length;
				}
			},
			
			//联动  全部选上  自动选上
			toggAll:{
				get(){
					return this.todos.every(item => item.complete);
				},
				set(){
					console.log(this.toggAll);
					var checked=!this.toggAll;
					//遍历每一个数据的   设置为 选中或不选中状态
					this.todos.forEach(function(item){
						 item.complete=checked;
					})
				}
			},
			
			change(){
				switch (this.filterText){
					case 'active':
					return this.todos.filter(item => item.complete)
						break;
					case 'completed':
					return this.todos.filter(item => !item.complete)
						break;
					default:
					return this.todos
						break;
				}
			}
		},
		//监视数据的改变
		watch:{
			//深度 watcher
			todos:{
				handler(){
					window.localStorage.setItem('todos',JSON.stringify(this.todos));
				},
				deep:true
			}
		},
		
		methods:{
			getTxte(e){
				var target=e.target;
				var value=target.value.trim();
				if(!value){
					return
				}
				
				var todos=this.todos;
				todos.push({
					id: todos.length? todos[todos.length-1].id+1 : 1,
					title:value,
					complete:false
				});
				
				target.value='';
			},
			removeText(index){
				this.todos.splice(index,1)
			},
			handeTitle(e){
				var checked=e.target.checked;
				
				//遍历每一个数据的   设置为 选中或不选中状态
				this.todos.forEach(function(item){
					 item.complete=checked;
				})
			},
			handleditdata(todo){
				//把这个变量等于当前 双击 的 todo
				this.curretedting=todo;
			},
			handlesaveedit(e,todo,index){
				//获取编辑的数据
				//trim() 将字符的 首尾空格去除
				//todo 为当前编辑的 数组
				var target=e.target;
				var value=target.value.trim();
				
				//如果值为空 就直接删除
				if(!value.length){
					this.todos.splice(index,1);
				}else{
					todo.title=value;
					this.curretedting='';
				}
				
			},
			
			handleesc(){
				this.curretedting='';
			},
			handleClear(){
				for(var i=0;i<this.todos.length;i++){
					if(this.todos[i].complete){
						this.todos.splice(i,1);
						i--;
					}
				}
			}
		}
	})
	
	
	
	//页面初始化调用一次 保持路径一致
	handlechange();
	
	
	//页面初始化不会执行
	//路径改变事才会执行  注册hash的改变事件
	window.onhashchange=handlechange;
	
	 function handlechange(){
		vm.filterText=window.location.hash.substr(2);
	}
})()
