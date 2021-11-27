/**
 * autor Lorena Navas
 * escrito 26/11/2021
 * Universidad Sergio Arboleda
 */



 $(document).ready(function () {
    estadoInicial()
});



function login(){
    let email = $("#useremail").val()
    let password = $("#password").val()
    $.ajax({
        url: "http://152.67.35.239:8081/api/user/"+ email + "/" + password,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            resultado(respuesta)	
        },
        error: function (xhr, status) {
            console.log("Error");	
        },
        complete: function (xhr, status) {
            console.log("Correcto"  + status);
        }
    });
}



function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)

}



function estadoInicial(){
    $("#useremail").focus()
}

