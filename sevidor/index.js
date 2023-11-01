const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.listen(3004, () => {
    console.log("Funcionando en el puerto 3004")
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'panaderia'
})

app.get('/', (req, res) => {
    db.query('SELECT * FROM encuesta',
    (err,result) => {
        if (err) {console.log(err)}
        else {
                res.send(result)
                console.log('ejecutando', result)
            }
    }
    )
})
app.post('/crear', (req, res) => {
    console.log('Solicitud recibida en /crear', req.body);
    const Experiencia = req.body.Experiencia;
    const Compartir_info = req.body.Compartir_info;
    const Calificacion = req.body.Calificacion;
    const Colaboradores = req.body.Colaboradores;
    const Recomendacion_cola = req.body.Recomendacion_cola;
    const Queja_reclamo = req.body.Queja_reclamo;

    db.query('INSERT INTO encuesta (Experiencia, Compartir_info, Calificacion, Colaboradores, Recomendacion_cola, Queja_reclamo) VALUES (?, ?, ?, ?, ?, ?)',
        [Experiencia, Compartir_info, Calificacion, Colaboradores, Recomendacion_cola, Queja_reclamo], 
        (err, result) => {
            if (err) {
                console.error(err);
                res.send('Error al insertar en la base de datos');
            } else {
                console.log('Registro insertado:', result);
                res.send('Registro insertado correctamente');
                res.redirect('/');
            }
        }
    );
});

app.get('/factura', (req, res) => {
    db.query('SELECT * FROM factura',
    (err,result) => {
        if (err) {console.log(err)}
        else {
                res.send(result)
                console.log('ejecutando', result)
            }
    }
    )
})

app.post('/create', (req, res) => {
    console.log('Solicitud recibida en /create', req.body);
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const especificacion = req.body.especificacion;
    const total = req.body.total;

    db.query('INSERT INTO factura (nombre,direccion,especificacion,total) VALUES (?, ?, ?, ?)',
        [nombre,direccion,especificacion,total], 
        (err, result) => {
            if (err) {
                console.error(err);
                res.send('Error en la toma de su pedido por favor vuelva a intentar');
            } else {
                console.log('Compra insertado:', result);
                res.send('Compra correctamente');
                res.redirect('/factura');
            }
        }
    );
});