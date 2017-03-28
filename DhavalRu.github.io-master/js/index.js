/*Change active class on navbar
$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
}); */
$(document).ready(function(){
	$(".fa-chevron-circle-down").click(function() {
		$('html, body').animate({
			scrollTop: $(".projects").offset().top
		}, 500);
	});

	$(".fa-chevron-circle-up").click(function() {
		$('html, body').animate({
			scrollTop: $(".welcome").offset().top
		}, 500);
	});

/* Copyright year */
var today = new Date();
var year = today.getFullYear();
var copyright = document.getElementById("copyyear");
copyright.innerHTML = year;
});