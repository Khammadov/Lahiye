
 
    $("#block-space .owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        items: 4,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                stagePadding: 0,
                center: false,
            },
            766: {
                items: 2,
                nav: false,
                stagePadding: 0,
                center: false,
            },
            1024: {
                items: 4,
                nav: false,
                loop: true,
                stagePadding: 0,
                center: true,
            }
        }
    });


    $("#block-space-sec .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
            },
            600: {
                items: 1,
                nav: false,
                loop: true,
            },
            800: {
                items: 2,
                nav: false,
                loop: true,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
            }
        }
    });




document.getElementById("MyNavbar").style.transition = "all 0.2s";


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 339) {
          $(".hdr").css("background" , "#5e72e4");
        }
  
        else{
            $(".hdr").css("background" , "rgba(48,32,87, 0.664)");  	
        }
    })
  })