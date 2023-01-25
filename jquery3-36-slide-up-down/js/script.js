// Os métodos slideUp() e slideDown() deslizam o elemento na tela, até que ele fique oculto ou retorne ao seu estado inicial

$("#btnCima").click(function () {
    $("#menus").slideUp(2000, () => {
        $("#mensagem").text("Oculto")
    })
})
$("#btnbaixo").click(function () {
    $("#menus").slideDown(() => {
        $("#mensagem").text("Exibido")
    })
})