// Teste 1: O método siblings() aplica o efeito em um irmão específico
$("h3").siblings("p").css({ "border": "1px solid #f00" })

// Teste 2: O método next() aplica o efeito no irmão direto (abaixo)
//$("i").next().css({ "border": "1px solid #f00" })

// Teste 3: O método prev() aplica o efeito no irmão direto (acima)
//$("i").prevAll().css({ "border": "1px solid #f00" })

// Teste 4: O método prevAll() aplica o efeito em todos os irmãos direto (abaixo)
//$("h3").nextAll().css({ "border": "1px solid #f00" })

// Teste 5: O método prevAll() aplica o efeito em todos os irmãos direto (acima)
//$("p").prevAll().css({ "border": "1px solid #f00" })

// Teste 6: O método prevUntil() aplica o efeito entre dois elementos irmãos (acima)
//$("h2").prevUntil("h3").css({ "border": "1px solid #f00" })

// Teste 7: O método nextUntil() aplica o efeito entre dois elementos irmãos (abaixo)
// $("i").nextUntil("p").css({ "border": "1px solid #f00" })