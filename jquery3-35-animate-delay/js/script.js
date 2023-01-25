// O método delay() atrasa a execução de um outro determinado método

$("#btnMais").click(
    function () {
        $("#area").delay(2000).animate({ width: "500px", height: "500px" }, { duration: 200 })
    }
)

$("#btnMenos").click(
    function () {
        $("#area").animate({ width: "200px" }).animate({ height: "200px" }, { duration: 200 })
    }
)