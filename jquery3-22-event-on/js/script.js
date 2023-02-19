//O método on() permite o agrupamento de eventos e um único construtor
$("#area").on({
    click: () => { $("#mensagem").text("Clicou") },
    dblclick: () => { $("#mensagem").text("Clicou duas vezes") },
    mouseenter: () => { $("#mensagem").text("Entrou") },
    mouseleave: () => { $("#mensagem").text("Saiu") },
})   