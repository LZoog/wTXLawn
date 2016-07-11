
$(function(){

  /* STICKY NAV */
  var headHeight = $('#top').outerHeight(true);
  var navHeight = $('nav').outerHeight(true);
  function sticky() {
    if ($(window).scrollTop() >= headHeight) {
      $('nav').addClass('sticky');
      $('#logo').addClass('fade-in');
      $('#fence').css('margin-top', navHeight+'px');
    } else {
      $('nav').removeClass('sticky');
      $('#logo').removeClass('fade-in');
      $('#fence').css('margin-top', '0px');
    }
  }
  sticky();

  /* ACTIVE STATE NAV && ANIMATIONS */
  $('.benefit').each(function(){$(this).css('opacity', '0');});
  var anchors = $('#top, #about, #grasses, #contact');
  var topBenefits = $('#why').offset().top + 200;
  var bottomBenefits = topBenefits - $('#why').outerHeight(true) - 300;

  var top;
  anchors.each(function(){
    if (anchors[3]) {
      // #contact anchor
      top = $(this).offset().top - 300;
    } else {
      top = $(this).offset().top;
    }
  });

  function activeAndAnimations() {

    // benefits animation
    if ((topBenefits >= $(window).scrollTop() && $(window).scrollTop() >= bottomBenefits) && !$('.benefit').hasClass('fade-in')) {
      $('.benefit').each(function(i) {
        $(this).addClass('fade-in benefit-' + parseInt(i+1));
      });
    }
    //
    //
    //
    //     if (i === 0) {
    //       $(this).addClass('fade-in one');
    //     } else if (i === 1) {
    //       $(this).addClass('fade-in two');
    //     } else {
    //       $(this).addClass('fade-in three');
    //     }
    //   });
    // }

    // active nav
    if ($(window).scrollTop() >= top) {
      $('nav').find('a').removeClass('active');
      $('nav').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  }


  $(window).scroll(function(){
    sticky();
    activeAndAnimations();
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
