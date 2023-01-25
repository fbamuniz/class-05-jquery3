/* O método text() é para texto. */
$("#meuTexto").click(
    function () {
        alert("Texto: " + $(this).text())
    }
)

/* O método html() retorna o conteúdo HTML, com as tags */
$("#minhasTags").click(
    function () {
        alert("Texto: " + $(this).html())
    }
)

/* O método val() é para values de input  */
$("#meuForm").click(
    function () {
        alert("Texto: " + $(this).val())
    }
)