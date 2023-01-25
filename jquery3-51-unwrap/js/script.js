
let elementos_p = $("p")
$("#bt_pacote").click(() => {
    if (elementos_p.parent().is("div")) {
// O método unwrap() remove o elemento pai dos elementos selecionados.
        elementos_p.unwrap()
    } else {
// O método wrap() agrupa os elementos HTML especificados em torno de cada elemento selecionado.
        elementos_p.wrap("<div class='pacote'></div>")
    }
})

$("#bt_pacote_tudo").click(() => {
// O método wrapAll() envolve o(s) elemento(s) HTML especificado(s) em torno de todos os elementos selecionados.
    elementos_p.wrapAll("<div class='pacote'></div>")
})

$("#bt_pacote_depois").click(() => {
// O método wrapInner() envolve o(s) elemento(s) HTML especificado(s) em torno do conteúdo (innerHTML) de cada elemento selecionado.
    elementos_p.wrapInner("<div class='pacote'></div>")
})