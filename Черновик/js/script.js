


$( document ).ready(function() {
	//Плавная прокрутка
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	  });

	//Отмена действия у кнопки формы
	$('.form__btn').on("click", function(e) {
		e.preventDefault();
	})

	//Меню
	$('.menu-svg').on('click', function() {
		$('.menu').addClass('menu-animation-open');
		$('body').addClass('overflow-hidden');
		$('.menu').removeClass('menu-animation-close');
	})

	$('.close').on('click', function() {
		setTimeout( function() {
			$('.menu').removeClass('menu-animation-open')
		}, 1000 * 0.9)
		$('.menu').addClass('menu-animation-close');
		$('body').removeClass('overflow-hidden');
	})

	$('.menu__a').on('click', function() {
		setTimeout( function() {
			$('.menu').removeClass('menu-animation-open')
		}, 1000 * 0.9)
		$('.menu').addClass('menu-animation-close');
		$('body').removeClass('overflow-hidden');	
	})

});