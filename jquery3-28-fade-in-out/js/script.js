// O método fadeIn() aplica opacidade gradativa mínima ao elemento
$("#btnShow").click(
    function () {
        $("#area").fadeIn();
    }
)

// O método fadeOut() aplica opacidade gradativa máxima ao elemento
$("#btnHide").click(
    function () {
        $("#area").fadeOut(1000);
    }
)