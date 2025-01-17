const MIN_SLIDE = 1;
const MAX_SLIDE = 9;

var slide = 1;

function changeSlide(to) {
    $("#" + slide).toggleClass("active");
    slide = to;
    setTimeout(() => $("#" + slide).toggleClass("active"), 500);
}

function change(diff) {
    let newSlide = Math.max(MIN_SLIDE, Math.min(MAX_SLIDE, slide + diff));
    if (newSlide != slide) changeSlide(newSlide);
}

addEventListener("contextmenu", (e) => {
    e.preventDefault();
    change(-1);
});

addEventListener("click", (e) => {
    change(1);
});

addEventListener("keypress", (e) => {
    if (e.key == " ") change(1);
});

addEventListener("keyup", (e) => {
    if (e.key == "ArrowLeft") change(-1);
});