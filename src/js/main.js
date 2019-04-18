// slick.js http://kenwheeler.github.io/slick/

$('#slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$('#slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  dots: true,
  prevArrow: $('.people__nav_prev'),
  nextArrow: $('.people__nav_next'),

});

// Video
	
$('.video__button').click(function(){
		$('.video__button').toggleClass('none'); 
		$('.video__watch').css('display','block');
	});

