// Fetch

/*
    // ¿Que es fetch?
   
    .Fetch es una forma de trabajar con el objeto XMLHttpRequest, ActiveXObject o se puede decir que es el remplazo de estos dos, es algo mas moderno

    Fetch esta basado en promesas, siempre que trabajemos con fetch, este nos devolvera siempre una promesa encapsulada porque no podemos acceder a los datos, en este caso lo que estaria encapsulado seria la data que nos devuelve el servidor
    
    
    Para realizar una Solicitud al servidor utilizamos fetch("aqui va la url que queremos trabajar");
    fetch tiene por defecto la peticion "GET" si la queremos cambiar hay que definirla en otro lugar

    para desencapsular la data utilizamos estos metodos;
   
    // json()
    sirve para desencapsular una promesa y volvera un json(seria como un JSON.parse);

    //text()
    sirve para desencapsular una promesa y volverla un texto(seria como JSON.stringify)

    // Hacer una peticiion POST con fetch
    como segundo parametro creamos un objeto, dentro de este definimos el metodo(GET O POST), tambien definimos el body(que es lo que vamos a enviar al servidor Y por ultimo definimos los headers que es lo que va a decifrar la data)
*/

fetch("https://reqres.in/api/users", {
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Samuel",
        "apellido" : "Vasquez Gonzalez"
    }),
    headers : {"content-type" : "application/json"}
})
    // le decimos que desencapsule la data
    .then(res=>res.json())

    // Le decimos que deserialice la data y la muestre en consola
    .then(res=>console.log(res));


/*
    // blob()
    el blob decifra tipos de datos binarios

*/
    const imagen = document.querySelector(".img");

fetch("descarga.png")
    .then(res=>res.blob())
    // el "URL.createObjectURL(img)" lo que hace es crearnos una url aleatoria para almacenar esa imagen
    .then(img=>imagen.src = URL.createObjectURL(img));

