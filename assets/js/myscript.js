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
	
	var menuicon = $('.menuicon');
	var $window = $(window);
	var contentUno = $('.content-01').offset();
	// var contentDos = $('.content-02').offset();
	// var contentTres = $('.content-03').offset();
	var contentCuatro = $('#contentCuatro').offset();
	var infoCasas = $('.info__casas').offset();
	var contentCinco = $('#contentCinco').offset();
	var contentSeis = $('.content-06').offset();
	// var contentSiete = $('.content-07').offset();
	// var contentOcho = $('.content-08').offset();

	const mq = window.matchMedia( "(max-width: 768px)" );

	$window.scroll(function() {
		if ($window.scrollTop() >= contentUno.top ) {
			menuicon.removeClass('menuicon--white');
			$('.info__casas-item').removeClass('info__casas-item--reveal');
			// menuicon.css('background-color', '#000');
		}
		if ($window.scrollTop()+50 >= contentCuatro.top ) {
			menuicon.addClass('menuicon--white');
			$('.info__casas-item').addClass('info__casas-item--reveal');
			// menuicon.css('background-color', '#fff');
		}

		// if (mq.matches) {
		// 	// if ($window.scrollTop() >= infoCasas.top ) {
		// 	// 	menuicon.css('background-color', '#000');
		// 	// }
		// }
		if ($window.scrollTop()+50 >= contentCinco.top ) {
			menuicon.removeClass('menuicon--white');
			// menuicon.css('background-color', '#000');
		}
		// if ($window.scrollTop()-500 >= contentSeis.top ) {
		// 	menuicon.css('background-color', '#fff');
		// }


		// if ($window.scrollTop() >= infoCasas.top ) {
		// 	menuicon.css('background-color', '#000');
		// }

	})

	// Menu Slide

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#hamburger').toggleClass('hamburguer-slide');
	}

	// function esconder (e){		
	// 	$('.menu-hide').removeClass('show');
	// 	$('#hamburger').removeClass('hamburguer-slide');
	// }

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
		}		
		console.log(e.target)
	})


