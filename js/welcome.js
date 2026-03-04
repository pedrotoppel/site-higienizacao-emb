// ========================== Local Storage ===============================

let acesso = localStorage.getItem("PrimeiroAcesso");
if(acesso == 1){
    window.location.href = "index.html"
}

// ====================== Animação TypeWriter Texto=========================

const textoFinal = "A melhor empresa de Higienização de Curitiba";
const textoAnimado = document.getElementById('textoAnimadoEntrada');

let textoTela = 0;
let textoPiscadas = 0;
textoAnimado.textContent = "";

function digitar() {
    if (textoTela < textoFinal.length) {
        textoAnimado.textContent += textoFinal.charAt(textoTela);
        textoTela++;
        setTimeout(digitar, 50);
    }else if(textoPiscadas < 4){
        textoAnimado.classList.toggle("opacity-0");
        setTimeout(digitar, 600);
        textoPiscadas++;
    }
    else{
        setTimeout(apagar, 1500)
    }
}

function apagar() {
    if (textoTela > 0) {
        textoAnimado.textContent = textoFinal.slice(0, textoTela - 1);
        textoTela--;
        setTimeout(apagar, 20);
    }else{
        setTimeout(desaparecerImagem, 500);
    }
}

// ====================== Animação Imagem ==========================
const imagem = document.getElementById("imagemEMB");

function aparecerImagem() {
    imagem.classList.remove("translate-y-[-200%]", "opacity-0");
    imagem.classList.add("translate-y-0", "opacity-100");
}

function desaparecerImagem() {
    imagem.classList.remove("translate-y-0", "opacity-100");
    imagem.classList.add("translate-y-[-200%]", "opacity-0");
    setTimeout(function(){
        localStorage.setItem("PrimeiroAcesso", "1");
        window.location.href = "index.html"
    }, 1000);
}

// ======================= Ao Carregar a Pagina ========================
document.addEventListener("DOMContentLoaded", aparecerImagem);
document.addEventListener("DOMContentLoaded", setTimeout(digitar, 1500));