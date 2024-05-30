document.getElementById('companyForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate fields
    let isValid = true;

    // Nombre de la Empresa
    const companyName = document.getElementById('company_name').value;
    if (companyName.trim() === "") {
        isValid = false;
        showError('company_name_error', 'El nombre de la empresa es requerido.');
    }

    // Correo Electrónico
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        showError('email_error', 'Correo electrónico no válido.');
    }

    // Contraseña
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        isValid = false;
        showError('password_error', 'La contraseña debe tener al menos 6 caracteres.');
    }

    // Confirmar Contraseña
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        isValid = false;
        showError('confirm_password_error', 'Las contraseñas no coinciden.');
    }

    // Dirección
    const address = document.getElementById('address').value;
    if (address.trim() === "") {
        isValid = false;
        showError('address_error', 'La dirección es requerida.');
    }


    // Ciudad
    const ciudad = document.getElementById('ciudad').value;
    if (ciudad.trim() === "") {
        isValid = false;
        showError('ciudad_error', 'La ciudad es requerida.');
    }

    // Barrios
    const barrio = document.getElementById('barrio').value;
    if (barrio.trim() === "") {
        isValid = false;
        showError('barrio_error', 'el barrio es requerida.');
    }

    // Teléfono
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/; // Adjust pattern as needed
    if (!phonePattern.test(phone)) {
        isValid = false;
        showError('phone_error', 'Número de teléfono no válido.');
    }

    // Sector
    const sector = document.getElementById('sector').value;
    if (sector === "") {
        isValid = false;
        showError('sector_error', 'Seleccione un sector.');
    }

    // Descripción
    const description = document.getElementById('description').value;
    if (description.trim() === "") {
        isValid = false;
        showError('description_error', 'La descripción es requerida.');
    }

    // If all fields are valid, submit the form
    if (isValid) {
        this.submit();
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