const btnr = document.querySelector(".btn");
const span = document.querySelector(".readmore");

btnr.addEventListener("click", () => {

    if (span.style.display == "block") {
        span.style.display = "none";
    } else {
        span.style.display = "block";
    }

});