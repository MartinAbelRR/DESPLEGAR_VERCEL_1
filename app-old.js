const http = require('http');

// req: request es la petición que el cliente hace al servidor.
// res: response es la respuesta que el servidor envía al cliente.
http.createServer((req, res) => {
    // res.write('Hola Mundo'); // Significa que el servidor responderá con un mensaje de Hola Mundo.

    console.log(req);
    // // res.writeHead(201, {'Content-Type': 'application/json'}); // Recurso no encontrado.
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Juan\n');
    // res.write('2, Pedro\n');
    // res.write('3, Maria\n');
    res.write('Hola Mundo');

    res.end(); // Significa que la respuesta ha terminado.
})
.listen(8080); // Puerto en el que el servidor estará escuchando las peticiones.
console.log('Escuchando en el puerto', 8080);
