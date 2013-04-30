/**
 * Custom jQuery functions
 */
;(function($, undefined) {
	'use strict';

	/**
	 * Page Functions
	 */
	var page = {
		init: function() {
			// Call Bootstrap Tooltip
			$('[data-toggle="tooltip"]').tooltip();

			// Call Bootstrap Popover
			$('[data-toggle="popover"]').popover({
				trigger: 'hover'
			});
		}
	};

	/**
	 * Scroll Top
	 */
	var scrollTop = {
		init: function() {
			$(window).scroll(function() {
				if ($(this).scrollTop() > 100) {
					$('.scroll-top').fadeIn();
				} else {
					$('.scroll-top').fadeOut();
				}
			});

			$('.scroll-top').click(function() {
				$('html, body').animate({
					scrollTop: 0
				}, 600);
				return false;
			});
		}
	};

	/**
	 * Ready, Load and Resize Functions
	 */
	var onReady = {
		init: function() {
			page.init();
			scrollTop.init();
		}
	};

	var onLoad = {
		init: function() {

		}
	};

	var onResize = {
		init: function() {

		}
	};

	var onScroll = {
		init: function() {

		}
	};

	$(document).ready(onReady.init);
	$(window).load(onLoad.init);
	$(window).resize(onResize.init);
	$(window).scroll(onScroll.init);
})(jQuery);
