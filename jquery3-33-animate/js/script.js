// O método animate() possibilita movimentar elementos

$("#btnMais").click(
    function () {
        $("#area").animate({ width: "500px", height: "500px" }, { duration: 200 })
    }
)
$("#btnMenos").click(
    function () {
        $("#area").animate({ width: "200px" }).animate({ height: "200px" }, { duration: 200 })
    }
)
$("#btnDireita").click(
    function () {
        $("#area").animate({ left: "500px" }).animate({ height: "200px" }, { duration: 1000, complete: () => { alert("Fim da movimentação") } })
    }
)
$("#btnEsquerda").click(
    function () {
        $("#area").animate({ left: "0px" }, { duration: 1000 })
    }
)