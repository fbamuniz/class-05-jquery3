//O método on() permite agrupar vários eventos em um único decorador
$("#area").on({
    click: () => { $("#mensagem").text("Clicou") },
    dblclick: () => { $("#mensagem").text("Clicou duas vezes") },
    mouseenter: () => { $("#mensagem").text("Entrou") },
    mouseleave: () => { $("#mensagem").text("Saiu") },
})
//O método trigger() permite ativar eventos de formas diferentes
$("#area").trigger("dblclick")

//O método trigger() ativou o evento mouseleave a partir dO método click()
$("#area2").click(() => {
    $("#area").trigger("mouseenter")
})