var main = function() {
  var timed_slideshow = setInterval(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    nextSlide.css({left:'100%', display:'block'});
    currentSlide.animate({left:'-100%'}, "slow").removeClass('active-slide');
    nextSlide.animate({left:'0'}, "slow").addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  }, 4000);

  $('.arrow-next').click(function() {
    window.clearInterval(timed_slideshow);
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    nextSlide.css({left:'100%', display:'block'});
    currentSlide.animate({left:'-100%'}, "slow").removeClass('active-slide');
    nextSlide.animate({left:'0'}, "slow").addClass('active-slide');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  $('.arrow-prev').click(function() {
    window.clearInterval(timed_slideshow);
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    prevSlide.css({left:'-100%', display:'block'});
    currentSlide.animate({left:'100%'}, "slow").removeClass('active-slide');
    prevSlide.animate({left:'0'}, "slow").addClass('active-slide');
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  $('.menu_item').click(function() {
    var currentMenu = $('.active');
      $('.active .dropdown-menu').hide();
      currentMenu.removeClass('active');
      $(this).addClass('active');
      $('.active .dropdown-menu').show();
  });

  /* Anything that gets to the document
   will hide the dropdown */
  $(document).click(function(){
    $('.dropdown-menu').hide();
    $('.active').removeClass('active');
  });
  /* Clicks within the dropdown won't make
   it past the dropdown itself */
  $(".dropdown").click(function(e){
    e.stopPropagation();
  });
}
$(document).ready(main);
