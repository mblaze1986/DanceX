$(document).ready((function(){$("#burger").click((function(e){$("#burger,#nav").toggleClass("active"),$("#header").toggleClass("active"),$("body").toggleClass("lock")})),$(".nav__link").click((function(e){$("#burger,#nav").removeClass("active")}));let e=$("#header"),a=$("#intro"),t=a.innerHeight(),o=$(window).scrollTop(),s=$("#upbutton");$(window).on("scroll load resize",(function(){t=a.innerHeight(),o=$(this).scrollTop(),o>t-100?(e.addClass("fixed"),s.addClass("active")):(e.removeClass("fixed"),s.removeClass("active"))})),$("[data-scroll]").on("click",(function(e){e.preventDefault();let a=$(this).data("scroll"),t=$(a).offset().top;$("html, body").animate({scrollTop:t-52},1e3)})),$("[data-slider]").slick({arrows:!1,dots:!0,infinite:!0,fade:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3}),AOS.refresh()})),AOS.init(),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:100,duration:1e3,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"});