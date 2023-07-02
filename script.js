

const button = document.querySelector(".ripple");

button.addEventListener("click", (e) => {

    /* create the circle element */
    let circle = document.createElement("span");
    circle.classList.add("circle");

    /* position the circle element */
    circle.style.top = `${e.pageY - e.target.offsetTop}px`
    circle.style.left = `${e.pageX - e.target.offsetLeft}px`
    button.appendChild(circle);

    /* delete the circle element */
    setInterval(() => circle.remove(), 500);

})