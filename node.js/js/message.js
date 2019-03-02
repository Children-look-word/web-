var http=require('http');

var fs=require('fs');

var tem=require('art-template');

var comments = [
  {
    name: '张三',
    message: '我喜欢大海，也爱过你！',
    dateTime: '2018-11-16'
  },
  {
    name: '张三2',
    message: '我喜欢大海，也爱过你！',
    dateTime: '2018-11-16'
  },
  {
    name: '张三3',
    message: '我喜欢大海，也爱过你！',
    dateTime: '2018-11-16'
  },
  {
    name: '张三4',
    message: '我喜欢大海，也爱过你！',
    dateTime: '2018-11-16'
  },
  {
    name: '张三5',
    message: '我喜欢大海，也爱过你！',
    dateTime: '2018-11-16'
  }
];

var server=http.createServer();

server.on('request',function(req,res){
		var url=req.url;
		if(url==='/'){
			fs.readFile('../index.html',function(err,data){
				if(err){
					return res.end('404 Not Find')
				}
				var htmlStr = tem.render(data.toString(), {
        		comments: comments
        })
        res.end(htmlStr);
			});
		}else if(url.indexOf('/public/')===0){
			fs.readFile('..' + url,function(err,data){
				if(err){
					return res.end('404 Not Find')
				}
				res.end(data);
			});
		}
});

server.listen(3000,function(){
	console.log('启动成功');
});
