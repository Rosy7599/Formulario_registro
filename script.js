
    const valorNombre = document.getElementById('nombre').value;
    const valorApellidos = document.getElementById('apellidos').value;
    const valorEmail = document.getElementById('email').value;
    const valorPassword = document.getElementById('password').value;


    const object = {
        nombre: valorNombre,
        apellidos: valorApellidos,
        email: valorEmail,
        password: valorPassword,
    }

    function cuentaCreada(){
        alert("Cuenta creada");  
      }
        
