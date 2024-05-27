import { IloginData, IRegisterData } from './types/types';

export function validateLogin(data: IloginData){
    const errors:IloginData = {
        email:"",
        password:""
    };
    
    const regExEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if(!regExEmail.test(data.email)){
        errors.email = "Direcion de correo invalida." 
    }else{
        errors.email = ""
    }
    

    return errors;
}

export function ValidateRegister (data: IRegisterData) {
    const errors: IRegisterData = {
        name:"",
        email:"",
        password:"",
        address:"",
        phone:""
        
    };
    const regexName = /^[a-zA-Z\s]+$/;
    const regexPass = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const regexPhone = /^[0-9]+$/;
    
    // Verificar si el campo "name" está vacío
    if (!regexName.test(data.name.trim())) {
        errors.name = "El formato ingresado no es correcto";
    }else{
        errors.name = "";
    }

    if (!data.email.trim()) {
        errors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "El correo electrónico no es válido";
    }

    // Verificar si el campo "password" está vacío
    if (!regexPass.test(data.password.trim())) {
        errors.password = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número";
    }

    // Verificar si el campo "adress" está vacío
    if (!data.address.trim()) {
        errors.address = "La dirección es requerida";
    }

    // Verificar si el campo "phone" está vacío
    if (!regexPhone.test(data.phone.trim())) {
        errors.phone = "Solo ingresar numeros";
    }

    return errors;
}