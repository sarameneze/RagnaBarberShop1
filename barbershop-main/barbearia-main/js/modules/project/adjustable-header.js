import debounce from "../libraries/debounce.js";
import {waitDebounce} from "../global/variables.js";


export default function adjustableHeader() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", debounce(() => {
        if (document.body.scrollTop > 5 || 
            document.documentElement.scrollTop > 5) {
    
            header.classList.add("header-scrolling");
        } else {
            header.classList.remove("header-scrolling");
        }
    }, waitDebounce));
}