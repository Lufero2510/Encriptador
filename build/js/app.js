const botonCopiar = document.querySelector('.btn-copiar');
const botonEncrip = document.querySelector('.btn-encriptar');
const botonDesencrip = document.querySelector('.btn-desencriptar');
const txtArea = document.querySelector('#text-area');
const txtMensaje = document.querySelector('#mensaje');
//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

botonCopiar.style.display = "none";

const encrypt = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const desencrypt = {
    "enter" : "e",
    "imes" : "i",
    "ai" : "a",
    "ober" : "o",
    "ufat" : "u"
};

function validarTexto(){
    var entrada = txtArea.value;
    let patter = /^[a-z]*$/gm;     

    if(!entrada.match(patter) || entrada == ""){
        alert("no se puede ingresar acentos, caracteres especiales o vacio, porfavor intente sin nuevamente");
        location.reload();

        return true;
    }

}

function encriptar(cadenaTexto){
    if(!validarTexto()){
        var cadenaTexto = cadenaTexto.replace(/[eiaou]/g, match => encrypt[match]);
        botonCopiar.style.display = "block";
        return cadenaTexto;
    }
}

function desencriptar(cadenaTexto){
    if(!validarTexto()){
        var cadenaTexto = cadenaTexto.replace(/(ai|enter|imes|ober|ufat)/gm, match => desencrypt[match]);
        botonCopiar.style.display = "block";
        return cadenaTexto;
    }
}

botonEncrip.addEventListener('click', function(e){ 

    txtMensaje.value = encriptar(txtArea.value);
    txtArea.value = "";
    
});
botonDesencrip.addEventListener('click', function(e){ 

    txtMensaje.value = desencriptar(txtArea.value);
    txtArea.value = "";
    
});

botonCopiar.addEventListener('click', function(e){

    navigator.clipboard.writeText(txtMensaje.value).then(function() {
        txtMensaje.value = "";
        botonCopiar.style.display = "none";
        alert("Texto Copiado");
      });
})
