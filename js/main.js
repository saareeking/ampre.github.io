//fixed menu

$(window).on('scroll', function(){
      if($(window).scrollTop()){
		$('.header-sticky').addClass('scroll-menu');
	}
	else {
		$('.header-sticky').removeClass('scroll-menu');
      }
});



$(document).ready(function(){
	$('#owl-programm').owlCarousel({
      items: 3,
      margin: 20,
      responsive: {
            0: {
            items: 1,
            stagePadding: 35,
            loop:true
            },

            567: {
            items: 2
            },

            769: {
            items: 3
            },

            1024: {
            items: 3
            },

            1200: {
            items: 3
            }
      }
	});
});


//click burger-menu

$('.burger-menu__link').on('click', function() {
   $(this).toggleClass('btn-active');
   $('body, html').toggleClass('no-scroll');
   $('.cabinet-down').toggleClass('dropCabinet');
   $('.mobile-menu').toggleClass('mob-menuDrop');
});