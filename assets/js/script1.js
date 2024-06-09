

const perrito = document.querySelector("#perrito");
console.log(perrito);


perrito.addEventListener("click", () => {
if(perrito.classList.contains("bordeperrito")) {

    perrito.classList.remove("bordeperrito");  
}

else{ 
    perrito.classList.add("bordeperrito")
}
})
