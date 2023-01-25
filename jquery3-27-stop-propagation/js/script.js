//O método stopPropagation() evita que eventos sejam disparados todos de uma vez. Comente a linha 7 e 12 e descomente a 8 e 13 para testar

$("div").click(() => {
    alert("Evento disparado no div")
})

$("p").click((event) => {
    alert("Evento disparado no p")
    //event.stopPropagation(); alert("Evento disparado no p")
})

$("span").click((event) => {
    alert("Evento disparado no span")
    //event.stopPropagation(); alert("Evento disparado no span")
})