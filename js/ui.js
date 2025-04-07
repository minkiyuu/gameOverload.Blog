window.addEventListener("scroll", function () {
    const header = document.querySelector(".hero");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});