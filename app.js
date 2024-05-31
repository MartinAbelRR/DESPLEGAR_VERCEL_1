const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();

const port = process.env.PORT;

app.set('view engine', 'hbs'); // Para usar el handlebar para express.
hbs.registerPartials(__dirname + '/views/partials'); // Para usar parciales.

// Para servir contenido estático.
app.use(express.static('public')); // Definición de midelware express. Si public esta en otro sitio especificar path.

app.get('/',  (req, res) => {
    res.render('home', {
        // Estos son los argumentos.
        nombre: 'Martin Reyes',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta');
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Martin Reyes',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Martin Reyes',
        titulo: 'Curso de Node'
    })
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`);
});