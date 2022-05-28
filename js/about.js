const btnr = document.querySelector(".btn");
const span = document.querySelector(".readmore");

btnr.addEventListener("click", () => {

    if (span.style.display == "block") {
        span.style.display = "none";
    } else {
        span.style.display = "block";
    }

});

window.addEventListener("scroll", () => {
    let scroll = document.querySelector(".about-c");
    let cposition = scroll.getBoundingClientRect().top;
    let sposition = window.innerHeight / 1;
    if (cposition < sposition) {
        scroll.style.opacity = "1";
        scroll.style.transform = "scale(1)";
    } else {
        scroll.style.opacity = "0";
        scroll.style.transform = "scale(0.1)";
    }
});


window.addEventListener("scroll", () => {
    let skils = document.querySelector(".wrapper");
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