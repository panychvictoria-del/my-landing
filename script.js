
const reviews = document.querySelectorAll(".review");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let index = 0;

next.onclick = function () {
    reviews[index].classList.remove("active");

    index = (index + 1) % reviews.length;

    reviews[index].classList.add("active");
};

prev.onclick = function () {
    reviews[index].classList.remove("active");

    index = (index - 1 + reviews.length) % reviews.length;

    reviews[index].classList.add("active");
};
