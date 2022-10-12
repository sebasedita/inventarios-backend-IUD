require ("dotenv").config();
const express = require("express");
const dbConnect = require('./db/db-connection-mongo.js');
const cors = require("cors")

const app = express ();
const port = process.env.PORT || 4001



//Implementado Cors
app.use (cors())

//middlewares
app.use(express.urlencoded({extended: false}));

// Parseo JSON
app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estado-equipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-equipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect();

