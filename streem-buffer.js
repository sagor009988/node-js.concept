// http server documentation
const fs=require('node:fs')
const http=require("node:http");
// create a local server
const server=http.createServer();

// listener
server.on('request',(req,res)=>{
   if(req.url==='/read-file'&& req.method==='GET');
    //streaming file read
    const readAbleStreem=fs.createReadStream(process.cwd()+'/texts/read.txt');
    readAbleStreem.on('data',(buffer)=>{
        res.write(buffer);

    })
    readAbleStreem.on('end',()=>{
        res.end('hello world')
    })
    
})
// run from server
server.listen(5000,()=>{
    console.log('the server is running on port no 5000');
})