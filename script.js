function ingresar(){
    const valorNombre = document.getElementsById('nombre').value;
    const valorApellidos = document.getElementsById('apellidos').value;
    const valorEmail = document.getElementsById('email').value;
    const valorPassword = document.getElementsById('password').value;


    const object = {
        nombre: valorNombre,
        apellidos: valorApellidos,
        email: valorEmail,
        password: valorPassword,
    }

    function cuentaCreada(){
        alert("Cuenta creada");  
      }

}