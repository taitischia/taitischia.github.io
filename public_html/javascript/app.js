/* thank-etc-ok.com */

$(document).ready(function() {
  $(document).scroll(function() {
    /* Change menu */
    var offset = -400;
    var fadeTime = 300;
    var y1 = $('#first').offset().top + offset;
    offset = $(window).height();

    var menuTimeout = setTimeout(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - offset) {
        $('.first').hide();
        $('.second').show();
      } else {
        $('.second').hide();
        $('.first').show();
      }

      if ($(window).scrollTop() <= y1 || $(window).scrollTop() + $(window).height() >= $(document).height() - offset) {
        $('header').fadeIn(fadeTime);
      } else {
        $('header').fadeOut(fadeTime);
      }
    }, 300);
  });

  /* AJAX subscribe */
  $('#subscribe').submit(function (e) {
    e.preventDefault();
    $('button').html('Subscribing...');
    $.getJSON(
      this.action + "?callback=?",
      $(this).serialize(), function (data) {
        if (data.Status === 400) {
          $('button').html('<span style="color: red;">Wha?</span>');
        } else { // 200
          $('button').html('Subscribed');
        }
      }
    );
  });

  /* Get latest blog title and replace */
  $.get('php/getBlog.php', function(data) {
    $('#blog-latest').html(data);
  });

  /* Random first section */
  var i = Math.floor(Math.random() * $('.random').length);
  $('.random').eq(i).show();

  /* Random credit */
  var i = Math.floor(Math.random() * $('.random-2').length);
  $('.random-2').eq(i).show();

  /* Last section center */
  $('#last').css({'padding-bottom': $(window).height() / 2 - 110 + 'px'});

  /* Check if mobile */
  if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').addClass('mobiles'); 
  }

  $('body').fadeIn();

});

$(window).load(function() {
    });
