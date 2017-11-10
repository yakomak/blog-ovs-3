
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

// отлавливаем ошибки
app.post('/savenews', jsonParser, (req, res, next) => {
  // console.log('/savenews', req.body)
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

// app.all('/newsroot', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   next()
// })

// var jsonParser = bodyParser.json()
// app.post('/newnews', jsonParser, (req, res, next) => {
//   jsonParser.stringify(res)
//   client.hset('key-res', field, value)
//   if (!req.body) return res.sendStatus(400)
//   res.json('res-string')
// })

app.get('/newnews', (req, res, next) => {
  // console.log('/newnews')
  // res.json([1{
  //   id: 1,
  //   title: 'andrew',
  //   content: '“Не нужно нам идти против того, что нас искушает. Об этом говорит и Евангелие: «Не противься злу». В это время сотворите молитву, и дело изменится, но без вашего возмущения.”'
  // }, {
  //   id: 2,
  //   title: 'andrew2',
  //   content: 'Не нужно нам идти против... (без вашего возмущения).'
  // }, {
  //   id: 370,
  //   title: 'andrew3',
  //   content: 'Будте как дети...'
  // }])
  client.hvals('news111', (err, items) => {
    // console.log(err)
    items = items || []
    if (err) {
      res.json({status: 'FAIL', error: err})
      console.log('Ошибка при выводе новостей из базы: ' + err)
      return
    }
    items = items.map((item) => { return JSON.parse(item) })
    // console.log(items)
    res.json(items)
  })
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

