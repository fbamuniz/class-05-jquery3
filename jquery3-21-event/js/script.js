//O método click() é ativada quando clicado na área
$("#area").click(() => {
    $("#mensagem").text("Clicou na área")
})

//O método mouseenter() é ativada quando entra na área
$("#area").mouseenter(() => {
    $("#mensagem").text("Entrou na área")
})

//O método mouseleave() é ativada quando sai da área
$("#area").mouseleave(() => {
    $("#mensagem").text("Saiu da área")
})

//O método keyup() é ativada quando digitado na input
$("#nome").keyup(()=>{
    $("#mensagem").text($("#nome").val())
})