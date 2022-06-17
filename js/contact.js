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

let label = document.querySelector(".labeli");
let label2 = document.querySelector(".labeli2");
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");

input.addEventListener("click", () => {
    if (label.style.transform == "translateY(-26px)") {
        label.style.transform = "translateY(0)";
        label.style.fontSize = "1.4rem";
    } else {
        label2.style.transform = "translateY(0)";
        label.style.transform = "translateY(-26px)";
        label.style.fontSize = "1.2rem";
        label2.style.fontSize = "1.4rem";
    }
});

textarea.addEventListener("click", () => {
    if (label2.style.transform == "translateY(-26px)") {
        label.style.fontSize = "1.4rem";
        label2.style.transform = "translateY(0)";
    } else {
        label.style.fontSize = "1.4rem";
        label.style.transform = "translateY(0)";
        label2.style.transform = "translateY(-26px)";
        label2.style.fontSize = "1.2rem";
    }
});