// O método click() tem a mesma funcionalidade do event click no HTML5
$("#btnGreen").click(() => {
    $("#div-1").css({
        "background-color": "green",
        "color": "#000000"
    })
})

// O método css() permite agrupar um conjunto de propriedades CSS
$("#btnRed").click(() => {
    $("#div-1").css({
        "background-color": "red",
        "color": "#000000"
    })
})

//A sintaxe padrão da propriedade é: "propriedade":"valor",
$("#btnBlue").click(() => {
    $("#div-1").css({
        "background-color": "blue",
        "color": "#000000"
    })
})