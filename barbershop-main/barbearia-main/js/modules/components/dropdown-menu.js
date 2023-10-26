import {generalTransition} from "../global/variables.js";

export default function dropdownMenu() {
    const btns = document.querySelectorAll(".dropdown-btn");

    btns.forEach((btn) => {
        const menu = btn.nextElementSibling;

        function openDropdown() {
            if (btn.ariaExpanded === "false") {

                btn.setAttribute("aria-expanded", true);
                btn.classList.add("show");
                menu.classList.add("show");
                menu.style.height = menu.scrollHeight + "px";
    
                setTimeout(() => {
                    btn.addEventListener("click", closeDropdown.close);
                    document.addEventListener("keydown", closeDropdown.keyboard);
                    document.addEventListener("click", closeDropdown.clickOutside);

                    menu.style.height = "initial";
                }, generalTransition);
            };
        }
        const closeDropdown = {
            close: () => {
                if (btn.ariaExpanded === "true") {

                    btn.setAttribute("aria-expanded", false);
                    btn.classList.remove("show");
                    menu.style.height = menu.scrollHeight + "px";
                    setTimeout(() => {
                        menu.style.removeProperty("height");
                    }, 20);
        
                    btn.removeEventListener("click", closeDropdown.close);
                    btn.removeEventListener("click", openDropdown);
                    document.removeEventListener("keydown", closeDropdown.keyboard);
                    document.removeEventListener("click", closeDropdown.clickOutside);
        
                    setTimeout(() => {
                        menu.classList.remove("show");
            
                        btn.addEventListener("click", openDropdown);
                    }, generalTransition)
                }
            },
            keyboard: (event) => {
                if (event.key === "Escape") {
                    closeDropdown.close();
                }
            },
            clickOutside: (event) => {
                if (event.target !== btn) {
                    closeDropdown.close();
                }
            }
        }

        btn.addEventListener("click", openDropdown);
    });
}