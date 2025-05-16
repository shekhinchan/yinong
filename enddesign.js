const lastlink = document.querySelectorAll(".last h1 a");
lastlink.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add('changecolor');
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove('changecolor');
    });
})