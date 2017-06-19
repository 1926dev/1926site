$(init);

function init() {
	var notchColor = $("#myCarousel > .nav.pills > li.active:before").css("border-bottom-color");
//	var selectParent = $("#myCarousel > .nav.pills > li.active:before").parentsUntil("#myCarousel");
	
	$("#myCarousel > .nav.pills > li.active:before").parentsUntil("#myCarousel").children(".carousel-inner").css("border-top-color", notchColor);
}