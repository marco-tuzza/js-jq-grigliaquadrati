for (var i = 0; i < 25; i++) {
    $(".container").append("<div class=quadrato><p></p></div>")
}


$('.quadrato p').each(function() {

    $(this).append(numeroRandom(0, 10));

    if (parseInt($(this).text()) % 2 == 0 && parseInt($(this).text()) != 0 ) {

        $(this).addClass('rosso');
    } else if (parseInt($(this).text()) == 0) {

        $(this).addClass('verde');
    }
});

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
