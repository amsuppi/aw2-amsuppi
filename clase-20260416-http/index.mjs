import http from "node:http";

// Creamos un servidor web simple.
const server = http.createServer((req, res) => {
  // Enviamos una respuesta de texto al navegador.
  //   res.end("Hola mundo");

  if(req.method === "GET") {
  if(req.url === "/") {
    res.statusCode = 200;
   return res.end("estas en la ruta raiz");
  } 
  if(req.url === "/usuarios") {
    res.statusCode = 200;
   return res.end("estas en la ruta usuarios");
  } 
} 
//   else if(req.url === "/about") {
//     return res.end("estas en la ruta about");
//   } else {
//     return res.end("estas en una ruta no definida");
//   }
    res.statusCode = 404;
  return res.end("estas en una ruta no definida");


//   console.log(req.ur, req.method);
//   res.end("Estamos en la ruta: " + req.url + " y el metodo es: " + req.method);
});

// Ponemos el servidor a escuchar en el puerto 3000.
server.listen(3000, () => {
  // Mensaje para confirmar que el servidor esta funcionando.
  console.log("Servidor corriendo en http://localhost:3000");
});