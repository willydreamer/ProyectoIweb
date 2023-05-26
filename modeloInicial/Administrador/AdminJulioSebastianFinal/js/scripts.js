/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById('botonEditar').addEventListener('click', function() {
    var cuadroDeTexto = document.getElementById('precio1');
    if (cuadroDeTexto.disabled) {
      cuadroDeTexto.disabled = false;
      cuadroDeTexto.focus();
      this.innerHTML = 'Guardar';
    } else {
      cuadroDeTexto.disabled = true;
      this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio2');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio3');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio4');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio5');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio6');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio7');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    var descripcionJuego = document.getElementById('precio8');
    if ( descripcionJuego.disabled) {
        descripcionJuego.disabled = false;
        descripcionJuego.focus();
        this.innerHTML = 'Guardar';
    }else {
        descripcionJuego.disabled = true;
        this.innerHTML = 'Editar';
    }
    
});

var dropzone = document.getElementById('dropzone');

    // Prevenir el comportamiento por defecto del evento de arrastrar y soltar
    dropzone.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    // Manejar el evento de soltar
    dropzone.addEventListener('drop', function(e) {
      e.preventDefault();

      // Obtener la imagen del evento de soltar
      var archivo = e.dataTransfer.files[0];
      var limiteTamno=1024*1024;

      // Crear un elemento de imagen y establecer su atributo de origen con la ruta del archivo
      var imagen = new Image();
      imagen.src = URL.createObjectURL(archivo);

      if(archivo.size > limiteTamno){
        alert('El archivo seleccionado excede el límite de tamaño permitido.')
      }

      // Añadir la imagen al DOM dentro del elemento de dropzone
      dropzone.appendChild(imagen);
    });


function actualizarImagen() {
        var imagen = document.getElementById("imagenActualizada");
        imagen.src = "img/donkey_kong_country_tropical_freeze.png";
        imagen.alt = "Imagen actualizada";
}

var contenedorImagen = document.getElementById('contenedorImagen');
var seleccionadorImagen = document.getElementById('seleccionadorImagen');

// Escuchar los eventos "dragover" y "drop" en el contenedor de la imagen
contenedorImagen.addEventListener('dragover', function(e) {
  e.preventDefault(); // Evitar que el navegador maneje el evento por defecto
});

contenedorImagen.addEventListener('drop', function(e) {
  e.preventDefault(); // Evitar que el navegador maneje el evento por defecto

  // Obtener el archivo de imagen arrastrado y soltado
  var archivo = e.dataTransfer.files[0];

  // Crear un objeto URL para la imagen seleccionada
  var urlImagen = URL.createObjectURL(archivo);

  // Actualizar la imagen en el contenedor
  contenedorImagen.innerHTML = '<img src="' + urlImagen + '" alt="Imagen actualizada">';
});

// Escuchar el evento "change" en el elemento de selección de imagen
seleccionadorImagen.addEventListener('change', function(e) {
  // Obtener el archivo de imagen seleccionado
  var archivo = e.target.files[0];

  // Crear un objeto URL para la imagen seleccionada
  var urlImagen = URL.createObjectURL(archivo);

  // Actualizar la imagen en el contenedor
  contenedorImagen.innerHTML = '<img src="' + urlImagen + '" alt="Imagen actualizada">';
});
function cambiarImagen() {
    var imagen = document.getElementById("miImagen");
    imagen.src = "img/donke";
}
