
$(function(){

  /* STICKY NAV */
  var headHeight = $('#top').height() + $('nav').height() + 28;

  function sticky() {
    if ($(window).scrollTop() >= headHeight) {
      $('nav').addClass('sticky');
      $('#fence').css('margin-top', $('nav').height()+21+'px');
    } else {
      $('nav').removeClass('sticky');
      $('#fence').css('margin-top', '0px');
    }
  }
  sticky();

  $(window).scroll(function(){
    sticky();
  });

  /* SMOOTH SCROLLING */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
