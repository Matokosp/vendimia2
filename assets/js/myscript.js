// MENU

	// Sticky

	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

	// Hamburger change color
	
	var menu = $('.menures');
	var menuicon = $('.menuicon');
	var $window = $(window);
	var contentUno = $('.content-01').offset();
	var contentDos = $('.content-02').offset();
	var contentTres = $('#contentTres').offset();
	var contentCuatro = $('#contentCuatro').offset();
	var contentCinco = $('#contentCinco').offset();
	var contentSeis = $('#contentSeis').offset();
	var contentSiete = $('#contentSiete').offset();
	var contentOcho = $('#contentOcho').offset();

	const mq = window.matchMedia( "(min-width: 1024px)" );
	var windowHeight = $( window ).height();

	if (mq.matches) {
		
		$window.scroll(function() {
		if ($window.scrollTop() >= contentUno.top ) {
			menuicon.removeClass('menuicon--white');
			$('.info__casas-item').removeClass('reveal');
			$('.origen__proyecto--img').removeClass('reveal');
			$('.origen__proyecto').children('p').removeClass('reveal');
			menu.children('li:nth-child(1)').children('span').removeClass('active');
		}
		if ($window.scrollTop() >= contentDos.top - ( windowHeight * 2 / 8 ) ) {
			$('.origen__proyecto--img').addClass('reveal');
			$('.origen__proyecto').children('p').addClass('reveal');
			menu.children('li:nth-child(2)').children('span').removeClass('active');
			menu.children('li:nth-child(1)').children('span').addClass('active');
		}
		if ($window.scrollTop()+100 >= contentTres.top ) {
			menu.children('li:nth-child(1)').children('span').removeClass('active');
			menu.children('li:nth-child(2)').children('span').addClass('active');
			menu.children('li:nth-child(3)').children('span').removeClass('active');
		}
		if ($window.scrollTop()+100 >= contentCuatro.top ) {
			menuicon.addClass('menuicon--white');
			$('.info__casas-item').addClass('reveal');
			$('.ladera__section-item').removeClass('reveal');
			menu.children('li:nth-child(2)').children('span').removeClass('active');
			menu.children('li:nth-child(3)').children('span').addClass('active');
			menu.children('li:nth-child(4)').children('span').removeClass('active');
		}
		if ($window.scrollTop() + ( windowHeight * 3 / 8 ) >= contentCinco.top  ) {
			$('.ladera__section-item').addClass('reveal');
		}
		if ($window.scrollTop()+100 >= contentCinco.top  ) {
			menuicon.removeClass('menuicon--white');
			menu.children('li:nth-child(3)').children('span').removeClass('active');
			menu.children('li:nth-child(4)').children('span').addClass('active');
			menu.children('li:nth-child(5)').children('span').removeClass('active');
		}
		if ($window.scrollTop()+100 >= contentSeis.top  ) {
			menuicon.addClass('menuicon--white');
			$('.container_gallery_tab').removeClass('reveal');
			menu.children('li:nth-child(4)').children('span').removeClass('active');
			menu.children('li:nth-child(5)').children('span').addClass('active');
			menu.children('li:nth-child(6)').children('span').removeClass('active');
		}
		if ($window.scrollTop()+400 >= contentSiete.top  ) {
			$('.container_gallery_tab').addClass('reveal');
		}
		if ($window.scrollTop()+200 >= contentSiete.top  ) {
			menuicon.removeClass('menuicon--white');
			menu.children('li:nth-child(5)').children('span').removeClass('active');
			menu.children('li:nth-child(6)').children('span').addClass('active');
			menu.children('li:nth-child(7)').children('span').removeClass('active');
		}


	})


	}
	

	// Menu Slide

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#hamburger').toggleClass('hamburguer-slide');
	}
	$('#hamburger').on('click', function(e){		
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');
		console.log(menuHideShow)
	})
   
	window.addEventListener('click', function(e){
		// var menuHide = $('.menu-hide');
		if (menuHideShow === true && e.target.className != 'menu-hide show') {
			desplazar();
			e.stopPropagation();		
		}
		console.log(e.target)
	})




