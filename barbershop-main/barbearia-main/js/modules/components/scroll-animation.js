export default function scrollAnimation() {
    const elements = document.querySelectorAll("[data-scrollAnimation]");

    elements.forEach((element) => {
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const time = element.dataset.scrollanimationDelay;

                    setTimeout(() => {
                        element.classList.add("animate");
                    }, time);
                }
            });
        };
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };

        new IntersectionObserver(callback, options).observe(element);
    });
}