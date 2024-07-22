// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Exibir uma mensagem de confirmação
            alert(`Obrigado pelo contato, ${name}! Recebemos sua mensagem e entraremos em contato pelo e-mail ${email}.`);

            // Limpar o formulário após o envio
            form.reset();
        });
    }
});

var radio=document.querySelector('.manual-btn')
var cont=1

document.getElementById('radio1').checked=true

setInterval(()=>{
    proximalmg()
},2000)
function proximalmg(){
    cont++
    if(cont>2){

    }
    document.getElementById('radio'+cont).checked=true
}