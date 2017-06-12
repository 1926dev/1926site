function pathPrepare($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
}

var $path = $("path");

// prepare SVG
pathPrepare($path);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
	.add(TweenMax.to($path, 1, {
		strokeDashoffset: 0,
		ease: Linear.easeNone
	})) // draw word for 1
	.add(TweenMax.to("path", 1, {
		stroke: "#33629c",
		ease: Linear.easeNone
	}), 2); // change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger1",
		duration: 2000,
		tweenChanges: true
	})

//var scene = new ScrollMagic.Scene({
//		triggerElement: "#trigger1" || "trigger2" || "trigger3" || "trigger4" || "trigger5" || "trigger6",
//		duration: 1000,
//		tweenChanges: true
//	})
	.setTween(tween)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);