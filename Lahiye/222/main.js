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

