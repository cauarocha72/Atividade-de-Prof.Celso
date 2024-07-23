function formulario(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
   
    if(name,email,message){
        alert("sucesso")
    }
    else{
        alert("preencha o formulario")
    }

}