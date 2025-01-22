# Express basico

Para iniciar mi proyecto de node + npm:

```bash
npm init -y
```

Esto me creara un `package.json`con los datos de mi proyecto.Este archivo sirve para varias cosas pero principalmente encontraremos la dependencias del proyecto.

para descargarnos dependencias de `nodejs`y `npm`usaremos

```bash
npm install express
npm i express #version corta

```

es buena practica y recomendado meter `node_modules` en nuestro `. gitignore`para evitar subir todas las dependencias.

Para arrancar el servidor lanzo `node server.js`

## Endpoint basico:

este endpoint me devuelve un "hola mundo" tanto en el servidor como en el cliente 
```javascript
function holaMundo(request, response){
    console.log("Hola Mundo")// esto se ejecuta en el servidor
    response.send("Hola mundo") // esto se devuelve al cliente
}

app.get("/", holaMundo)
```
