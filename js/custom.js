/* golbal $, alert, console*/
$(function() {
	'use strict';
	// Adjust header height
	var myheader = $('.header')
	myheader.height($(window).height());
	$(window).resize(function(){
	myheader.height($(window).height());
	$('.bxslider').each(function(){
		$(this).css('paddingTop',($(window).height()-$('.bxslider li').height()) /2)
	});
	});

	// links add active class
	$('.links li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	// li in the center for the slider
	//$('.header').each(function(){
//$(this).css('paddingTop',($(window).height()-$(this).height()) /3)
//	});
	$('.links li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		},1000);
	});

	//trigger mixitup
	$('#Container').mixItUp();
	//	
	$('.shuffle li').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});

	// trigger nice scroll
	$("body").niceScroll({
  cursorcolor:"#1bbc9b",
  cursorwidth:"7px"
});

	var left = $('.fa-chevron-left')
	var right = $('.fa-chevron-right')

	function checkClients() {

		if ($('.slider:first').hasClass('active')) {

			left.fadeOut();
		}
		else{
			left.fadeIn();
		}
		if ($('.slider:last').hasClass('active')) {

			right.fadeOut();
		}
		else{
			right.fadeIn();
		}
	}
	checkClients();

	$('.header i').click(function() {

		if($(this).hasClass('fa-chevron-right')) {

			$('.header .active').fadeOut(1000,function(){

				$(this).removeClass('active').next('.slider').addClass('active').fadeIn();

				checkClients();

			});
		}else{
			$('.header .active').fadeOut(1000,function(){

				$(this).removeClass('active').prev('.slider').addClass('active').fadeIn();

				checkClients();

			});
		}

	});


});