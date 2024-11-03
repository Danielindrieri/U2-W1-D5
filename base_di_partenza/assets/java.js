const navbar=document.querySelector("nav")

window.addEventListener("scroll",function(){
if(window.scrollY > 50) {
    navbar.classList.add("scrolly")
}else {
    navbar.classList.remove("scrolly")
}
})