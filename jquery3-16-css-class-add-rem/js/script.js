// O método removeClass() remove uma classe CSS
$("#btnGreen").click(() => {
    $("#div-1").removeClass("azul")
    $("#div-1").removeClass("vermelho")
    $("#div-1").addClass("verde")
})

// O método addClass() adiciona uma classe CSS
$("#btnRed").click(() => {
    $("#div-1").removeClass("azul")
    $("#div-1").removeClass("verde")
    $("#div-1").addClass("vermelho")
})

$("#btnBlue").click(() => {
    $("#div-1").removeClass("verde")
    $("#div-1").removeClass("vermelho")
    $("#div-1").addClass("azul")
})