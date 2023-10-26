import {generalTransition} from "../global/variables.js";

export default function modalWindow() {
    const modals = document.querySelectorAll(".modal");

    modals.forEach((modal) => {
        const btnOpen = document.querySelectorAll(`[data-modalOpen="${modal.id}"]`);
        const btnClose = document.querySelectorAll(`#${modal.id} [data-modalClose]`);
        const body = document.body;

        function openModal() {
            modal.removeAttribute("aria-hidden");
            modal.setAttribute("role", "dialog");
            modal.setAttribute("aria-modal", true);

            modal.style.display = "flex";
            body.classList.add("modal-scrollbar");

            setTimeout(() => {
                modal.classList.add("show");
            }, 20);

            setTimeout(() => {
                document.addEventListener("keydown", closeModal.keyboard);
                modal.addEventListener("click", closeModal.clickOutside);
            }, generalTransition)
        }
        const closeModal = {
            close: () => {
                modal.setAttribute("aria-hidden", true);
                modal.removeAttribute("role");
                modal.removeAttribute("aria-modal");

                modal.classList.remove("show");
            
                document.removeEventListener("keydown", closeModal.keyboard);
                modal.removeEventListener("click", closeModal.clickOutside);

                setTimeout(() => {
                    modal.style.removeProperty("display");
                    body.classList.remove("modal-scrollbar");
                }, generalTransition)
            },
            keyboard: (event) => {
                if (event.key === "Escape") {
                    closeModal.close();
                }
            },
            clickOutside: (event) => {
                if (event.target.id === modal.id) {
                    closeModal.close();
                }
            }
        }

        btnOpen.forEach((element) => {
            element.addEventListener("click", openModal);
        })
        btnClose.forEach((element) => {
            element.addEventListener("click", closeModal.close);
        })
    });
}