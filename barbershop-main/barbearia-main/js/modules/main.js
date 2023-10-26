// bibliotecas
import simpleAnime from "./libraries/simple-anime.js";

// componentes
import menuMobile from "./components/menu-mobile.js";
import dropdownMenu from "./components/dropdown-menu.js";
import modalWindow from "./components/modal-window.js";
import scrollAnimation from "./components/scroll-animation.js";

// projeto
import adjustableHeader from "./project/adjustable-header.js";
import checkVisibleSection from "./project/check-visible-section.js";
import aboutScrolling from "./project/about-scrolling.js";
import testimoniesSlide from "./project/testimonies-slide.js";
import scheduling from "./project/scheduling.js";


/*
    Iniciar funções
*/

// simpleAnime
new simpleAnime;

// componentes
menuMobile();
dropdownMenu();
modalWindow();
scrollAnimation();

// projeto
adjustableHeader();
checkVisibleSection();
aboutScrolling();
testimoniesSlide();
scheduling();