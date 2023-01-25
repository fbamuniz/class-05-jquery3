// O método clone() copia integralmente um determinado elemento e seus filhos
$("#btnClonar").click(() => {
    $("#caixa").clone().appendTo("body")
})