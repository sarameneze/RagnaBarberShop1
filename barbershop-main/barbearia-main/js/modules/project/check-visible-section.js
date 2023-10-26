export default function checkVisibleSection() {
    const sections = document.querySelectorAll("body > main, body > section[id]");

    sections.forEach((section) => {
        const callback = (entries, observer) => { 
            const allLinks = document.querySelectorAll(".header-menu a");
            const link = document.querySelector(`.header-menu a[href="#${section.id}"]`);

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    allLinks.forEach((element) => {
                        element.classList.remove("active");
                    })
                    link.classList.add("active");
                }
            });
        };
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };
        new IntersectionObserver(callback, options).observe(section);
    });
}