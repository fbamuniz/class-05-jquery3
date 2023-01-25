//O método ready() espera a página ser carregada para só então executar o script JQuery

//Modo padrão
/*$(document).ready(rodar)
function rodar() {
    $("#texto").text("Lorem, ipsum.")
}*/

//Modo com arrow function
$(document).ready(() => { $("#texto").text("Lorem, ipsum (2).") })

