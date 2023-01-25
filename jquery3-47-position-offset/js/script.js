// O método offset() define ou retorna as coordenadas de deslocamento para os elementos selecionados

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