document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Récupérer les valeurs des champs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Valider les informations (ici, juste un exemple simple)
        if (name && email && message) {
            // Ici, tu pourrais envoyer les données à un serveur ou un traitement supplémentaire
            responseMessage.textContent = `Merci, ${name}. Votre message a été envoyé !`;
            responseMessage.classList.remove("hidden");

            // Réinitialiser le formulaire après l'envoi
            form.reset();
        } else {
            responseMessage.textContent = "Veuillez remplir tous les champs.";
            responseMessage.classList.remove("hidden");
        }
    });
});
