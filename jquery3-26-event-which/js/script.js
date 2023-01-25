//O event.which na função keydown() mostra botão pressionado no teclado ou mouse
$(document).on({
    click: () => { $("#mensagem").text(event.type + ": " + event.which) },
    keydown: () => {
        $("#mensagem").text(event.type + ": " + event.which)
        if (event.which == 13) {
            alert("Tecla ENTER pressionada")
        }
    }
})

/*
Estes são os eventos mais utilizados. Consulte outros em:
https://www.w3schools.com/jquery/jquery_ref_events.asp
*/