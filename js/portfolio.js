window.addEventListener("scroll", () => {
    let skils = document.querySelector(".scrl");
    let cposition = skils.getBoundingClientRect().top;
    let sposition = window.innerHeight / 1;
    if (cposition < sposition) {
        skils.style.opacity = "1";
        skils.style.transform = "scale(1)";
    } else {
        skils.style.opacity = "0";
        skils.style.transform = "scale(0.1)";
    }
});