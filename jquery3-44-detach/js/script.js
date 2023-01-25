// O método detach() remove os elementos selecionados, incluindo todos os nós de texto e filhos. No entanto, ele mantém dados e eventos. Este método também mantém uma cópia dos elementos removidos, o que permite que sejam reinseridos posteriormente

let itens = $(".item")
let i = 0
//console.log(itens)

$("#btnMudar").click(() => {
    let item = $(itens[i]).detach()
    i++
    $("#caixa2").append(item)
})

$("#btnReset").click(() => {
    for (let i = 0; i < itens.length; i++) {
        let item = $(itens[i]).detach()
        $("#caixa").append(item)
    }
    i = 0
})