// Uma calculadora escrita em Javascript
// Aplicada uma arrow function ()=>{}, que é o mesmo que function(){}
let btn_somarjs = document.getElementById("calcJscript").addEventListener("click", () => {
    let v1 = parseInt(document.getElementById("num1").value);
    let v2 = parseInt(document.getElementById("num2").value);
    soma = v1 + v2;
    let res = document.getElementById("resultado").innerHTML = soma;
})

// Uma calculadora escrita em jQuery
$("#calcJquery").click(() => {
    let v1 = parseInt($("#num1").val())
    let v2 = parseInt($("#num2").val())
    let soma = v1 + v2
    $("#resultado").text(soma)
})