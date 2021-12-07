const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/aru', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'fuvarvadaszok'
    })
    
    connection.connect()
    
    connection.query('SELECT * from aru', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })


  app.post('/szavazatfelvitel', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'marveladatb'
    })
    
    connection.connect()
    
    connection.query('insert into szavazat values (null, '+req.body.bevitel1+' )', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()


  
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})