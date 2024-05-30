document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const trackingNumber = document.getElementById('trackingNumber').value;

    if (trackingNumber) {



        const trackingInfo = `Estado del pedido con número de guía ${trackingNumber}: En tránsito. Fecha estimada de entrega: 2024-06-01.`;

        document.getElementById('trackingInfo').textContent = trackingInfo;
        document.getElementById('trackingInfo').style.color = 'blue';
    } else {
        document.getElementById('trackingInfo').textContent = 'Por favor, ingresa un número de guía válido.';
        document.getElementById('trackingInfo').style.color = 'red';
    }
});