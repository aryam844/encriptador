function encriptar(){
    const textoOriginal = document.getElementById ("texto-ingresado").value.toLowerCase();

    var textArea = textoOriginal.replace(/e/img,"enter");
    var textArea = textArea.replace(/i/img,"imes");
    var textArea = textArea.replace(/a/img,"ai");
    var textArea = textArea.replace(/o/img,"ober");
    var textArea = textArea.replace(/u/img,"ufat");

    document.getElementById("mensaje").innerHTML = textArea; 
 

}

function quitarImg(){
    document.getElementById("mensaje").style.backgroundImage = "none";
}

function desencriptar(){
    const textoOriginal = document.getElementById ("texto-ingresado").value.toLowerCase();

    var textArea = textoOriginal.replace(/enter/img,"e");
    var textArea = textArea.replace(/imes/img,"i");
    var textArea = textArea.replace(/ai/img,"a");
    var textArea = textArea.replace(/ober/img,"o");
    var textArea = textArea.replace(/ufat/img,"u");

    document.getElementById("mensaje").innerHTML = textArea;
    
}

function copiar(){
    var copiado = document.querySelector("#mensaje");
    copiado.select();
    document.execCommand("copy");

}
