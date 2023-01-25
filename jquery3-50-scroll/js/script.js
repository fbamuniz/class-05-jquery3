//O método scrollLeft() define ou retorna a posição da barra de rolagem horizontal para os elementos selecionados
$("#rolar_esq").click(() => {
    $("#texto").scrollLeft(150)
})

//O método scrollTop() define ou retorna a posição vertical da barra de rolagem para os elementos selecionados
$("#rolar_top").click(() => {
    $("#texto").scrollTop(150)
})

$("#pos_esq").click(() => {
    alert($("#texto").scrollLeft())
})

$("#pos_top").click(() => {
    alert($("#texto").scrollTop())
})

$("#reset").click(() => {
    $("#texto").scrollLeft(0).scrollTop(0)
})