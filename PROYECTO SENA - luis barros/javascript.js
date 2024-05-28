function validateForm(event) {
    event.preventDefault(); // Prevenir el envío del formulario para validar primero formulario de REGISTRO

    // Obtener valores de los campos
    const nombreCompleto = document.getElementById('InputNombreCompleto').value;
    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('InputPassword').value;
    const confirmarPassword = document.getElementById('InputConfirmarPassword').value;
    const celular = document.getElementById('InputCelular').value;
    const check = document.getElementById('exampleCheck1').checked;

    // Validaciones
    if (!nombreCompleto) {
        alert('Por favor, introduzca su nombre completo.');
        return false;
    }
    if (!email) {
        alert('Por favor, introduzca un correo electrónico.');
        return false;
    }
    if (!password) {
        alert('Por favor, introduzca una contraseña.');
        return false;
    }
    if (password !== confirmarPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }
    if (!celular) {
        alert('Por favor, introduzca su número de celular.');
        return false;
    }
    if (!check) {
        alert('Por favor, marque la casilla de verificación.');
        return false;
    }

    // Si la validación es exitosa, enviar el formulario
    const formData = {
        nombreCompleto: nombreCompleto,
        email: email,
        password: password,
        celular: celular,
        check: check
    };

    fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(data => {
            alert('Formulario enviado correctamente');
            console.log(data);
        }).catch(error => {
            console.error('Error:', error);
        });

    return true;
}

// FIN VALIACION FORMULARIO REGISTRO



// VALIDACION DATOS DE FORMULARIO DE INGRESO