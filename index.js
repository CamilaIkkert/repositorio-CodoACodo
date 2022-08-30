/* APARECE POP-UP CON EL EVENTO ON CLICK, LUEGO DE ALGUNA SELECCION O DE PRESIONAR EN LA "X" EL POP UP DESAPARECE CON EL FADE OUT */
$(document).ready(function(){
    console.log(`Página cargada con éxito`);
    $('.open').on('click', function(){
        $('#popup').fadeIn('slow');
    });
    
    $('.popup-close').on('click', function(){
        $('#popup').fadeOut('slow');
    });
});

/* CREAMOS VARIABLES PARA LOS TURNOS Y ELECCION DE EQUIPO */
const teamElegido = document.querySelector('#teamElegido');
const turnoDe = document.querySelector('#turnoDe');

function dataGame(){
    
}

/* FUNCION PARA EL MOSTRAR EL EQUIPO SELECCIONADO Y QUITAR EL POP UP */ 

const equipoRojo = document.getElementById("equipo__mensaje-exito-rojo"); 
function teamRojo(){
    document.getElementById('equipo__mensaje-exito-rojo').classList.add('equipo__mensaje-exito-rojo-activo');
    document.getElementById('teamElegido').classList.add('teamElegido-activo');
    teamElegido.textContent = 'Rojo'
    setTimeout(() => {
        document.getElementById('equipo__mensaje-exito-rojo').classList.remove('equipo__mensaje-exito-rojo-activo');
            $('#popup').fadeOut('slow');
            $('.open').fadeOut('slow');
    }, 3000);
}

const equipoVerde = document.getElementById("equipo__mensaje-exito-verde"); 
function teamVerde(){
    document.getElementById('equipo__mensaje-exito-verde').classList.add('equipo__mensaje-exito-verde-activo');
    document.getElementById('teamElegido').classList.add('teamElegido-activo');
    teamElegido.innerHTML = 'Verde'
    setTimeout(() => {
        document.getElementById('equipo__mensaje-exito-verde').classList.remove('equipo__mensaje-exito-verde-activo');
        $('#popup').fadeOut('slow');
        $('.open').fadeOut('slow');
    }, 3000);
}



/* GUARDAREMOS EN CADA VARIABLE LAS POSICIONES DE LAS CELDAS */
var celda0, celda1, celda2, celda3, celda4, celda5, celda6, celda7, celda8, celda9;
celda0 = document.getElementById("celda-0").value;
celda1 = document.getElementById("celda-1").value;
celda2 = document.getElementById("celda-2").value;
celda3 = document.getElementById("celda-3").value;
celda4 = document.getElementById("celda-4").value;
celda5 = document.getElementById("celda-5").value;
celda6 = document.getElementById("celda-6").value;
celda7 = document.getElementById("celda-7").value;
celda8 = document.getElementById("celda-8").value;


