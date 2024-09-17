function sendWhatsAppMessage() {
    // Obtener los valores del formulario
    const size = document.getElementById('size').value;
    const username = document.getElementById('username').value;
    const payment = document.getElementById('payment').value;

    // Crear el mensaje de WhatsApp
    const message = `Talle: ${size}\nNombre de Usuario: ${username}\nForma de Pago: ${payment}`;
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp
    const phoneNumber = '5493417190678'; // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir el enlace en una nueva ventana
    window.open(whatsappUrl, '_blank');
}