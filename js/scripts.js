
$(function(){

  var a = $(window).scrollTop();

  // set opacity to 0 with JS instead of CSS b/c animations are done with JS
  $('.benefit').each(function(){$(this).css('opacity', '0');});

  /* variables for active nav & animations */
  var anchors = $('#top, #about, #grasses, #contact');
  var topBenefits = $('#why').offset().top + 200;
  var bottomBenefits = topBenefits - $('#why').outerHeight(true) - 300;
  // variables for sticky nav
  var headHeight = $('#top').outerHeight(true);
  var navHeight = $('nav').outerHeight(true);

  onScroll();

  function onScroll() {
    // set/unset sticky nav
    if ($(window).scrollTop() >= headHeight) {
      $('nav').addClass('sticky');
      $('#logo').addClass('fade-in');
      $('#fence').css('margin-top', navHeight+'px');
    } else {
      $('nav').removeClass('sticky');
      $('#logo').removeClass('fade-in');
      $('#fence').css('margin-top', '0px');
    }

    // check for active nav

    // get top of sections for navbar & animations, set active on navbar
    var top;
    anchors.each(function(){
      if (anchors[3]) {
        // #contact anchor
        top = $(this).offset().top - 300;
      } else {
        top = $(this).offset().top;
      }

      if ($(window).scrollTop() >= top) {
        $('nav').find('a').removeClass('active');
        $('nav').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });

    // benefits animation
    if ((topBenefits >= $(window).scrollTop() && $(window).scrollTop() >= bottomBenefits) && !$('.benefit').hasClass('fade-in')) {
      $('.benefit').each(function(i) {
        $(this).addClass('fade-in a' + parseInt(i+1));
      });
    }
  }

  $(window).scroll(function(){
    onScroll();
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
