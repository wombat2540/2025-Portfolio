/* ===================================
--------------------------------------
  NISSA - PHOTOGRAPHY STUDIO TEMPLATE
  Version: 1.0
 -------------------------------------
 =====================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function() {
		$('.main-site-warp').addClass('push-side');
		$('body').addClass('push-side');
		setTimeout(function(){
			hero_section();
		}, 400)
		
	});
	$('.close-menu').on('click', function() {
		$('.main-site-warp').removeClass('push-side');
		setTimeout(function(){
			$('body').removeClass('push-side');		
		}, 400);
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
	   Custom Scrollbar
	--------------------*/
	function site_scrollbar() {

		if ($(window).width() > 991) {
			$(".main-sidebar").niceScroll({
				cursorborder:"",
				cursorcolor:"#E86E17",
				boxzoom:false,
				cursorwidth: 4,
				cursorborderradius:0,
			});
		
			$(".about-section, .contact-section, .elements-section").niceScroll({
				cursorborder:"",
				cursorcolor:"#E86E17",
				boxzoom:false,
				cursorwidth: 4,
				cursorborderradius:0,
			});
		
			$(".blog-posts").niceScroll({
				cursorborder:"",
				cursorcolor:"#242424",
				boxzoom:false,
				cursorwidth: 4,
				autohidemode:true,
				background: '#eeeeee',
				railoffset: { top: 50, right: 0, left: 40, bottom: 0 },
				railpadding: { top: 0, right: 0, left: 0, bottom: 100 },
			});
		
			$(".portfolio-section").niceScroll({
				cursorborder:"",
				cursorcolor:"#242424",
				boxzoom:false,
				cursorwidth: 4,
				autohidemode:true,
				background: '#eeeeee',
				railoffset: { top: 50, right: 0, left: -14, bottom: 0 },
				railpadding: { top: 0, right: 0, left: 0, bottom: 100 },
			});
		}
		
	}
	site_scrollbar();


})(jQuery);
