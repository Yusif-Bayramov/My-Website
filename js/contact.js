window.addEventListener("scroll", () => {
    let skils = document.querySelector(".form-c");
    let scrolltop = document.querySelector(".scrolltop");
    let cposition = skils.getBoundingClientRect().top;
    let sposition = window.innerHeight / 1;
    if (cposition < sposition) {
        scrolltop.style.opacity = "1";
        skils.style.opacity = "1";
        skils.style.transform = "scale(1)";
    } else {
        scrolltop.style.opacity = "0";
        skils.style.opacity = "0";
        skils.style.transform = "scale(0.1)";
    };
});