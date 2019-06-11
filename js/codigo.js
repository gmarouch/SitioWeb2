// Resaltar menu activo con un mismo color
 $(function() {
    $("#botones > li").click(function() {
    //Busca todos los elementos del nav que tengan la clase active y los elimina
  $(this).closest('#botones').find('li').removeClass('activo');
  //Al elemento seleccionado agrega la clase active
          $(this).addClass('activo');
      });
});

// Funcion para desplazar menu
$(document).ready(function(){
        var menu = $('#menuPrincipal')
        var contenedor = $('#botones')
        var cont_offset = contenedor.offset()

    $(window).scroll(function(){
        if($(window).scrollTop() > cont_offset.top){
            menu.addClass('fijarMenu')
        }else{
            menu.removeClass('fijarMenu')
        }
})
})


/* Detección de resolución de pantalla: 
	La siguiente funcion detecta la resolucion de pantalla
	y muestra un banner corrrespondiente a los 3 segundos.
	Resoluciones detectadas menor a 800px, de 800 a 1200, mayor a 1200 */
function popUp(){
        var ancho = screen.width; // ancho de la pantalla del usuario
        var alto = screen.height; // alto de la pantalla del usuario 
        if(ancho < 800){  
          window.open("./pages/publicidadUno.html", "Publicidad 1", "width=600, height=840");

        }else if((ancho >= 800) && (ancho <= 1200)){   
            window.open("./pages/publicidadDos.html", "Publicidad 2", "width=900, height=900");
         
        }else{ /*es mayor a 1200 */  
        	window.open("./pages/publicidadTres.html", "Publicidad 3", "width=1200, height=500");
          	
        }
}


setTimeout("popUp()" ,3000)
/* Fin deteccion de Resoluciones menor y banner */



// Validar formulario
function validacion() {
	// nombre
	var nombre = document.getElementById("nombre").value; 
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) { 
	alert("Ingrese su nombre")  
	return false; 
	}

	// email
	var email = document.getElementById("email").value; 
	if( email == null || email.length == 0 || /^\s+$/.test(nombre) ) { 
	alert("Ingrese su e-mail")  
	return false; 
	}

	//teléfono
	var telefono = document.getElementById("telefono").value; 
	if( !(/^\d{10}$/.test(telefono)) ) { 
	alert("Telefono no valido - ingrese 10 digitos numericos") 
	return false; 
	} 

	alert("Datos enviados correctamente")

} // fin validar formulario

// funcion para mostrar fecha y hora
function fechaHora(){
	var fecha = new Date()

	var horas = fecha.getHours()
	var minutos = fecha.getMinutes()
	var segundos = fecha.getSeconds()

	var diaSemana = fecha.getDay()
	var dia = fecha.getDate()
	var mes = fecha.getMonth()
	var year = fecha.getFullYear()

	
	var docHora= document.getElementById("pHoras")
	var docMinutos = document.getElementById("pMinutos")
	var docSegundos = document.getElementById("pSegundos")
	var docAmPm = document.getElementById("pAmPm")

	var docDiaSemana = document.getElementById("pDiaSemana")
	var docDia = document.getElementById("pDia")
	var docMes = document.getElementById("pMes")
	var docYear = document.getElementById("pYear")

	var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
	var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']

	if (minutos < 10){
		minutos = "0" + minutos
	}

	if (segundos < 10){
		segundos = "0" + segundos
	}

	docHora.textContent = horas
	docMinutos.textContent = minutos
	docSegundos.textContent = segundos

	docDiaSemana.textContent = semana[diaSemana]
	docDia.textContent = dia
	docMes.textContent = meses[mes]
	docYear.textContent = year
}

setInterval("fechaHora()" ,1000)


//Función para mostrar u ocultar el articulo "Sobre nosotros"
function mostrarOcultar(articulo){
	var seleccionado=document.getElementById(articulo);
	var boton = document.getElementById('btnLeerMas')
    if(seleccionado.style.display == 'none')
    {
      seleccionado.style.display="block";
      boton.innerHTML = 'Ocultar Sobre Nosotros'

    }
    else {
      seleccionado.style.display="none";
      boton.innerHTML = 'Saber más de nosotros'
    }
    	
}        

// Cargamos la funcion mostrarOcultar()
window.onload = function(){
mostrarOcultar('articulo');
}