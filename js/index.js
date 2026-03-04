// ==================== MENU ===================
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
}

function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// ================= CARROSSEL 1 =================
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("dots");

if (carousel && prevBtn && nextBtn && dotsContainer) {
    const slides = carousel.children;
    // controla qual imagem esta sendo exibida
    let index = 0;
    // controla o intervalo para mudança da imagem
    let interval;

    // Criar bolinhas
    for (let i = 0; i < slides.length; i++) {
        //cria um botao para cada imagem na classe com id="dots"
        const dot = document.createElement("button");
        dot.className =
            "w-3 h-3 rounded-full bg-gray-300 transition cursor-pointer";
        //adiciona um evento ao clicar no botao
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
            resetAuto();
        });
        //pega o botão criado e o adiciona dentro da div id="dots"
        dotsContainer.appendChild(dot);
    }

    // Atualiza o carrossel toda vez q a imagem muda ou uma bolinha é clicada
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;

        [...dotsContainer.children].forEach((dot, i) => {
            dot.classList.toggle("bg-blue-900", i === index);
            dot.classList.toggle("bg-gray-300", i !== index);
        });
    }

    // Passa a imagem para a proxima
    function nextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    // Passa a imagem para a anterior
    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Inicia o Carrossel automaticamente
    function startAuto() {
        interval = setInterval(nextSlide, 4000);
    }

    // Reseta o intervalo para troca de imagem
    function resetAuto() {
        clearInterval(interval);
        startAuto();
    }

    // Eventos ao clicar no botao
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAuto();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAuto();
    });

    // Pausa o carrossel ao colocar o mouse sobre
    carousel.parentElement.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });

    // Aciona o carrossel novamente ao tirar o mouse
    carousel.parentElement.addEventListener("mouseleave", startAuto);

    // Inicialização
    updateCarousel();
    startAuto();
}

// ================= CARROSSEL 2 =================
const carousel2 = document.getElementById("carousel2");
const prevBtn2 = document.getElementById("prev2");
const nextBtn2 = document.getElementById("next2");
const dotsContainer2 = document.getElementById("dots2");

if (carousel2 && prevBtn2 && nextBtn2 && dotsContainer2) {
    const slides2 = carousel2.children;

    // controla qual imagem esta sendo exibida
    let index2 = 0;

    // controla o intervalo para mudança da imagem
    let interval2;

    // Criar bolinhas
    for (let i = 0; i < slides2.length; i++) {
        const dot2 = document.createElement("button");
        dot2.className =
            "w-3 h-3 rounded-full bg-gray-300 transition cursor-pointer";

        dot2.addEventListener("click", () => {
            index2 = i;
            updateCarousel2();
            resetAuto2();
        });

        dotsContainer2.appendChild(dot2);
    }

    // Atualiza o carrossel
    function updateCarousel2() {
        carousel2.style.transform = `translateX(-${index2 * 100}%)`;

        [...dotsContainer2.children].forEach((dot2, i) => {
            dot2.classList.toggle("bg-blue-900", i === index2);
            dot2.classList.toggle("bg-gray-300", i !== index2);
        });
    }

    // Próxima imagem
    function nextSlide2() {
        index2 = (index2 + 1) % slides2.length;
        updateCarousel2();
    }

    // Imagem anterior
    function prevSlide2() {
        index2 = (index2 - 1 + slides2.length) % slides2.length;
        updateCarousel2();
    }

    // Inicia automático
    function startAuto2() {
        interval2 = setInterval(nextSlide2, 4000);
    }

    // Reseta o intervalo
    function resetAuto2() {
        clearInterval(interval2);
        startAuto2();
    }

    // Eventos
    nextBtn2.addEventListener("click", () => {
        nextSlide2();
        resetAuto2();
    });

    prevBtn2.addEventListener("click", () => {
        prevSlide2();
        resetAuto2();
    });

    // Pausa no hover
    carousel2.parentElement.addEventListener("mouseenter", () => {
        clearInterval(interval2);
    });

    carousel2.parentElement.addEventListener("mouseleave", startAuto2);

    // Inicialização
    updateCarousel2();
    startAuto2();
}

// ================= CARROSSEL 3 =================
const carousel3 = document.getElementById("carousel3");
const prevBtn3 = document.getElementById("prev3");
const nextBtn3 = document.getElementById("next3");
const dotsContainer3 = document.getElementById("dots3");

if (carousel3 && prevBtn3 && nextBtn3 && dotsContainer3) {

    const slides3 = carousel3.children;
    let index3 = 0;
    let interval3;

    // Criar bolinhas
    for (let i = 0; i < slides3.length; i++) {
        const dot3 = document.createElement("button");
        dot3.className =
            "w-3 h-3 rounded-full bg-gray-300 transition cursor-pointer";

        dot3.addEventListener("click", () => {
            index3 = i;
            updateCarousel3();
            resetAuto3();
        });

        dotsContainer3.appendChild(dot3);
    }

    function updateCarousel3() {
        carousel3.style.transform = `translateX(-${index3 * 100}%)`;

        [...dotsContainer3.children].forEach((dot3, i) => {
            dot3.classList.toggle("bg-blue-900", i === index3);
            dot3.classList.toggle("bg-gray-300", i !== index3);
        });
    }

    function nextSlide3() {
        index3 = (index3 + 1) % slides3.length;
        updateCarousel3();
    }

    function prevSlide3() {
        index3 = (index3 - 1 + slides3.length) % slides3.length;
        updateCarousel3();
    }

    function startAuto3() {
        interval3 = setInterval(nextSlide3, 4000);
    }

    function resetAuto3() {
        clearInterval(interval3);
        startAuto3();
    }

    nextBtn3.addEventListener("click", () => {
        nextSlide3();
        resetAuto3();
    });

    prevBtn3.addEventListener("click", () => {
        prevSlide3();
        resetAuto3();
    });

    carousel3.parentElement.addEventListener("mouseenter", () => {
        clearInterval(interval3);
    });

    carousel3.parentElement.addEventListener("mouseleave", startAuto3);

    updateCarousel3();
    startAuto3();
}

// ================= CARROSSEL 4 NOSSOS RESULTADOS =================
const carousel4 = document.getElementById("carousel4");
const prevBtn4 = document.getElementById("prev4");
const nextBtn4 = document.getElementById("next4");
const dotsContainer4 = document.getElementById("dots4");

if (carousel4 && prevBtn4 && nextBtn4 && dotsContainer4) {

    const slides4 = carousel4.children;
    let index4 = 0;
    let interval4;

    // Criar bolinhas
    for (let i = 0; i < slides4.length; i++) {
        const dot4 = document.createElement("button");
        dot4.className =
            "w-3 h-3 rounded-full bg-gray-300 transition cursor-pointer";

        dot4.addEventListener("click", () => {
            index4 = i;
            updateCarousel3();
            resetAuto3();
        });

        dotsContainer4.appendChild(dot4);
    }

    function updateCarousel4() {
        carousel4.style.transform = `translateX(-${index4 * 100}%)`;

        [...dotsContainer4.children].forEach((dot4, i) => {
            dot4.classList.toggle("bg-blue-900", i === index4);
            dot4.classList.toggle("bg-gray-300", i !== index4);
        });
    }

    function nextSlide4() {
        index4 = (index4 + 1) % slides4.length;
        updateCarousel4();
    }

    function prevSlide4() {
        index4 = (index4 - 1 + slides4.length) % slides4.length;
        updateCarousel4();
    }

    function startAuto4() {
        interval4 = setInterval(nextSlide4, 4000);
    }

    function resetAuto4() {
        clearInterval(interval4);
        startAuto4();
    }

    nextBtn4.addEventListener("click", () => {
        nextSlide4();
        resetAuto4();
    });

    prevBtn4.addEventListener("click", () => {
        prevSlide4();
        resetAuto4();
    });

    carousel4.parentElement.addEventListener("mouseenter", () => {
        clearInterval(interval4);
    });

    carousel4.parentElement.addEventListener("mouseleave", startAuto4);

    updateCarousel4();
    startAuto4();
}

// ================================= Função Redirecionar para Whats =============================

function RedirecionarWhats(){
    window.location.href = "https://wa.me/message/APCRMGCYRVWVK1";
}