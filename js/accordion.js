	/*$(function(){
		
		$('.items .name').click(function(){
			$('.active').not(this).removeClass('active');
			$(this).toggleClass('active');
			$('.items .acc-body').not($(this).next()).slideUp(500);
			$(this).next().slideToggle(500);

		});
	
	});*/
	
	$(function(){
		
		$('.item__name').click(function(){
			$('.item__active').not(this).removeClass('active');
			$(this).toggleClass('active');
			$('.acc-body').not($(this).next()).fadeOut(500);
			$(this).next().fadeToggle(1000);

		});
	
	});