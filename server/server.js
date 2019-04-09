require('./config/config'); // Al ser esto el 1er archivo en leer, se ejecutarán primero sus instrucciones

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('Get usuario')
});

app.post('/usuario', function (req, res) {
  const body = req.body;
  if (body.nombre === undefined) // Enviando Cód de error
    res.status(400).json({
      ok: false,
      msg: 'El nombre es necesario'
    });
  else
    res.json({ person: body })
});

app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({ id })
});

app.delete('/usuario', function (req, res) {
  res.json('Delete usuario')
});

app.listen(process.env.PORT, () => console.log('Listening port: ', process.env.PORT))
