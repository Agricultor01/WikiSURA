document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".img");
    const imageBox = document.querySelector(".image-box");

    const daño = document.querySelector(".daño");
    const velocidad = document.querySelector(".velocidad");
    const destreza = document.querySelector(".destreza");
    const resistencia = document.querySelector(".resistencia");
    const potencial = document.querySelector(".potencial");
    const alcance = document.querySelector(".alcance");

    let current = 0;
    let isScrolling = false;

    function updateHUD(index){

      

        

        if(index === 0){
            daño.style.width = "50%";
            velocidad.style.width = "75%";
            destreza.style.width = "50%";
            resistencia.style.width = "100%";
            potencial.style.width = "100%";
            alcance.style.width = "75%";
        }

        if(index === 1){
            daño.style.width = "25%";
            velocidad.style.width = "100%";
            destreza.style.width = "100%";
            resistencia.style.width = "50%";
            potencial.style.width = "100%";
            alcance.style.width = "50%";
        }

        if(index === 2){
            daño.style.width = "75%";
            velocidad.style.width = "50%";
            destreza.style.width = "75%";
            resistencia.style.width = "100%";
            potencial.style.width = "75%";
            alcance.style.width = "25%";
        }

         if(index === 3){
            daño.style.width = "100%";
            velocidad.style.width = "75%";
            destreza.style.width = "50%";
            resistencia.style.width = "100%";
            potencial.style.width = "100%";
            alcance.style.width = "75%";
        }
    }

    imageBox.addEventListener("wheel", (e) => {

    e.preventDefault();

    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
        current++;
    } else {
        current--;
    }

    if (current < 0) current = 0;
    if (current >= images.length) current = images.length - 1;

    images.forEach(img => img.classList.remove("active"));
    images[current].classList.add("active");

    updateHUD(current); // 🔥 ESTA LÍNEA FALTABA

    setTimeout(() => {
        isScrolling = false;
    }, 400);

});

});

