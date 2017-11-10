var http = require('http')
var statics = require('node-static')
var file = new statics.Server('.')

http.createServer(function (req, res) {
  file.serve(req, res)
}).listen(8888)

console.log('Server running on port 8888')
