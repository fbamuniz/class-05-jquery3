/* O método length() retorna a quantidade de vezes que um determinado elemento HTML foi utilizado */
$("#btn_p").click((e) => {
    alert($("p").length)
})

$("#btn_h1").click(function () {
    alert($("h1").length)
})