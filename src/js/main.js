// Mobnav
var btn = document.body.querySelector('.mobnav__button');
var btnClose = document.body.querySelector('.closebtn');
var mobMenu = document.body.querySelector('#mobNav');
var mobMenuLi = document.querySelectorAll('.mobnav__main__ul__li');

btn.onclick = function () {
  mobMenu.style.height = '100%';
}

btnClose.onclick = function () {
  mobMenu.style.height = '0%';
}

Array.prototype.forEach.call( mobMenuLi, function(el) {      
  el.onclick = function(e) {
    mobMenu.style.height = '0%';
  }
});



$(function () {  

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
})
