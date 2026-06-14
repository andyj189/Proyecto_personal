function mostrarSeccion(id){

    const secciones = document.querySelectorAll('.contenido');

    secciones.forEach(seccion => {
        seccion.classList.remove('activo');
    });

    const elemento = document.getElementById(id);

    if(elemento){
        elemento.classList.add('activo');
    }else{
        console.error(`No existe una sección con id="${id}"`);
    }
}