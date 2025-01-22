const express = require(`express`);

const app = express();

function holaMundo(request, response){
    console.log("Hola Mundo")// esto se ejecuta en el servidor
    response.send("Hola mundo") // esto se devuelve al cliente
}

app.get("/", holaMundo)

app.listen(3000,() => {
    console.log("el servidor esta funcionando en el puerto 3000")
})