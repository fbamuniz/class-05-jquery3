/* O método noConflict() altera o símbolo $ do seletor jQuery para qualquer outro desejado, impedindo possíveis conflitos */
let pw = $.noConflict()

pw("p").click((e) => {
    alert(pw(e.currentTarget).index())
})

pw("h4").click(function () {
    alert(pw(this).index())
})