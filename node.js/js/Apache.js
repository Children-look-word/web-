var http = require('http');

var fs = require('fs');

var server = http.createServer();

//将目录定义为一个变量
var dirwww = 'D:/web.project';

server.on('request', function(req, res) {
	var url = req.url;

	fs.readFile('../index.html', function(err, data) {
		if(err) {
			return res.end('404 Not Find');
		}
		//读取文件目录
		// resddir 第一的参数 是路径    第二个参数是函数
		fs.readdir(dirwww, function(err, files) {
			if(err) {
				//return 阻止 程序 继续执行
				return res.end('can not find dir');
			}
			//定义一个空数组 放 目录
			var coant = '';
			files.forEach(function(item) {
				//在  EcmaScript 6 中 用 ${} 应用变量
				coant += `
					<tr>
						<td data-value="案例/">
							<a class="icon dir" href="/D:/web.project/%E6%A1%88%E4%BE%8B/">${item}/</a>
						</td>
						<td class="detailsColumn" data-value="0"></td>
						<td class="detailsColumn" data-value="1541146192">2018/11/2 下午4:09:52</td>
					</tr>
				`
			});
			//替换数据
			data = data.toString();
			data = data.replace('^_^', coant);
			//显示数据
			res.end(data);
		});
	});
});

server.listen(3000, function() {
	console.log('开始啦')
});