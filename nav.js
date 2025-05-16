//对导航栏进行布局 当mouse 移动对应框架则放大和不透明
const navLinks = document.querySelectorAll(".nav li a");
navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add('active');
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove('active');
    });
});
const content = document.querySelector(".nav .content").addEventListener("click", () => {
    scrollTo(0, 6000)
})