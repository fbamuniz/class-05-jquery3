// O método position() retorna a posição do elemento (top e left)
$("#btnPosition").click(() => {
    let t = $("#caixa").position().top
    let l = $("#caixa").position().left
    alert("top:" + t + " left:" + l)
})

// O evento change() é acionado quando o valor de um elemento é alterado
$("#top").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").css({ "top": valor + "px" })
})
$("#left").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").css({ "left": valor + "px" })
})