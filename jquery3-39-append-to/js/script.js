// O método append() solicita a adição de um elemento no final de outro elemento
let r, g, b
$("#btnAdicionar").click(() => {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    $("#caixa").append("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'></div>")
})

// O método appendTo() envia um elemento para ser adicionado no final de outro elemento
$("#btnAdicionar5").click(() => {
    for (let i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        $("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'></div>").appendTo($("#caixa"))
    }
})