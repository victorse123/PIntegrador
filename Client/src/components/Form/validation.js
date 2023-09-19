const validator = (data) => {
    let errors = {};
    //Email Validations
    if (!data.email.includes("@")){
        errors.e1 = "Ingresa un correo Valido";
    }
    if (!data.email){
        errors.e2 = "Ingresa un email";
    }
    if (data.email.length > 35){
        errors.e3 = "No puede contener mas de 35 caracteres";
    }
    //Password Validations 
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos un número'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Debe tener mas de 6 y menos de 10 caracteres.'
    }

    return errors;
}
export default validator 


