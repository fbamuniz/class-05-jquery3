//O método filter() permite uma nova formatação a partir da busca da classe (igual ao nome buscado)
("p").filter(".borda").css({
    "color": "#ff0000"
})

//O método note() permite uma nova formatação a partir da busca da classe (diferente do nome buscado)
$("p").not(".borda").css({
    "color": "#ff0000"
})