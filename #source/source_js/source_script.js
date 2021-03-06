$(document).ready(function () {

  $('#burger').click(function (event) {
    $('#burger,#nav').toggleClass('active');
    $('#header').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $('.nav__link').click(function (event) {
    $('#burger,#nav').removeClass('active');
  });


  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  let upbutton = $("#upbutton");


  /* FIXED HEADER */
  $(window).on("scroll load resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH - 100) {
      header.addClass("fixed");
      upbutton.addClass("active");
    } else {
      header.removeClass("fixed");
      upbutton.removeClass("active");
    }
  });



  /* SMOOTH SCROLL */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    // $("#nav a.active").removeClass("active");
    // $(this).addClass("active");

    $("html, body").animate({
      scrollTop: elementOffset - 52
    }, 1000);
  });


  $("[data-slider]").slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  AOS.refresh();

});




AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});