// O método fadeToggle() aplica tanto fadeIn quanto fadeOut em um mesmo elemento, não sendo necessária a utilização de dois botões

$(".itemMenu").mouseover(
    function () {
        $(this).fadeTo(200, 0.3);
    })

$(".itemMenu").mouseout(
    function () {
        $(this).fadeTo(1000, 1);
    })

$("#menuweb2").click(function () {
    $("#sub_itemMenu2").fadeToggle();
    $("#sub_itemMenu2").css("display", "flex");
})

$("#menuweb3").click(function () {
    $("#sub_itemMenu3").fadeToggle();
    $("#sub_itemMenu3").css("display", "flex");
})