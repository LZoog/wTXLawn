
$(function(){

  var headHeight = $('#top').height() + $('nav').height() + 28;
  $('nav').toggleClass('sticky', $(this).scrollTop() >= headHeight);

  $(window).scroll(function(){
    $('nav').toggleClass('sticky', $(this).scrollTop() >= headHeight);
  });

//   $('#nav').onePageNav({
//     currentClass: 'current',
//     changeHash: true,
//     scrollSpeed: 750,
//     scrollThreshold: 0.5,
//     filter: '',
//     easing: 'swing',
//     begin: function() {
//         //I get fired when the animation is starting
//     },
//     end: function() {
//         //I get fired when the animation is ending
//     },
//     scrollChange: function($currentListItem) {
//         //I get fired when you enter a section and I pass the list item of the section
//     }
// });

});
