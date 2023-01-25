// O método fadeTo() configura o tempo e a opacidade aplicada ao elemento

$(".itemMenu").mouseover(
    function () {
        $(this).fadeTo(200, 0.3);
    })

$(".itemMenu").mouseout(
    function () {
        $(this).fadeTo(1000, 1);
    })