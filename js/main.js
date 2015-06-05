
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
    "../img/atmosbrick.jpg",
	"../img/atmosfmwkad.jpg",
	"..img/atmoslillies.jpg",
	"..img/atmosa.jpg",
	"..img/writingonthewall.jpg",
	"..img/atmoslogocircle1.jpg",
	"..img/atmosnapes.jpg",
	"..img/atmosmax.jpg",
	"..img/atmoselevator.png",
	"..img/atmospinkperformance.jpg",
	"..img/atmosblurry.jpg",
	"../img/tablebgd.png",
	"../img/atmosvideo1.png",
	"../img/atmosstraightup.jpg"
  );

});