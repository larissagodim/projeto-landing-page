var setaDireita = window.document.getElementById("seta-direita")

var Leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParadireita() {
    Leonardo.style ="display:none"
    bruna.style ="display: flex"
    setaDireita.style ="display: none"
    setaEsquerda.style = " display: flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    bruna.style ="none"
    setaDireita.style ="display: flex"
    setaEsquerda.style ="display: none"
}
