// scripts.js

// Función para manejar el envío del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Gracias por tu mensaje, " + name + "! Nos pondremos en contacto contigo pronto.");
    this.reset(); // Limpia el formulario
});

