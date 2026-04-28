function somar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resp = document.getElementById("resposta")
    resp.textContent = n1 + n2
}
function subtração(){
    var n1 = document.getElementById("n3").valueAsNumber
    var n2 = document.getElementById("n4").valueAsNumber
    var resp = document.getElementById("respostasub")
    resp.textContent = n3 - n4
}
function multiplição(){
    var n1 = document.getElementById("n5").valueAsNumber
    var n2 = document.getElementById("n6").valueAsNumber
    var resp = document.getElementById("respostamlti")
    resp.textContent = n5 * n6
}
function divisao(){
    var n1 = document.getElementById("n7").valueAsNumber
    var n2 = document.getElementById("n8").valueAsNumber
    var resp = document.getElementById("respostadivi")
    resp.textContent = n7 / n8
}