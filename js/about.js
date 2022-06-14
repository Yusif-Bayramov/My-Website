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
        scroll.style.transform = "translate(0)";
    } else {
        scroll.style.opacity = "0";
        scroll.style.transform = "translate(-100%)";
    }
});


window.addEventListener("scroll", () => {
    let skils = document.querySelector(".wrapper");
    let bar1 = document.querySelector("#html-bar")
    let bar2 = document.querySelector("#css-bar")
    let bar3 = document.querySelector("#js-bar")
    let bar4 = document.querySelector("#jQuery-bar")
    let cposition = skils.getBoundingClientRect().top;
    let sposition = window.innerHeight / 1;
    if (cposition < sposition) {
        skils.style.opacity = "1";
        skils.style.transform = "scale(1)";
        bar1.style.animation = "html-fill 2.5s forwards";
        bar2.style.animation = "css-fill 2.5s forwards";
        bar3.style.animation = "js-fill 2.5s forwards";
        bar4.style.animation = "jQuery-fill 2.5s forwards";
    } else {
        skils.style.opacity = "0";
        skils.style.transform = "scale(0.1)";
        bar1.style.animation = "none";
        bar2.style.animation = "none";
        bar3.style.animation = "none";
        bar4.style.animation = "none";
    }
});