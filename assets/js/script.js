 jQuery(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = jQuery(".swiper-trader-stories");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-trader-stories", {
    spaceBetween: 1,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next-trader",
      prevEl: ".swiper-button-next-trader"
    }
  });
});
