const express = require('express');
const app = express();

const colores = ["azul", "blanco", "negro", "rosa", "verde", "gris", "naranja", "morado"];
const futbolistas = ["messi", "cristiano", "butragueño", "iniesta", "xavi", "pique", "neymar", "hazard"];
const lista = ["a", "b", "c"];

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

const elemento = randomFromArray(lista);
console.log(elemento);

console.log(randomFromArray(["active", "inactive"]));

const users = [];
for (let i = 0; i < 500; i++) {
    const colorAleatorio = randomFromArray(colores);
    const futbolistaAleatorio = randomFromArray(futbolistas);
    const numerosAleatorios = generarNumerosAleatorios(4, 0, 9);
    const username = `${colorAleatorio}${futbolistaAleatorio}${numerosAleatorios}`;

    users.push({
        username: username,
        password: `password${i + 1}`,
        email: `${username}@gmail.com`,
        status: "active"
    });
}

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
});

