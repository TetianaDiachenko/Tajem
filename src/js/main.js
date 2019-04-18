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

// Mobnav
function openNav() {
  document.getElementById("mobNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("mobNav").style.height = "0%";
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }