const username=document.getElementById('username');
const password=document.getElementById('password');
const button=document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameValue = username.value.trim(); 
    const passwordValue = password.value.trim();

    if (usernameValue !== '' && passwordValue !== '') {
        Swal.fire(
            'Buen Trabajo!',
            'Iniciaste sesión exitosamente!',
            'success'
        );
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos'
        });
    }
});
