
let mode = document.getElementById('mode') ;
let styleMode = document.getElementById('styleMode')
let ulrDark = './styleMode/darkMode.css'; 
let ulrLigth = './styleMode/ligthMode.css' ;
let modo =  styleMode.href=ulrLigth ;
localStorage.setItem('modo', modo) ; 
function changeMode(){
    if(localStorage.setItem(modo)){
        styleMode.href=ulrDark
    }else{
        styleMode.href=ulrLigth
    }
    localStorage.setItem(modo)
}
