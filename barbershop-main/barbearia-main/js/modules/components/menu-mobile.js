import {generalTransition} from "../global/variables.js";

export default function menuMobile() {
    const btn = document.querySelector(".header-btn-mobile");
    const menu = btn.nextElementSibling;
    const html = document.documentElement;

    function openMenu() {
        if (btn.ariaExpanded === "false") {

            btn.setAttribute("aria-expanded", true);
            btn.setAttribute("aria-label", "Fechar menu de navegação");
            btn.classList.add("show");
            menu.classList.add("show");
            menu.style.height = menu.scrollHeight + "px";
    
            setTimeout(() => {
                btn.addEventListener("click", closeMenu.close);
                html.addEventListener("click", closeMenu.clickOutside);

                menu.style.height = "initial";
            }, generalTransition);
        };
    };
    const closeMenu = {
        close: () => {
            if (btn.ariaExpanded === "true") {

                btn.setAttribute("aria-expanded", false);
                btn.setAttribute("aria-label", "Abrir menu de navegação");
                btn.classList.remove("show");
    
                menu.style.height = menu.scrollHeight + "px";
                setTimeout(() => {
                    menu.style.removeProperty("height");
                }, 20);
        
                html.removeEventListener("click", closeMenu.clickOutside);
                btn.removeEventListener("click", closeMenu.close);
                btn.removeEventListener("click", openMenu);
                
                setTimeout(() => {
                    menu.classList.remove("show");
                    btn.addEventListener("click", openMenu);
        
                }, generalTransition);
            };
        },
        clickOutside: (event) => {
            if (event.target !== btn) {
                closeMenu.close();
            }
        }
    }

    btn.addEventListener("click", openMenu);
}