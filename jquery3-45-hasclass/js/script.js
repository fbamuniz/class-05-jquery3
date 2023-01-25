//O método hasClass() verifica o nome de classes

//O e é de event
$(".btnFechar").click((e) => {
    //Aperte F12 e vá no console
    //console.log(e.target.id)
    $("#" + e.target.id).parent().addClass("ocultar")
})

$("#btnReset").click((e) => {
    let itens = $(".caixa")
    for (let i = 0; i < itens.length; i++) {
        let item = $(itens[i])
        //O itens na posição i possui a classe ocultar, então... Ele retorna true ou false
        if (item.hasClass("ocultar")) {
            item.removeClass("ocultar")
        }
    }
})