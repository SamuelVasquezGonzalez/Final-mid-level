// SOLUCIONAR PROBLEMA; COLFA 6

/*
    Problema A:

    . Crear un sistema que le permita saber al profesor quien cursa el semestre y quien no(con una api);
    . Mostrar la informacion en una pagina
    .
*/
const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try{
        resultado = await axios("informacion.txt");
        aprobados.innerHTML = resultado.data.aprobado;
        desaprobados.innerHTML = resultado.data.desaprobados;
    }catch(e){
        aprobados.innerHTML = "La api fallo";
        desaprobados.innerHTML = "La api fallo";
    }
}

document.querySelector(".getInfo").addEventListener("click", getInfo);