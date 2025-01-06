// Cargar navbar.html en el div con id "navbar"
document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la navbar:', error));
});

// Cargar footer.html en el div con id "footer"
document.addEventListener("DOMContentLoaded", function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
});

// Cargar form_cotizacion.html en el div con id "form_cotizacion" si existe
const formCotizacion = document.getElementById('formCotizacion');
if (formCotizacion) {
    document.addEventListener("DOMContentLoaded", function () {
        fetch('form_cotizacion.html')
            .then(response => response.text())
            .then(data => {
                formCotizacion.innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el formulario de cotización:', error));
    });
}