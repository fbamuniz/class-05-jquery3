
//O event.target.tagName resgata o elemento do objeto clicado
$(document).click((event) => {
    $("#mensagem").text("Objeto que foi clicado: " + event.target.tagName)
})