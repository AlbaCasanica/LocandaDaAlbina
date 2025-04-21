
/*BOTTONE freccia*/
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        // Se l'utente ha scrollato più di 300px, fai apparire il bottone
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            // Altrimenti, nascondilo
            scrollBtn.classList.remove("show");
        }
    });

    // Quando l'utente clicca sul bottone, scorre verso l'alto
    scrollBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scorrimento morbido
        });
    });

/* Apertura e Chiusura HAMBURGER */
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Funzione per aprire/chiudere il menu
menuToggle.addEventListener("click", () => {
menu.classList.toggle("show"); // Aggiungi o rimuovi la classe "show"

// Cambia l'icona in base allo stato del menu
if (menu.classList.contains("show")) {
    menuToggle.textContent = "✕"; // Usa la croce (Unicode U+2715)
} else {
    menuToggle.textContent = "☰"; // Ritorna all'hamburger
}
});




});



