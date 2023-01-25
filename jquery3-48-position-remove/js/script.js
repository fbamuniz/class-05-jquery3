// O método removeAttr() exclui o atributo do elemento
$("#btnRemoverAtributo").click(() => {
    $("#caixa").removeAttr("style")
})

// O método removeClass() exclui a classe do elemento
$("#btnRemoverClasse").click(() => {
    $("#caixa").removeClass("borda")
})

// O método addClass() adiciona uma nova a classe ao elemento
$("#btnAdicionarClasse").click(() => {
    $("#caixa").addClass("borda")
})

$("#btnPosition").click(() => {
    let pt = $("#caixa").position().top
    let pl = $("#caixa").position().left
    let ot = $("#caixa").offset().top
    let ol = $("#caixa").offset().left
    alert("top:" + pt + "\nleft:" + pl + "\ntop:" + ot + "\nleft:" + ol)
})

$("#top").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").offset({ "top": valor })
})

$("#left").change((e) => {
    let valor = document.getElementById(e.target.id).value
    $("#caixa").offset({ "left": valor })
})