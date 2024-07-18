var radio=document.querySelector('.manual-btn')
var con=1

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