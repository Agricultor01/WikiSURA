document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector(".hero-video");
    const btn = document.querySelector(".sound-btn");

    if (!video || !btn) return;

    let soundOn = false;

    //  FORZAR QUE EL VIDEO INICIE
    video.muted = true;
    video.play().catch(() => {});

    btn.addEventListener("click", () => {

        soundOn = !soundOn;

        if (soundOn) {
            video.muted = false;
            video.volume = 1;

            video.play().then(() => {
                btn.textContent = "🔊";
            }).catch(err => {
                console.log("Error al reproducir:", err);
            });

        } else {
            video.muted = true;
            btn.textContent = "🔇";
        }

    });

});

//Trancicion entre paginas 

const links = document.querySelectorAll("a");

const transition = document.querySelector(".page-transition");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        // evitar errores con links vacíos o externos
        if (!href || href.startsWith("#")) return;

        e.preventDefault();

        transition.classList.add("active");

        setTimeout(() => {
            window.location.href = href;
        }, 500); // mismo tiempo que CSS
    });
});

const images = document.querySelectorAll(".img");
const fills = {
    daño: document.querySelector(".daño"),
    velocidad: document.querySelector(".velocidad"),
    destreza: document.querySelector(".destreza"),
    resistencia: document.querySelector(".resistencia"),
    potencial: document.querySelector(".potencial"),
    alcance: document.querySelector(".alcance")
};

let current = 0;

window.addEventListener("wheel", (e) => {

    if(e.deltaY > 0){
        current++;
    } else {
        current--;
    }

    // limitar rango
    if(current < 0) current = 0;
    if(current >= images.length) current = images.length - 1;

    updateState();
});


//Descripcion del sitio

document.addEventListener("DOMContentLoaded", () => {

    const desc = document.querySelector(".hero-description");

    // 🔥 textos que van rotando
    const texts = [
        "ELEMENTOS Ahora es también un sitio web… .",
        "El sitio oficial que recopila a mis personajes…",
        "clickea el que gustes y descubre su historia… ",
        "Música usada: Ibis de Gozen Yoji y Asayake Ni Tsuki",
        "Algunas imágenes cambian al posicionar el cursor sobre ellas…",
        "Otras cambian al scrollear sobre ellas descubre cual es cual… ",
        "A=Muy bueno... ",
        "B=Bueno... ",
        "C=Malo... ",
        "D=Muy malo... ",
        "Entiéndase por potencial la versatilidad del personaje o la capacidad de crecimiento…",
        "La destreza se refiere a la maestría en su clase, así como el refinamiento de sus técnicas… ",
        "El alcance es el rango de acción del guerrero cuerpo a cuerpo o global... "
  

    ];

    let i = 0;

    function toggleDescription(){

        // cambia el texto
        desc.textContent = texts[i];

        // activa animación
        desc.classList.add("show");

        // se oculta después de 8s
        setTimeout(() => {
            desc.classList.remove("show");
        }, 8000);

        // avanza al siguiente texto
        i = (i + 1) % texts.length;
    }

    // 🔥 primera ejecución
    toggleDescription();

    // 🔥 repetir cada 17 segundos
    setInterval(toggleDescription, 9000);

});
