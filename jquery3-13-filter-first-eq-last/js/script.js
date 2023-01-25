//O método first() formata o primeiro elemento
$("p").first().css({
    "border": "1px solid #f00",
    "background-color": "#ffa"
})

//O método last() formata o último elemento
$("p").last().css({
    "border": "1px solid #f00",
    "background-color": "#afa"
})

//O método eq(x) formata um elemento específico da sequência
$("p").eq(1).css({
    "border": "2px solid #f00",
    "background-color": "#aaf"
})