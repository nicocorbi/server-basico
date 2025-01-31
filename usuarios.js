const express = require('express');
const app = express();

// Función para generar un nombre de usuario aleatorio
function generarnombreusuario() {
    const nombres = ["nico", "paula", "alvaro", "leo", "marcos", "laia"];
    const randomIndex = Math.floor(Math.random() * nombres.length);
    return nombres[randomIndex];
  }
  
  // Función para generar una contraseña usando el nombre de usuario
  function generarContraseña(nombre) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return `${nombre}${numeroAleatorio}`; 
  }
  
  // Función para generar una edad aleatoria
  function generarEdad(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
  
  // Función para generar el estado del usuario ("activo" o "inactivo")
  function generarStatus() {
    return Math.random() > 0.5 ? "activo" : "inactivo";  
  }
  
  // Función para generar usuarios aleatorios
  function generarUsuariosAleatorios(maxUsuarios) {
    const usuarios = [];
    const numeroUsuarios = Math.floor(Math.random() * maxUsuarios) + 1;  
  
    for (let i = 0; i < numeroUsuarios; i++) {
      const nombre = generarnombreusuario();
      const email = `${nombre}@gmail.com`; 
      const contraseña = generarContraseña(nombre); 
      const edad = generarEdad(18, 60);  
      const status = generarStatus();  
  
      usuarios.push({ name: nombre, email: email, password: contraseña, age: edad, status: status });
    }
  
    return usuarios;
  }
  
  // Función para crear la tabla con los usuarios
  function crearTabla(users) {
    const table = document.createElement("table");
    
    // Encabezado de la tabla
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    
    const claves = Object.keys(users[0]);
    for (let i = 0; i < claves.length; i++) {
      const td = document.createElement("td");
      td.innerText = claves[i];
      tr.appendChild(td);
    }
  
    // Cuerpo de la tabla
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    
    for (let i = 0; i < users.length; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < claves.length; j++) {
        const td = document.createElement("td");
        const clave = claves[j];
        td.innerText = users[i][clave];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  
    return table;
  }
  
  // Función para inyectar la tabla al DOM
  function inyectarTabla(maxUsuarios) {
    const users = generarUsuariosAleatorios(maxUsuarios);
    const table = crearTabla(users);
    document.body.appendChild(table);
  }
  
  // Llamar a la función para generar la tabla con 20 usuarios
  inyectarTabla(20);
app.use(express.static("public"))

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    res.json(usuarios[id]);
});

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
});

  