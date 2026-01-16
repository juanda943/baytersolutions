console.log("WhatsApp JS cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formWhatsApp");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value || "No proporcionado";
            const servicio = document.getElementById("servicio").value || "No especificado";
            const mensaje = document.getElementById("mensaje").value;

            const texto = 
`Hola, me gustaría recibir asesoría tecnológica:

Nombre: ${nombre}
Correo: ${email}
Teléfono: ${telefono}
Servicio de interés: ${servicio}

Mensaje:
${mensaje}`;

            const numeroWhatsApp = "573212352568";
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(url, "_blank");
        });
    }

});
