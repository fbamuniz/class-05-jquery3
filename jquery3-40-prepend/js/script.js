// O método append() solicita a adição de um elemento no início em outro elemento
let r, g, b
num = 0
$("#btnAdicionar").click(() => {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    $("#caixa").prepend("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'>" + num + "</div>")
    num++
})

// O método prependTo() envia um elemento para ser adicionado no início de outro elemento
$("#btnAdicionar5").click(() => {
    for (let i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        $("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'>" + num + "</div>").prependTo($("#caixa"))
        num++
    }
})