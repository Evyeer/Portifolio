function efeitoEscrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 95 * i);
    });
}

const titulo = document.getElementById('textH');
onload = efeitoEscrever(titulo);

const img = document.getElementById('imague');

function emailShow(){
    document.getElementById('mail').innerHTML = '  ' + "arthursapo444@hotmail.com";
}