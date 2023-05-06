const angel = document.getElementById(`angel`) ;
const body = document.getElementById('body') ;
const container = document.getElementById('container') ;


angel.addEventListener(('click'),()=>{
    body.style.backgroundColor='white' ;
    body.style.transition='3s' ;
    setTimeout(()=>{
        window.location.href='./content.html'
    },4000)
})