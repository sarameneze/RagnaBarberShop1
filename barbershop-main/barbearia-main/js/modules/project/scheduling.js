import {generalTransition} from "../global/variables.js";

export default function scheduling() {
    const dropdownBtn = document.getElementById("dropdownMenuScheduling");
    const dropdownMenuBtns = dropdownBtn.nextElementSibling.querySelectorAll("button");
    const pricesBtns = document.querySelectorAll("#pricesScheduling button")
    const submit = document.getElementById("schedulingSubmit");


    submit.addEventListener("click", (event) => {
        if (submit.getAttribute("href") === "#") {
            event.preventDefault();
            alert("Por favor, selecione uma opção para agendar.");
        }
    });

    function addOptionSelected(button) {
        const href = submit.dataset.href;
        const message = "Olá, gostaria de saber os horários disponíveis para";
        const text = button.innerText;
        
        dropdownBtn.innerText = text.trim();
        dropdownBtn.classList.add("active");
        submit.setAttribute("href", `${href}${message} *${text.toLowerCase()}*.`);

        dropdownMenuBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
    }

    dropdownMenuBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            addOptionSelected(btn);

            btn.classList.add("active");
        });
    });

    pricesBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const elementText = btn.firstElementChild;

            document.getElementById("contact").scrollIntoView();
            addOptionSelected(elementText);
            
            dropdownMenuBtns.forEach((dropdownMenuBtn) => {
                if (dropdownMenuBtn.innerText.trim() === elementText.innerText) {
                    dropdownMenuBtn.classList.add("active");
                }
            });

            setTimeout(() => {
                dropdownBtn.classList.add("click");

                setTimeout(() => {
                    dropdownBtn.classList.remove("click");
                }, generalTransition)
            }, generalTransition * 2);
        });
    });
}