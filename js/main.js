
$(document).ready(function(){

  $("header img.logo").hide().fadeIn(4000);

  var images = [];

  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
  }
  
  preload(
    "../img/atmosa.jpg",
	"../img/atmosblurry.jpg",
	"..img/atmosbrick.jpg",
	"..img/atmoselevator.jpg",
	"..img/writingonthewall.jpg",
	"..img/atmosfmwkad.jpg",
	"..img/atmoshero.jpg",
	"..img/atmosmax.jpg",
	"..img/atmosnapes.png",
	"..img/atmospinkperformance.jpg",
	"..img/atmospinkopenarms.jpg",
	"..img/logo.png",
	"../img/stripevideo.jpg",
	"../img/tablebgd.png",
	"../img/chicago.jpg",
	"../img/atmoslogocircle1.jpg"
  );

  ////navigation animation 
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
    return false;
	});

///navigation menu 

	$('header nav ul').css('display','none');
      		$('nav button').off("click");
      		$('nav button').click(function(){
				$('nav ul').slideToggle('slow');
			});


});