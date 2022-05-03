function cuentaCreada(){
    const valorNombre = document.getElementById('nombre').value;
    const valorApellidos = document.getElementById('apellidos').value;
    const valorEmail = document.getElementById('email').value;
    const valorPassword = document.getElementById('password').value;

    if(valorNombre === "" ){
        alert('Completar campo Nombre');
        alert('Completar campo Apellidos');
        alert('Completar campo Email');
        alert('Completar campo Password');
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
        
