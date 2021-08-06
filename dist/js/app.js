
document.addEventListener("DOMContentLoaded", function () {

MicroModal.init({
	onShow: modal => console.info(`${modal-1} is shown`), // [1]
	onClose: modal => console.info(`${close} is hidden`), // [2]
	//openTrigger: 'data-custom-open', // [3]
	//closeTrigger: 'data-custom-close', // [4]
	openClass: 'is-open', // [5]
	disableScroll: true, // [6]
	disableFocus: false, // [7]
	awaitOpenAnimation: false, // [8]
	awaitCloseAnimation: false, // [9]
	debugMode: true, // [10]
 });

 jQuery(document).ready(function($) {
	console.log($);
	let header = $("#header");
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	let scrollPos = $(window).scrollTop();
	// fixed header
	$(window).on("scroll load resize", function() {
			scrollPos = $(this).scrollTop();
		if (scrollPos > 400) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});
		 // Nav
		 navToggle.on("click", function(event) {
			event.preventDefault();
			nav.toggleClass("show");
	  });
 $(document).ready(function(){
	$("#slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
	})
 })

});
})
