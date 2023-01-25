// O método replaceAll() substitui o elemento da esquerda pelo da direita
$("#btn_replace1").click(() => {
    $("<p>Substituido</p>").replaceAll(".cor")
})

$("#btn_replace2").click((e) => {
    $("<div>" + $(e.currentTarget).text() + "</div>").replaceAll(e.currentTarget)
})

// O método replaceWith() substitui o elemento da direita pelo da esquerda
$("#btn_replace3").click(() => {
    $(".cor").replaceWith("<p>Substituido</p>")
})

$("#btn_replace4").click((e) => {
    $(e.currentTarget).replaceWith("<div>" + $(e.currentTarget).text() + "</div>")
})