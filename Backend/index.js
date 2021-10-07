const express = require('express');
const { config } = require('./src/config/index');
const app = express();
var mongoose = require('mongoose');

// Midleware Body Parse
app.use(express.json());

// Cargar rutas
const usuarios = require('./src/routes/usersRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas bases
app.use('/api', usuarios);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/practica', { useNewUrlParser: true })
  .then(() => {
    console.log('Conexion exitosa!!');
    //Levantar servidor
    app.listen(config.localport, function () {
      console.log(`Listening http://localhost:${config.localport}`);
    });
  })
  .catch((err) => console.log(err));
