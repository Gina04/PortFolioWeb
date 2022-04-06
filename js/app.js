import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //listo todos los inputs

inputs.forEach(input =>{ // a cada input de la lista le aplico el addevenListener blur
    input.addEventListener('blur', (input)=>{
        valida(input.target);
    })
})                                                    