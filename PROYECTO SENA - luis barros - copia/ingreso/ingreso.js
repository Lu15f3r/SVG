document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate fields
    let isValid = true;

    // Cédula o Razón Social
    const username = document.getElementById('username').value;
    if (username.trim() === "") {
        isValid = false;
        showError('username_error', 'El campo es requerido.');
    }

    // Contraseña
    const password = document.getElementById('password').value;
    if (password.trim() === "") {
        isValid = false;
        showError('password_error', 'La contraseña es requerida.');
    }

    // If all fields are valid, submit the form (for demonstration purposes)
    if (isValid) {
        alert('Formulario enviado con éxito!');
        // Uncomment the line below to actually submit the form
        // this.submit();
    }
});

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.textContent = '';
    });
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}