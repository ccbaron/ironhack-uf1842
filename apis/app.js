// Esperamos a que el DOM esté completamente cargado

document.addEventListener('DOMContentLoaded', function () {

    // Paso 1: Obtenemos todos los elementos que necesitamos
    const usernameInput = document.getElementById('username');
    const getInfoButton = document.querySelector('button');
    const fullNameCell = document.getElementById('fullName');
    const bioCell = document.getElementById('bio');
    const profilePictureImg = document.getElementById('profilePicture');
    const homeUrlCell = document.getElementById('homeUrl');

    // Paso 2: Añadimos el evento click al botón
    getInfoButton.addEventListener('click', function () {

        // Paso 3: Obtenemos el nombre de usuario del input
        const username = usernameInput.value.trim();
        console.log('Username ingresado:', username);

        if (!username) {
            alert('Por favor ingresa un nombre de usuario');
            return;
        }

        // Paso 4: Hacemos la llamada a la API de GitHub
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                console.log('Respuesta recibida:', response);

                // Paso 5: Verificamos si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error('Usuario no encontrado');
                }
                return response.json(); // Convertimos la respuesta a JSON
            })
            .then(data => {
                console.log('Datos recibidos:', data);

                // Paso 6: Mostramos los datos en la tabla
                fullNameCell.textContent = data.name || 'No disponible';
                bioCell.textContent = data.bio || 'No disponible';

                // Imagen de perfil
                if (data.avatar_url) {
                    profilePictureImg.src = data.avatar_url;
                    profilePictureImg.alt = `Foto de perfil de ${username}`;
                }

                // Enlace al perfil
                if (data.html_url) {
                    const link = document.createElement('a');
                    link.href = data.html_url;
                    link.textContent = data.html_url;
                    link.target = '_blank'; // Para abrir en nueva pestaña
                    homeUrlCell.innerHTML = ''; // Limpiamos por si había algo antes
                    homeUrlCell.appendChild(link);
                }
            })
            .catch(error => {
                console.error('Error:', error);

                // Paso 7: Manejo de errores (BONUS)
                alert('Error: ' + error.message);
            });
    });
});