
var exs = require('express')
var app = exs()

var redis = require('redis')
var client = redis.createClient(6400)

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// отлавливаем ошибки и Сохраняем новость!
app.post('/savenews', jsonParser, (req, res, next) => {
  console.log('/savenews', req.body)
  client.hset('news111', req.body.id, JSON.stringify(req.body), function (err, repl) {
    if (err) {
      res.json({status: 'FAIL', error: err})
      console.log('Что то случилось при записи: ' + err)
      return
    }
    res.json({status: 'OK'})
  })
})

app.get('/', function (req, res) {
  res.render('Привет!')
})

// удаляем новость из основной группы
app.post('/delnews', jsonParser, (req, res, next) => {
  console.log('/delnewsss - ', req.body)
  client.hdel('news111', req.body.id, function (err) {
    if (err) {
      res.json({status: 'FAIL', error: err})
      console.log('Что то случилось при удалении: ' + err)
      return
    }
    res.json({status: 'OK:news are deleted'})
  })
})

var port = process.env.PORT || 6500
app.listen(port)
console.log(`start server on port ${port}`)

