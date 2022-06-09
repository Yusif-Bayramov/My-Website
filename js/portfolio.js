window.addEventListener("scroll", () => {
    let skils = document.querySelectorAll(".scrl");
    for (let skilss2 of skils) {
        let scrolltop = document.querySelector(".scrolltop");
        let cposition = skilss2.getBoundingClientRect().top;
        let sposition = window.innerHeight / 1;
        if (cposition < sposition) {
            scrolltop.style.opacity = "1";
            skilss2.style.opacity = "1";
            skilss2.style.transform = "scale(1)";
        } else {
            scrolltop.style.opacity = "0";
            skilss2.style.opacity = "0";
            skilss2.style.transform = "scale(0.1)";
        }
    }

});

window.addEventListener("scroll", () => {
    let skils = document.querySelectorAll(".scrl1");
    for (let sikiss of skils) {
        let cposition = sikiss.getBoundingClientRect().top;
        let sposition = window.innerHeight / 1;
        if (cposition < sposition) {
            sikiss.style.opacity = "1";
            sikiss.style.transform = "scale(1)";
        } else {
            sikiss.style.opacity = "0";
            sikiss.style.transform = "scale(0.1)";
        }
    }

});

window.addEventListener("scroll", () => {
    let skils = document.querySelectorAll(".scrl2");
    for (let sikiss3 of skils) {
        let cposition = sikiss3.getBoundingClientRect().top;
        let sposition = window.innerHeight / 1;
        if (cposition < sposition) {
            sikiss3.style.opacity = "1";
            sikiss3.style.transform = "scale(1)";
        } else {
            sikiss3.style.opacity = "0";
            sikiss3.style.transform = "scale(0.1)";
        }
    }

});

window.addEventListener("scroll", () => {
    let skils = document.querySelectorAll(".scrl3");
    for (let sikiss4 of skils) {
        let cposition = sikiss4.getBoundingClientRect().top;
        let sposition = window.innerHeight / 1;
        if (cposition < sposition) {
            sikiss4.style.opacity = "1";
            sikiss4.style.transform = "scale(1)";
        } else {
            sikiss4.style.opacity = "0";
            sikiss4.style.transform = "scale(0.1)";
        }
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