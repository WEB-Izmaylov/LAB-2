$(window).on('load', function () {
  $v = 18 % 6 + 1;
  setTimeout(function () {
    alert("Варіант: " + $v);
  }, 100);
  $("button").on("click", function () {
    calculate();
  });
});

function calculate() {
  katet = parseFloat($('#katet').val());
  gipo = parseFloat($('#gipo').val());
  console.log("katet" + katet + "\tgipo" + gipo);
  if (katet >= 0 && gipo >= 0 && katet != '' && gipo != '' && gipo>katet) {
    result = Math.sqrt(gipo ** 2 - katet ** 2).toFixed(3);
    $('.result-box').css('background-color', 'forestgreen');
    $('#message').text('Результат: ');
    $('#result').text(result);
  }
  else {
    $('.result-box').css('background-color', 'indianred');
    $('#message').text('Помилка: ');
    $('#result').text('не правильні сторони!');
  }
}