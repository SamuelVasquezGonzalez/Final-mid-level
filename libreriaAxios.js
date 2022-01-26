// Libreria Axios

/*
    //  ¿Ques es la libreria axios? 
    
    Axios es un remplazo mas moderno que fetch, tambien este esta basado en promesas, la diferencia que es axios esta basado en XMLHttpRequest

*/

    // Ejemplo con fetch

fetch("informacion.txt")
    .then(res=>res.json())
    .then(res=>console.log(res));


    // Ejemplo con axios



    // Ventajas de axios; los headers ya vienen definidos, nos ahorra muchas lineas de codigo

    // para decirle si necesitamos metodo "GET" o "POST", simplemente colocamos un punto despues del "axios" y el metodo
    // ejemplo: axios.get o axios.post

    // para enviar informacion, creamos un 2do string separado por coma en los parametros con la informacion, o podemos crear un objeto
axios.post("https://reqres.in/api/users", {
    "nombre" : "Samuel",
    "apellido" : "Vasquez Gonzalez"
})
                        //  Data es una propiedad del objeto axios, donde esta claramente la data que le pedimos
    .then(res=>console.log(res.data));




