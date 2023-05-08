const angel = document.getElementById(`angel`) ;
const body = document.getElementById('body') ;
const container = document.getElementById('container') ;
const span = document.getElementById('angelSpan')

let words=['HOLA', 'WORLD', 'HELLO'] ;
let indice = 0
function animation(){
    span.textContent=words[indice]
    
    indice= (indice +1) % words.length
}

setInterval(animation , 2000)

function creatSpan(){
    for(let i=0 ; i<=355 ; i++){
        let div = document.createElement('div')
        div.className='span'
        for(let j=8 ; j<=Math.round(Math.random()*200); j++){
            div.style=`--i:${j}`
        }
        container.appendChild(div)
    }
}
creatSpan()

function content(){
    angel.addEventListener(('click'), ()=>{
        body.style.backgroundColor='black'
        body.style.transition='4s';
        setTimeout(()=>{
            window.location.href='./content.html'
        },4000)
        
    })
}
content()