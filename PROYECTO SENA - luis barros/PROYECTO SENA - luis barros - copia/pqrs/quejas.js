document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    if (name && email && type && description) {

        document.getElementById('responseMessage').textContent = 'Gracias por tu queja. La hemos recibido y estamos trabajando en ello.';
        document.getElementById('responseMessage').style.color = 'green';
    } else {
        document.getElementById('responseMessage').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('responseMessage').style.color = 'red';
    }
});