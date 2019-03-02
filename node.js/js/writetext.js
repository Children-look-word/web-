var a=require("fs");

//第一个参数 ：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
 
//    data 成功 是数据       error是null
//    data 失败是 undefined    eroor 失败是 错误对象 "给大家介绍一下 我是齐天大圣 的粉丝",

//   文件读取命令
a.readFile("../date/hello.txt",function(error,data){
		console.log(data.toString());
});


a.writeFile("../date/你好.md","给大家介绍一下 我是齐天大圣 的粉丝",function(error){
	if(error){
		console.log("文件写入失败");
	}else{
		console.log("文件写入成功");
	}
})
