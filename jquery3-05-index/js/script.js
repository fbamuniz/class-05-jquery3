/* O método index() retorna o número da sequência de vezes que um determinado elemento foi utilizado */
$("p").click((e) => {
    alert($(e.currentTarget).index())
})