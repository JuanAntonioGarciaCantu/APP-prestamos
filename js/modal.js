var modal = document.getElementById("modal");
var btnAbrir = document.getElementsByClassName("abrir-modal");
var btnCerrar = document.getElementsByClassName("btn-cerrar");
var btnCrud = document.getElementsByClassName("btn-crud");
var titulo = document.getElementById("titulo-modal");

//modal para crear
btnAbrir[0].addEventListener('click', function(){
    modal.style.visibility = "visible";
    btnCrud[0].style.visibility = "visible";
    titulo.textContent = "Agregar prestamo";
});

//modal para modificar
btnAbrir[1].addEventListener('click', function(){
    modal.style.visibility = "visible";
    btnCrud[1].style.visibility = "visible";
    titulo.textContent = "Modificar acredor";
});

//modal para eliminar
btnAbrir[2].addEventListener('click', function(){
    modal.style.visibility = "visible";
    btnCrud[2].style.visibility = "visible";
    titulo.textContent = "Eliminar acredor";
});

//boton para cerrar modal
btnCerrar[0].addEventListener('click', function(){
    modal.style.visibility = "hidden";
    btnCrud[0].style.visibility = "hidden";
    btnCrud[1].style.visibility = "hidden";
    btnCrud[2].style.visibility = "hidden";
});

//boton para cancelar
btnCerrar[1].addEventListener('click', function(){
    modal.style.visibility = "hidden";
    btnCrud[0].style.visibility = "hidden";
    btnCrud[1].style.visibility = "hidden";
    btnCrud[2].style.visibility = "hidden";
});