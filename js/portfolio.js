window.addEventListener("scroll", () => {
    let skils = document.querySelector(".scrl");
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
    }
});

window.addEventListener("scroll", () => {
    let skils = document.querySelector(".scrl1");
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

window.addEventListener("scroll", () => {
    let skils = document.querySelector(".scrl2");
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

let filul = document.querySelector(".fillter-l")
let filterc = filul.querySelectorAll("li")
filterc.forEach(element => {
    element.addEventListener("click", function() {
        filterc.forEach(nav => nav.classList.remove(("activef")))
        this.classList.add("activef")
        let itembox = document.querySelectorAll(".card");
        let dataFilter = this.getAttribute("data-filter");
        for (let k of itembox) {
            k.classList.remove("activev");
            k.classList.add("hide");
            k.style.transform = "scale(0.1)";
            if (k.getAttribute("data-item") == dataFilter || dataFilter == "all") {
                k.classList.remove("hide");
                k.classList.add("activev");
                setTimeout(() => {
                    k.style.transform = "scale(1)";
                }, 0);
            }
        }
    });
});