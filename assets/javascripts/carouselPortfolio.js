//$(document).ready(function () {
//	$('#myCarousel').carousel({
//		interval: 4000
//	});
//
//	var clickEvent = false;
//	var currentColor = $('#myCarousel .nav li.active:before').css('border-color');
//	$('#myCarousel').on('click', '.nav a', function () {
//		clickEvent = true;
//		$('#myCarousel .nav li').removeClass('active');
//		$(this).parent().addClass('active');
//	}).on('slid.bs.carousel', function (e) {
//		if (!clickEvent) {
//			var count = $('#myCarousel .nav').children().length - 1;
//			var current = $('#myCarousel .nav li.active');
//			current.removeClass('active').next().addClass('active');
//			var id = parseInt(current.data('slide-to'));
//			if (count == id) {
//				$('#myCarousel .nav li').first().addClass('active');
//			}
//		}
//		clickEvent = false;
//	});
//});


jQuery(document).ready(function ($) {

	$('#myCarousel').carousel({
		interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	//Handles the carousel thumbnails
	$('[id^=carousel-selector-]').click(function () {
		var id_selector = $(this).attr("id");
		var id = id_selector.substr(id_selector.length - 1);
		var id = parseInt(id);
		$('#myCarousel').carousel(id);
	});

	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid', function (e) {
		var id = $('.item.active').data('slide-number');
		$('#carousel-text').html($('#slide-content-' + id).html());
	});
});
