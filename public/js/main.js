console.log('bonjour le monde');
let bars = document.querySelector('.fa-bars');
let navbar = document.querySelector('.toggle')
console.log(navbar);

bars.addEventListener('click',()=>{
    bars.classList.toggle('fa-times');
    navbar.style.display='block'

})









let modal = document.querySelector('#modal-container');
let open = document.querySelector('#open');
let close = document.querySelector('#close');






close.onclick = function(e) {
    e.preventDefault()
    modal.style.display = "none";
} 

window.onclick = function(event) {
    event.preventDefault()
    if (event.target == modal) {
        modal.style.display = "none";
         
    } 
}

let btnredirect = document.querySelector('.btnredirect')
btnredirect.addEventListener('click',()=>{
        //  modal.style.display = "none";
        location.href = "/connexion"
})

