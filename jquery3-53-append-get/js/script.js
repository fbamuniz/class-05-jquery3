// O método append() insere o conteúdo especificado no final dos elementos selecionados.

$("#bt_get").click(() => {
    //Ir no console para testar
    //console.log($("p").get())

    //Ir no console para testar
    //let el = $("p").get()
    //console.log(el[0].id)

    $("#elementos").append($("p").get())

})