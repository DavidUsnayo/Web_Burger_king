let menu = document.querySelector(".responsive")
menu.addEventListener("click",function(){
    menu.style.display="none"
    let contenido = document.querySelector("main")
    contenido.style.display="none"
    cerrar.style.display="block"
    let newn = document.querySelector(".newn")
    newn.style.display="block"
})

let cerrar = document.querySelector(".cerrar")
cerrar.addEventListener("click",function(){
    cerrar.style.display="none"
    menu.style.display="block"
    let contenido = document.querySelector("main")
    contenido.style.display="block"
    menu.style.display="block"
    cerrar.style.display="none"
    
})

//parece que las variables nonson glovales 