function cuentaCreada(){
    const valorNombre = document.getElementById('nombre').value;
    const valorApellidos = document.getElementById('apellidos').value;
    const valorEmail = document.getElementById('email').value;
    const valorPassword = document.getElementById('password').value;

    if(valorNombre === "" && valorApellidos === "" && valorEmail === "" && valorPassword){
        alert('Llena el formulario');
        
        return;
    }


    const object = {
        nombre: valorNombre,
        apellidos: valorApellidos,
        email: valorEmail,
        password: valorPassword,
    }
    
    
    alert(JSON.stringify(object));
}
        
