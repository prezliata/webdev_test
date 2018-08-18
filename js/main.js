// Function burger menu
(function(){
	var burger = document.querySelector('.burger-container'),
		miniNavigation  = document.querySelector('.mini-navigation');

	burger.onclick = function() {
		miniNavigation.classList.toggle('menu-opened');
	}
}());

// Function Back to Top
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
	  $('.top_btn').fadeIn(200);
		} else {
			$('.top_btn').fadeOut(200);
	   }
	});   
	  // Animate the scroll to top
	$('.top_btn').click(function(event) {
	  event.preventDefault();
	$('html, body').animate({scrollTop: 0}, 300);
});