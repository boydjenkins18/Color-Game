(function() {

  var numSquares;
  var squares = document.querySelectorAll('.square');

  function homeColors() {
    $('h1').css('background', 'steelblue');
    for (var i = 0; i < squares.length; i++) {

      squares[i].style.backgroundColor = randomColors();
    }

    $('#colorDisplay').text(squares[Math.floor(Math.random() * squares.length)].style.backgroundColor);

  }


  function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  function sixSquare() {
    numSquares = 6;
    for (var sq = 0; sq < 6; sq++) {

      squares[sq].addEventListener('click', function() {

        setTimeout(() => {

          if ($(this).css('background-color') === $('#colorDisplay').text()) {

            $('h1').css('background', $(this).css('background-color'));

            for (var i = 0; i < numSquares; i++) {
              $('.square:eq(' + i + ')').css('background', $(this).css('background-color'));
            };
            $('#message').text('Correct');
            $('#reset').text('Play Again?');
          } else {
            $('#message').text('Try Again!')

            $(this).css('background', 'none')
          };
        }, 400);
      });
    };
  };

  function threeSquare() {

    numSquares = 3;
    $('#reset').text('New Colors');
    $('h1').css('background', 'steelblue');
    for (var o = 3; o < 6; o++) {
      $('.square:eq(' + o + ')').css('background', 'none');
    };
    for (var i = 0; i < 3; i++) {
      squares[i].style.backgroundColor = randomColors();
      $('#colorDisplay').text(squares[Math.floor(Math.random() * 3)].style.backgroundColor);
    };
    $('#message').text('');
    $('.hard').removeClass('selected');
    $('.easy').addClass('selected');
  };

  homeColors();
  sixSquare();

  $('.easy').on('click', threeSquare);

  $('#reset').on('click', function() {
    $('#message').text('');
    $('#reset').text('New Colors');
    if (numSquares === 3) {
      threeSquare();
    } else {
      homeColors();
      sixSquare();
    }
  });

  $('.hard').on('click', function() {
    $('#reset').text('New Colors');
    $('#message').text('');
    $('.hard').addClass('selected');
    $('.easy').removeClass('selected');
    homeColors();
    sixSquare();
  });

}());
