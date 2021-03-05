const http = require('http')

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1>Te quiero cosa <3</h1>');
    res.end();
}

const server=http.createServer(handleServer);

server.listen(80, '192.168.1.37', function(){
    console.log('Servidor en el puerto 3000')
});