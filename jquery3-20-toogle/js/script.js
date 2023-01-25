//O método toggle() substitui o hide/show
$("#btnHideShow").click(
    function () {
        $("#div-1").toggle()
        if ($("#div-1").is(":visible")) {
            $("#btnHideShow").text("Ocultar")
        } else {
            $("#btnHideShow").text("Mostrar")
        }
    }
)