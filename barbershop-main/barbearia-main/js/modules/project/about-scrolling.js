export default function aboutScrolling() {
    const aboutContainer = document.querySelector(".about-team");
    let isDown = false;
    let startX;
    let scrollLeft;

    aboutContainer.addEventListener("mousedown", (event) => {
        isDown = true;
        startX = event.pageX - aboutContainer.offsetLeft;
        scrollLeft = aboutContainer.scrollLeft;
        aboutContainer.classList.add("active");
    });

    aboutContainer.addEventListener("mouseleave", () => {
        isDown = false;
    });
    aboutContainer.addEventListener("mouseup", () => {
        isDown = false;
        aboutContainer.classList.remove("active");
    });
    aboutContainer.addEventListener("mousemove", (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - aboutContainer.offsetLeft;
        const walk = (x - startX) * 1;
        aboutContainer.scrollLeft = scrollLeft - walk;
    });

}