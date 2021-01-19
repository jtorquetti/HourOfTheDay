function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = "manha.png"
    document.body.style.background = 'rgb(245, 255, 73)'
} else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = "tarde.png"
    document.body.style.background= 'rgb(245, 149, 65)'
} else {
    //BOA NOIE!
    img.src = "noite.png"
    document.body.style.background = 'rgb(102, 75, 115)'
}
}