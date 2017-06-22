//// DOM Ready
//$(function () {
//
//	var $el, leftPos, newWidth;
//	$mainNav2 = $(".navbar #example-two");
//
//	$mainNav2.append("<li id='magic-line-two'></li>");
//
//	var $magicLineTwo = $(".navbar #magic-line-two");
//
//	$magicLineTwo
//		.width($(".navbar .current_page_item_two").width())
//		.height($mainNav2.height())
//		.css("left", $(".navbar .current_page_item_two a").position().left)
//		.data("origLeft", $(".navbar .current_page_item_two a").position().left)
//		.data("origWidth", $magicLineTwo.width())
//		.data("origColor", $(".navbar .current_page_item_two a").attr("rel"));
//
//	$(".navbar #example-two a").hover(function () {
//		$el = $(this);
//		leftPos = $el.position().left;
//		newWidth = $el.parent().width();
//		$magicLineTwo.stop().animate({
//			left: leftPos,
//			width: newWidth,
//			backgroundColor: $el.attr("rel")
//		})
//	}, function () {
//		$magicLineTwo.stop().animate({
//			left: $magicLineTwo.data("origLeft"),
//			width: $magicLineTwo.data("origWidth"),
//			backgroundColor: $magicLineTwo.data("origColor")
//		});
//	});
//
//	/* Kick IE into gear */
//	$(".navbar .current_page_item_two a").mouseenter();
//
//});
