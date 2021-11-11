function initScrollBehaviour() {
    let targetScroll = document.getElementsByClassName('content-wrapper')[0];
    //target.scrollTop=1200;
    let speed = 500;
    let smooth = 10;
    new SmoothScroll(targetScroll, speed, smooth)
}

function SmoothScroll(targetScroll, speed, smooth) {

  target = document;

	if (target === document)
		target = (document.scrollingElement
              || document.documentElement
              || document.body.parentNode
              || document.body); // cross browser support for document scrolling

	var moving = false;
	globalPos = targetScroll.scrollTop;

  var frame = targetScroll === document.body
              && document.documentElement
              ? document.documentElement
              : target // safari is the new IE

	target.addEventListener('mousewheel', scrolled, { passive: false });
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

	function scrolled(e) {

    targetScroll.scrollTop = globalPos;
    globalPos = targetScroll.scrollTop;
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e);

		globalPos += -delta * speed
		globalPos = Math.max(0, Math.min(globalPos, targetScroll.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {

		moving = true

		var delta = (globalPos - targetScroll.scrollTop) / smooth

		targetScroll.scrollTop += delta;

		if (Math.abs(delta) > 1) // Update routine got stuck since delta would get stuck around 0.8
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 100);
			}
		);
	}()
}
