//导入 http 内置模块
const http= require('http');
// 解释URL地址 从而获取 pathname query
const urlModule = require('url')

//创建一个 http 服务器
const server= http.createServer();

//监听 http 服务器的 request 请求
server.on('request', function(req, res){
    //const url=req.url;
    const { pathname:url, query } = urlModule.parse(req.url, true);

    let data={
        name:'xjj',
        age:18,
        gender:'girl'
    };


    if(url == '/getscript'){
        //let scriptstr ='show()';
        var scriptstr= `${query.callback}(${JSON.stringify(data)})`;
        //res 发送字符串给客户端，客户端把字符串解释为js执行
        res.end(scriptstr)
    } else {
        res.end('404')
    }
});

// 指定端口号并启动服务器监听
server.listen(3000, function(){
    console.log('server listen at http://127.0.0.1:3000');
});