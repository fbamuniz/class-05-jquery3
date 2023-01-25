// O método slideToggle() desliza o elemento na tela, até que ele fique oculto ou retorne ao seu estado inicial no mesmo evento

$("#btnMenu").click(function () {
    $("#menus").slideToggle(2000, () => {
        if ($("#menus").is(":visible")) {
            $("#mensagem").text("Exibido")
            $("#controle").css("background", "#c0c0c0")
        } else {
            $("#mensagem").text("Oculto")
            $("#controle").css("background", "#00ff00")
        }

    })
})