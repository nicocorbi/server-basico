console.log("Hola mundo");
const nombre = "juan";

fetch('https://dummyjson.com/recipes/1')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        // Título de la receta
        const nombre = data.name;
        console.log(data.name);
        const h1 = document.createElement("h1");
        h1.innerText = nombre;
        document.body.appendChild(h1); // introducir en el HTML

        // Dificultad
        const difficulty = data.difficulty;
        const dificultadElemento = document.createElement("p");
        dificultadElemento.innerText = `Dificultad: ${difficulty}`;
        document.body.appendChild(dificultadElemento);

        // Ingredientes
        const ingredients = data.ingredients;
        const ingredientesElemento = document.createElement("ul"); // lista desordenada
        document.body.appendChild(ingredientesElemento);
        for (let i = 0; i < ingredients.length; i++) {
            const item = document.createElement("li");
            item.innerText = ingredients[i];
            ingredientesElemento.appendChild(item);
        }

        // Pasos
        const instructions = data.instructions;
        const instruccionesElemento = document.createElement("ol"); // lista ordenada
        document.body.appendChild(instruccionesElemento);
        for (let i = 0; i < instructions.length; i++) {
            const item = document.createElement("li");
            item.innerText = instructions[i];
            instruccionesElemento.appendChild(item);
        }

        // Imagen
        const imagenElemento = document.createElement("img");
        imagenElemento.src = data.image;
        imagenElemento.alt = `Imagen de la receta ${nombre}`;
       
        document.body.appendChild(imagenElemento);

        // Tiempo de preparación
        const preparacion = data.prepTimeMinutes;
        const preparacionElemento = document.createElement("p");
        preparacionElemento.innerText = `Tiempo de preparación: ${preparacion} minutos`;
        document.body.appendChild(preparacionElemento);

        // Tiempo de cocinado
        const tiempoCocinado = data.cookTimeMinutes;
        const tiempoCocinadoElemento = document.createElement("p");
        tiempoCocinadoElemento.innerText = `Tiempo de cocción: ${tiempoCocinado} minutos`;
        document.body.appendChild(tiempoCocinadoElemento);
    });
