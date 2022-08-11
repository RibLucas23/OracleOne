let encriptarBtn = document.getElementById("encriptarBtn")
let resultadoTexto = document.getElementById("textoEncriptado")
let desencriptarBtn = document.getElementById("desencriptarBtn")
let resultadoTextoDesencriptado = document.getElementById("resultadoTextoDesencriptado")
var pat = /^[a-z]+$/;



/////// Encriptar
encriptarBtn.addEventListener("click", function (e) {
    e.preventDefault()
    // resultadoTextoDesencriptado.innerHTML = ""
    let texto = document.getElementById("texto").value
    if (pat.test(texto) == false) {
        alert('Por favor ingrese solo letras minúsculas');
    }
    else {
        let arrayTexto = texto.split("")
        for (let i = 0; i < arrayTexto.length; i++) {
            arrayTexto[i] = arrayTexto[i].replace("e", "enter")
            arrayTexto[i] = arrayTexto[i].replace("i", "imes")
            arrayTexto[i] = arrayTexto[i].replace("o", "ober")
            arrayTexto[i] = arrayTexto[i].replace("a", "ai")
            arrayTexto[i] = arrayTexto[i].replace("u", "ufat")
        }
        let textoEncriptado = arrayTexto.join("")
        console.log(resultadoTexto.value)
        resultadoTexto.value = textoEncriptado


    }
})



/////// desencriptar
desencriptarBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let texto = resultadoTexto.value
    for (let i = 0; i < texto.length; i++) {
        texto = texto.replace("enter", "e")
        texto = texto.replace("imes", "i")
        texto = texto.replace("ober", "o")
        texto = texto.replace("ai", "a")
        texto = texto.replace("ufat", "u")
    }
    resultadoTextoDesencriptado.innerHTML = texto
})




/////// copy to clipboard

function copyEncriptado() {

    var texto = document.getElementById('textoEncriptado');

    texto.select();
    document.execCommand('copy');

    alert("Copied!");
}

function copyDesencriptado() {

    var texto = document.getElementById('resultadoTextoDesencriptado');
    texto.select();
    document.execCommand('copy');

    alert("Copied!");
}
