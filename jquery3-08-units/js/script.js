/* Os métodos innerWidth(), innerHeight(), outerWidth() e outerHeight() retornam o espaçamento total do tamanho, padding, border e margin em pixels do elemento */

let divCheck = $("#div-1")
$("#legenda").html(
    "Width: " + divCheck.width() + //largura
    "<br>Height: " + divCheck.height() + //altura
    "<br>InnerWidth: " + divCheck.innerWidth() + //2x largura do padding
    "<br>InnerHeight: " + divCheck.innerHeight() + //2x altura do padding
    "<br>OuterWidth: " + divCheck.outerWidth() + //2x largura da border
    "<br>OuterHeight: " + divCheck.outerHeight() + //2x altura da border
    "<br>OuterWidth(true): " + divCheck.outerWidth(true) + //2x largura da margin
    "<br>OuterHeight(true): " + divCheck.outerHeight(true) //2x altura da margin
)

/* Obs: Lembre-se que não é possível visualizar a margem, logo as propriedades OuterWidth(true) e OuterHeight(true)) precisam ser interpretadas de acordo com a distância do objeto "div-1" e a margem esquerda */