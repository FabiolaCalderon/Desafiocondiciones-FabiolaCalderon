const digitoSecreto1 = 9;
const digitoSecreto2 = 1;
const digitoSecreto3 = 1;
const digitoSecreto4 = 7;
const digitoSecreto5 = 1;
const digitoSecreto6 = 4;


const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const input5 = document.querySelector("#input5");
const input6 = document.querySelector("#input6");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado")

boton.addEventListener("click", () => {
 if(
    input1.value == digitoSecreto1 &&
    input2.value == digitoSecreto2 &&
    input3.value == digitoSecreto3
)  {
    resultado.innerHTML = "Password 1 Correcto";
    console.log("Password 1 Correcto");
    

} else if(
    input1.value == digitoSecreto4 &&
    input2.value == digitoSecreto5 &&
    input3.value == digitoSecreto6
)  {
    resultado.innerHTML = "Password 2 Correcto";
    console.log("Password 2 Correcto");
    

} else { 
    resultado.innerHTML = "Password Incorrecto";
    console.log("Password Incorrecto")
}

})