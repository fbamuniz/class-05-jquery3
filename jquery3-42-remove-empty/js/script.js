let r, g, b
let num = 1
$("#btnAdicionar").click(() => {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    $("#caixa").append("<div id='d" + num + "' class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'>" + num + "</div>")
    num++
})

// O método remove() remove um elemento específico
$("#btnRemover").click(() => {
    $("#d" + (num - 1)).remove()
    num--
})

// O método empty() remove todos os elementos especificados
$("#btnRemoverConteudo").click(() => {
    $("#caixa").empty()
})