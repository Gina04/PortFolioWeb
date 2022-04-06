
export function valida(input){
    const tipoInput = input.dataset.tipo //obtenemos la coleccion de todos los datas
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    console.log(input)
    if(input.validity.valid){
        input.parentElement.classList.remove("input-contacto-invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML= ""
    }else{
        input.parentElement.classList.add("input-contacto-invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML= mostrarMensajeDeError(tipoInput, input)
    }

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "customError",
    ];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio",
        customError: "Debe contener maximo 50 caracteres",
    },

    email:{
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch:"El correo no es valido",
    },
    asunto:{
        valueMissing:"El campo asunto no puede estar vacio",
        customError:"Debe contener maximo 50 caracteres"
    },
    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacio",
    },

};

//objeto con los atributos de cada input
const validadores={
    nombre:(input) => validarLongitudInput(input),
    asunto:(input) => validarLongitudInput(input),
};


function mostrarMensajeDeError(tipoInput, input){
    let mensaje = " ";
    tipoDeErrores.forEach((error) =>{
        if(input.validity[error]){
            console.log(tipoInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoInput][error]);
            mensaje = mensajesDeError[tipoInput][error];
        }
    });

    return mensaje
}

function validarLongitudInput(input){
    const unInput= input.value
    let msj = " "
    if(unInput.length > 50){  
        msj = "Debe contener maximo 50 caracteres"
    }
    //input.setCustomValidity(msj);
}

