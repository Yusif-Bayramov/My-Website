const spiner = document.querySelector(".spiner");
setInterval(() => {
    spiner.style.display = "none"
}, 2000);

window.addEventListener("scroll", () => {
    let lefticon = document.querySelector(".lefti-c")
    let scroll = document.querySelector("footer");
    let scroll2 = document.querySelector(".ficon");
    let cposition = scroll.getBoundingClientRect().top;
    let sposition = window.innerHeight / 1;
    if (cposition < sposition) {
        lefticon.style.opacity = "0";
        scroll2.style.opacity = "1";
    } else {
        lefticon.style.opacity = "1";
        scroll2.style.opacity = "0";
    }
});

let wps = document.querySelector(".wps");

setTimeout(() => {
    wps.style.opacity = "1"
    wps.style.transform = "translate(0)";
    setTimeout(() => {
        wps.style.opacity = "0"
        wps.style.transform = "translate(-20px)";
    }, 10000);
}, 5000);