//O método finish() cancela a execução de outro método

$("#btnMais").click(
    function () {
        $("#area").animate({ width: "600px" }, { duration: 3000 })
    }
)
$("#btnMenos").click(
    function () {
        $("#area").animate({ width: "200px" }, { duration: 3000 })
    }
)
$("#btnFim").click(
    function () {
        $("#area").finish()
    }
)