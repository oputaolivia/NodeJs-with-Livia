const http = require('http');

server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('HTTP Modules')
})

server.listen(3000, ()=>{
    console.log('Server Running')
});