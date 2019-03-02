

var http =require('http');

var server=http.createServer();

server.on('request',function(){
	console.log('发送请求')
});

server.listen(3000,function(){
	console.log('创建成功');
})
