const spiner = document.querySelector(".spiner");
setInterval(() => {
    spiner.style.display = "none"
}, 2000);

window.addEventListener("scroll", () => {
    let lefticon = document.querySelector(".lefti-c")
    let scroll = document.querySelector("footer");
    let cposition = scroll.getBoundingClientRect().top;
    let sposition = window.innerHeight / 1;
    if (cposition < sposition) {
        lefticon.style.opacity = "0";

    } else {
        lefticon.style.opacity = "1";

    }
});