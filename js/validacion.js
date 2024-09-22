function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value.trim();
    const password2 = document.getElementById("password2").value.trim();
    const terminos = document.getElementById("terminos").checked;

    // Verificar si todos los campos están completos
    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
        return;
    }
    // Verificar si la contraseña tiene al menos 6 caracteres
    if (password1.length < 6) {
        showAlertError();
        return;
    }

    // Verificar si las contraseñas coinciden
    if (password1 !== password2) {
        showAlertError();
        return;
    }

    // Verificar si se ha aceptado los términos y condiciones
    if (!terminos) {
        showAlertError();
        return;
    }

    // Si todas las validaciones se cumplen, mostrar éxito
    showAlertSuccess();
});