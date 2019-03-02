//导入http内置模板
var http=require("http");

//创建一个http服务器
var server=http.createServer();

//监听http服务器的request请求
//  请求事件处理函数  ，需要接受两个参数
//    请求对象  request   请求对象可以获取客户端的请求信息 比如路径
//    响应对象  response  响应对象 可以用来给客户端发送响应信息
server.on("request",function(req,res){
//	console.log("收到客户端的请求啦····· 路径是："+req.url);
	
	//response 有一个write 方法  可以用来给客户端发送响应数据
	//write 可以使用多次  但是最后一定要使用end 来结束响应  否则客户端会一直等待
	// 在http协议中   Content-Type 告诉对方 我给你发送的数据是什么类型
	res.setHeader("Content-Type","text/plain;charset=utf-8");
	
	var url=req.url;
	if(url==="/index"){
		res.end("我爱你");
	}else if(url==="/html"){
		res.end("hello");
	}else{
		res.end("404 Not Found");
	}
//	res.write("hello");
	//如果数据是文字就是乱码
//	res.write(); 
//	res.write("我喜欢你");
	
	
	
});

//指定端口号并启动服务器监听
server.listen(3000,function(){
	console.log("服务器启动成功啦 可以通过：http://127.0.0.1:3000");
});