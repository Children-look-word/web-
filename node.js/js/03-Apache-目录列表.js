var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/web.project'

server.on('request', function (req, res) {
  var url = req.url
  fs.readFile('./index.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found.')
    }
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end('Can not find www dir.')
      }

      // 2.1 生成需要替换的内容
      var content = ''
      files.forEach(function (item) {
        // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
        content += `
          <tr>
						<td data-value="案例/">
							<a class="icon dir" href="/D:/web.project/%E6%A1%88%E4%BE%8B/">${item}/</a>
						</td>
						<td class="detailsColumn" data-value="0"></td>
						<td class="detailsColumn" data-value="1541146192">2018/11/2 下午4:09:52</td>
					</tr>
        `
      })

      // 2.3 替换
      data = data.toString()
      data = data.replace('^_^', content)

      // 3. 发送解析替换过后的响应数据
      res.end(data)
    })
  })
})
server.listen(3000, function () {
  console.log('running...')
})
