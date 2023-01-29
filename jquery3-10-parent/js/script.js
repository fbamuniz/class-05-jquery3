//Teste 01: O método parent() aplica modificações somente no elemento acima
$("p").parent().css({"border": "3px solid green", "padding": "15px" })
$("li").parent().css({ "border": "3px solid red", "padding": "15px" })
$("ul").parent().css({ "border": "3px solid blue", "padding": "15px" })
$("div").parent().css({ "border": "3px solid black", "padding": "15px" })
$("body").parent().css({ "border": "3px solid gray", "padding": "15px" })

//Teste 02: O método parent() aplicada somente no último elemento p
//$("p").parent().css({ "border": "3px solid #f00000", "padding": "15px" })

//Teste 03: O método parents() aplica em todos os elementos acima
//$("p").parents().css({ "border": "3px solid #f00000", "padding": "15px" })

//Teste 04: O método parentsUntil() aplica de um determinado elemento até outro
//$("p").parentsUntil("div").css({ "border": "3px solid #f00000", "padding": "15px" })