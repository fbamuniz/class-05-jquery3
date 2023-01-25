// O método before() solicita a adição de um elemento antes de outro elemento
let r, g, b
num = 0
$("#btnAdicionarAntes").click(() => {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    //$("#caixa").prepend("<div class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>")
    $("#caixa").before("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'>" + num + "</div>")
    num++
})

// O método after() solicita a adição de um elemento depois de outro elemento
$("#btnAdicionarDepois").click(() => {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    //$("<div class='subcaixa' style='background-color:rgb("+r+","+g+","+b+")'>"+num+"</div>").prependTo($("#caixa"))
    $("#caixa").after("<div class='subcaixa' style='background-color:rgb(" + r + "," + g + "," + b + ")'>" + num + "</div>")
})

$("#btnAdicionarTextoAntes").click(() => {
    //$("#caixa2").prepend(" Antes ") 
    $("#caixa2").before(" Antes ")

})

$("#btnAdicionartextoDepois").click(() => {
    //$("#caixa2").append(" Depois ")
    $("#caixa2").after(" Depois ")

})