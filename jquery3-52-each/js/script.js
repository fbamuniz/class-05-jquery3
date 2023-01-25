// O método each() especifica (percorre) uma função a ser executada para cada elemento correspondente.

$("#bt_each").click(() => {
    $("p").each(function () {
        alert($(this).text())
    })
})

$("#bt_cor").click(() => {
    $("p").each(function () {
        $(this).addClass("cor")
    })
}) 