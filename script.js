var botonEncriptar = document.getElementById("btn-encriptar");
var botonDesencriptar = document.getElementById("btn-desencriptar");
var mostrarTexto = document.getElementById("text-mostrar");
var botonCopiar = document.getElementById("btn-copiar")


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;



function encriptar(){
    oculatarObjetos();
    mostrarObjetos();
    mostrarTexto.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    oculatarObjetos();
    mostrarObjetos();
    mostrarTexto.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    var textArea = document.getElementById("text-area");
    return textArea.value;
}

function oculatarObjetos(){
    document.getElementById('muneco').style.display='none';
    document.getElementById('parrafo2').style.display='none';
    document.getElementById('parrafo3').style.display='none';
}

function mostrarObjetos(){
    document.getElementById('text-mostrar').style.display='block';
    document.getElementById('btn-copiar').style.display='block';
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function copiar(){
    var copiarTexto = document.getElementById("text-mostrar");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    alert("copió el texto: "+ copiarTexto.value);
}





