function formulario(){
    var name = document.getElementById("name").value; // Obtém o valor do campo de nome
    var email = document.getElementById("email").value; // Obtém o valor do campo de e-mail
    var message = document.getElementById("message").value; // Obtém o valor do campo de mensagem
   
    if(name && email && message){ // Verifica se todos os campos estão preenchidos
        alert("Seu formulário foi enviado com sucesso, aguarde confirmação pelo e-mail."); // Exibe mensagem de sucesso
    }
    else{
        alert("Por favor preencha o formulário."); // Exibe mensagem de erro se algum campo estiver vazio
    }
}
