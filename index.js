const http= require('http')
const blogging= require('./blogging')
const server=http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write(JSON.stringify(blogging))
    response.end()


})
$host="127.0.0.1"
$port=5000
server.listen(5000,()=>{
    console.log(`server started at http://${$host}:${$port}`)
})
console.log(blogging)