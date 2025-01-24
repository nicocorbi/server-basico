const express = require('express');
const app = express();

const colores = ["azul", "blanco", "negro", "rosa", "verde", "gris", "naranja", "morado"];
const futbolistas = ["messi", "cristiano", "butragueño", "iniesta", "xavi", "pique", "neymar", "hazard"];

function randomFromArray(arr) {
    const num = Math.random() * arr.length;
    const numInt = Math.floor(num);
    return arr[numInt];
}

function generarNumerosAleatorios(cantidad, minimo, maximo) {
    let numeros = "";
    for (let i = 0; i < cantidad; i++) {
        const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        numeros += numero;
    }
    return numeros;
}

const users = [];
for (let i = 0; i < 10; i++) {
    // Generar el username
    const colorAleatorio = randomFromArray(colores);
    const futbolistaAleatorio = randomFromArray(futbolistas);
    const numerosAleatorios = generarNumerosAleatorios(4, 0, 9);
    const username = `${colorAleatorio}${futbolistaAleatorio}${numerosAleatorios}`;

    // Generar el password 
    let password;
    do {
        const otroColor = randomFromArray(colores);
        const otroFutbolista = randomFromArray(futbolistas);
        const otrosNumeros = generarNumerosAleatorios(4, 0, 9);
        password = `${otroColor}${otroFutbolista}${otrosNumeros}`;
    } while (password === username); 

    users.push({
        username: username,
        password: password,
        email: `${username}@gmail.com`,
        status: "active"
    });
}

//app.get("/", (req, res) => {
    //res.send("Hola mundo");
//});
app.use(express.static("public"))

app.get("/users", (req, res) => {
    res.json(users);
});
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    res.json(users[id]);
});

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
});
