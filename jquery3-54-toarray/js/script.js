// O método toArray() retorna os elementos combinados pelo seletor jQuery como um array
let ep = $("p").toArray()
let eh = $("h4").toArray()

//console.log($("ep")

$("#btn_pxh4").click(() => {
    $("#caixa2").append(ep)
    $("#caixa1").append(eh)
})

$("#btn_h4xp").click(() => {
    $("#caixa2").append(eh)
    $("#caixa1").append(ep)
})