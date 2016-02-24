$(document).ready(function() {
	$('.js-time a').on('click', function(e) {
		e.preventDefault();
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top - 30
		}, 500);
		return false;
	});
	$('.js-more').on('click', function(e){
		e.preventDefault();
		$('.card').toggleClass('is-visible');
		$('.bonus').css({
			"display": "none"
		})
	});
	$blocks = $(".share-list li")
	$buttons = $(".buttons .btn")

	$buttons.click(function(event) {
		if(!$(this).hasClass('is-active')){
			$buttons.removeClass('is-active');
			$blocks.hide();

			$(this).addClass('is-active');
			$('#'+$(this).data('target')).show();
		}
	});
	// social fixed
	function stickySocial() {
		if ($('.js-sticky').length) { 
			var el = $('.js-sticky');
			var stickyTop = $('.js-sticky').offset().top; 
			var footerTop = $('.bottom').offset().top; 
			var stickyHeight = $('.js-sticky').outerHeight();
			// var limit = footerTop - stickyHeight;
			var limit = footerTop + 215;
			$(window).scroll(function(){ 

				var windowTop = $(window).scrollTop();
				if ($(window).width() >= 1024) {
				
					if (stickyTop < windowTop){
						el.css({ position: 'fixed', top: 10 });
						el.addClass('is-active');
					}
					else {
						el.css('position','static');
						el.removeClass('is-active');
					}

					if (limit < windowTop) {
						var diff = limit - windowTop;
						el.css({top: diff});
					} 
				} 
			});
		}
	};
	stickySocial();
});