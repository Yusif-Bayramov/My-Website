const openb = document.querySelector("#openbtn");
const closeb = document.querySelector("#colsebtn");
const c = document.querySelector(".container1");
const m = document.querySelector("#main");
const ul = document.querySelector("#ul")
const lg = document.querySelector(".lg");

function myFunction(x) {
    if (x.matches) {
        c.style.width = "0"
        for (let li of ul.children) {
            li.addEventListener("click", () => {
                c.style.width = "0"
                openb.style.display = "block";
            });
        };
        openb.addEventListener("click", () => {
            c.style.width = "100%"
            c.style.opacity = ".9"
            openb.style.display = "none";
        });

        closeb.addEventListener("click", () => {
            c.style.width = "0"
            openb.style.display = "block";
        });
        m.style.display = "flex";
        lg.style.display = "none";

    } else {
        for (let li of ul.children) {
            li.addEventListener("click", () => {
                c.style.width = "100%"
                openb.style.display = "block";
            });
        };
        c.style.width = "100%"
        m.style.display = "none";
        lg.style.display = "block";
    }
};
const mmObj = window.matchMedia("(max-width: 576px)")
myFunction(mmObj);
mmObj.addListener(myFunction);

let navbar = ul.querySelectorAll("a")

navbar.forEach(element => {
    element.addEventListener("click", function() {
        navbar.forEach(nav => nav.classList.remove(("active")))
        this.classList.add("active")
    });
});

window.addEventListener("scroll", () => {
    const incatorbar = document.querySelector(".scroll-indicator-bar");
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;
    incatorbar.style.width = scrollValue + "%";
});