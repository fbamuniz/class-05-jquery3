// O valor toggle modifica a propriedade até que ela desapareça ou reapareça 

$("#btnTamanho").click(
    function () {
        $("#area").animate({ width: "toggle", height: "toggle" }, { duration: 2000 })
    }
)
$("#btnShowHide").click(
    function () {
        $("#area").animate({ opacity: "toggle" }, { duration: 2000 })
    }
)