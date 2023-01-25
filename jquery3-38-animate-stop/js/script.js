$("#btnAnimar").click(function () {
    $("#area").animate({ left: 300 }, { duration: 2000 })
    $("#area").animate({ top: 300 }, { duration: 2000 })
    $("#area").animate({ left: 0 }, { duration: 2000 })
    $("#area").animate({ top: 50 }, { duration: 2000 })
})

// O método stop() cancela a execução do evento e pula para o próximo, exatamente do mesmo ponto
$("#btnProximo").click(function () {
    $("#area").stop()
})

// O método stop(true, false) limpa a fila de eventos, permitindo iniciar de onde parou
$("#btnParar").click(function () {
    $("#area").stop(true, false)
})

// O método stop(false, true) cancela a execução do evento e pula para o próximo, considerando os valores pré-determinados
$("#btnFim").click(function () {
    $("#area").stop(false, true)

})