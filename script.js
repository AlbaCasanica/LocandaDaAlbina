
/* -----INIZIO Bottone Fisso in Basso DX----- */

document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToAction");
    const prenotaSection = document.querySelector("#prenota");

    window.addEventListener("scroll", () => {
        if (prenotaSection) {
            const triggerPoint = prenotaSection.offsetTop + prenotaSection.offsetHeight;
            if (window.scrollY > triggerPoint) {
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.classList.remove("show");
            }
        }
    });

    // Quando l'utente clicca sul bottone, scorre verso l'alto
    scrollBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector("#prenota");
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }  
    });

/* -----FINE Bottone Fisso in Basso DX----- */

/* -----INIZIO Apertura e Chiusura HAMBURGER -----*/

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Funzione per aprire/chiudere il menu
menuToggle.addEventListener("click", () => {
menu.classList.toggle("show"); // Aggiungi o rimuovi la classe "show"
menuToggle.classList.toggle("rotate");

// Cambia l'icona in base allo stato del menu
if (menu.classList.contains("show")) {
    menuToggle.textContent = "✕"; // Usa la croce (Unicode U+2715)
} else {
    menuToggle.textContent = "☰"; // Ritorna all'hamburger
}
});

/* -----FINE Apertura e Chiusura HAMBURGER ----- */



});



