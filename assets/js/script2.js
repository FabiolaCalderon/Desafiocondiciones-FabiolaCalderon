
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const boton = document.querySelector("#boton");

const resultado = document.querySelector("#resultado");




boton.addEventListener("click", () => {
 const valor1 =Number(input1.value)
 const valor2 =Number(input2.value)
 const valor3 =Number(input3.value)

 
     
const suma = valor1+valor2+valor3;

    if(suma <= 10){ /*menor o igual*/
       resultado.innerHTML= "Llevas " +suma + " stickers";
       console.log("Llevas pocos stickers");

    }else{
        resultado.innerHTML = "Llevas demasiados Stickers";
        console.log("Llevas demasiados Stickers");
      
    }

})



    