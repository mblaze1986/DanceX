$(document).ready((function(){$("#burger").click((function(e){$("#burger,#nav").toggleClass("active"),$("#header").toggleClass("active"),$("body").toggleClass("lock")}));let e=$("#header"),t=$("#intro"),a=t.innerHeight(),o=$(window).scrollTop(),s=$("#upbutton");$(window).on("scroll load resize",(function(){a=t.innerHeight(),o=$(this).scrollTop(),o>a-100?(e.addClass("fixed"),s.addClass("active")):(e.removeClass("fixed"),s.removeClass("active"))})),$("[data-scroll]").on("click",(function(e){e.preventDefault();let t=$(this).data("scroll"),a=$(t).offset().top;$("html, body").animate({scrollTop:a-52},1e3)}))})),AOS.init(),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:100,duration:1e3,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"});