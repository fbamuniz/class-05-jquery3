// O método attr(), com um único parâmetro, retorna o valor do atributo
$("#div-1").click(
    function () {
        $("h3").text("ID: " + $(this).attr("id"))
    })

// O método attr(), com dois parâmetros, altera o valor do atributo
$("#btnRed").click(
    function () {
        $("#div-1").attr("class", "vermelho")
    })

$("#btnYellow").click(
    function () {
        $("#div-1").attr("class", "amarelo")
    })