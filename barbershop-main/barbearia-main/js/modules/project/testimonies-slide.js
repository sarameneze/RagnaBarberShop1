import Glider from "../libraries/glider.js";

export default function testimoniesSlide() {
    new Glider(document.getElementById("testimoniesSlide"), {
        slidesToShow: 1,
        arrows: {
            prev: ".testimonies-btn.btn-prev",
            next: ".testimonies-btn.btn-next",
        },
        draggable: true,
        dragVelocity: 0.5,
        scrollLock: true,
        scrollLockDelay: 200,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    rewind: true,
                    draggable: false,
                    scrollLock: false,
                }
            }
        ],
    });
}