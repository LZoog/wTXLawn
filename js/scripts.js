
$(function(){

  /* STICKY NAV */
  var headHeight = $('#top').outerHeight(true);

  function sticky() {
    if ($(window).scrollTop() >= headHeight) {
      $('nav').addClass('sticky');
      $('#fence').css('margin-top', $('nav').outerHeight(true)+'px');
    } else {
      $('nav').removeClass('sticky');
      $('#fence').css('margin-top', '0px');
    }
  }
  sticky();

  $(window).scroll(function(){
    sticky();
  });

  /* ACTIVE STATE NAV */
  var anchors = $('#top, #about, #grasses, #contact');
  //var currentScroll = 

  // navHeight = $('nav')
  // , nav_height = nav.outerHeight();
  //
  // $(window).on('scroll', function () {
  //   var cur_pos = $(this).scrollTop();
  //
  //   sections.each(function() {
  //     var top = $(this).offset().top - nav_height,
  //         bottom = top + $(this).outerHeight();
  //
  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       nav.find('a').removeClass('active');
  //       sections.removeClass('active');
  //
  //       $(this).addClass('active');
  //       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
  //     }
  //   });
  // });

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
