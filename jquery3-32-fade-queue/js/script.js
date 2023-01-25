//O método queue() possibilita visualizar numericamente a fila de funções que serão executadas

const cx = $("#area")
$("#btnMais").click(
    function () {
        $("#area").animate({ width: "500px" }, { duration: 5000, complete: () => { $("#mensagem").text(cx.queue().length) } })
        $("#mensagem").text(cx.queue().length)
    }
)
$("#btnMenos").click(
    function () {
        $("#area").animate({ width: "100px" }, { duration: 5000, complete: () => { $("#mensagem").text(cx.queue().length) } })
        $("#mensagem").text(cx.queue().length)
    }
)
$("#btnFim").click(
    function () {
        $("#area").finish()
    }
)