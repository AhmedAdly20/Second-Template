$(function() {
	'use strict';
	(function slider() {

		$('.slider .actives').each(function(){

			if (!$(this).is(':last-child')) {
				$(this).delay(2000).fadeOut(1000,function(){

					$(this).removeClass('actives').next().addClass('actives').fadeIn();
					slider();

				});
			} else {

				$(this).delay(2000).fadeOut(1000,function(){

					$(this).removeClass('actives');
					$(this).siblings('div:first').addClass('actives').fadeIn();
				//  $(this).siblings(':first').addClass('actives').fadeIn();
				//  $('.slider div').eq(0).addClass('actives').fadeIn();
					slider();
				});


			}

		});



	}());



});