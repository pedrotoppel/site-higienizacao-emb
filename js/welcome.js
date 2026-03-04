// ====================== Animação TypeWriter Texto=========================

const textoFinal = "A melhor empresa de Higienização de Curitiba";
const textoAnimadoEntrada = document.getElementById('textoAnimadoEntrada');

let textoTela = 0;
textoAnimadoEntrada.textContent = "";

function digitar() {
    if (textoTela < textoFinal.length) {
        textoAnimadoEntrada.textContent += textoFinal.charAt(textoTela);
        textoTela++;
        setTimeout(digitar, 50);
    }else{
        setTimeout(apagar, 3000)
    }
}

function apagar() {
    if (textoTela > 0) {
        textoAnimadoEntrada.textContent = textoFinal.slice(0, textoTela - 1);
        textoTela--;
        setTimeout(apagar, 20);
    }else{
        setTimeout(desaparecerImagem, 500);
    }
}

// ====================== Animação Imagem=========================

const imagem = document.getElementById("imagemEMB");

function desaparecerImagem() {
    imagem.classList.add("transition-all", "duration-1000", "translate-y-[-200%]", "opacity-0");
}

// ======================= Ao Carregar a Pagina ========================
document.addEventListener("DOMContentLoaded", digitar);