var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha") 
var bruna = window.document.getElementById("bruna")
var setaEquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaEquerda.style = "display:flex; margin-top: 55px;"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda(){
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaEquerda.style = "display: none; margin-top: 55px;"
    setaDireita.style = "display: flex"
}