// AJAX(asyncronimous javascript and xml)

// lo que hace AJAX es. Cuando enviamos una peticion al servidor, en vez de simplemente respondernos con la data lo que hace es que. Envia la data. la data pasa por ajax,(esto se vuelve una peticion pararela) y nos devuelve la data sin necesidad de refrescar la pagina


/*
    // objeto XMLHttpRequest

    lo que hace es enviar una solicitud
    
    // metodo .open()
    este metodo nos sirve para abrir una peticion, como primer parametro le pasamos el tipo de enviado(get o post) y como segundo parametro le pasamos la url que queremos enviar

    // metodo .send()
    este metodo enviar la informacion de la variable al servidor

    // propiedadad responseText
    lo que hace esta propiedad es devolvernos el valor de un archivo que contenga texto

    // readyState
    esta esta una propiedad que podemos trabajar, con ella podremos verificar 4 estados que nos diran como va el proceso de carga del servidor

    .Estado 1: La solicitud se creo correctamente
    .Estado 2: la solicitud se envio correctamente
    .Estado 3: Se esta procesando esta peticion
    .Estado 4: Esta todo listo

    Cuando el estado este en 3 o en 4, ya nos esta devolviendo la data

    // evento "readystatechange"
    este evento nos permite trabajar con los estados del readyState, se utiliza en un EventListener

    // estados Http
    los 2 estados mas importates por ahora son; 
    El estado 200, que quiere decir que todo salio bien
    El estado 404; que quiere decir que no encontro el archivo con el que va a trabajr

    // Objeto ActiveXObject
    Este objeto es lo mismo que XMLHttpRequest solo que solo funciona en internet explorer

    Se recomienda utilizarlo siempre en una validacion

    // Enviar peticiones con el metodo POST
    .el post lo que hace es enviar data de forma oculta y cifrada lo que dificulta su uso

    para decifrar una data de tipo POST podemo utilizar el encabezado 
    .setRequestHeader("Content-type", "application/json;charset=UTF8");

*/


// EJEMPLO:


// Enviamos una solicitud al servidor
let request;

if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}


// comprobamos el estado del servidor
request.addEventListener("load", ()=>{
    // // Mostramos el estado del servidor en la consola
    // console.log(request.readyState);

    // // mostramos el contenido del archivo en la consola
    // console.log(request.response);
    // Podemos hacer validaciones
    if(request.readyState == 4 && request.status == 200 || request.status == 201){
        // recordemos que el servidor nos devueve la data serializada y hay que deserializarla
        
        // guardamos la propiedad en una variable
        prueba = request.response;

        // la deserializamos con "JSON.parse()"
        document.w(JSON.parse(prueba))
    }else{
        console.log("solo te mostrare la informacion en el estado 4 mi loco");
    }
});

// definimos la peticion que vamos a enviar
request.open("POST", "https://reqres.in/api/users");


// deciframos la data
request.setRequestHeader("Content-type", "application/json;charset=UTF8");

// enviamos la peticion al servidor
request.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));

