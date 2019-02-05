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
	var contentDos = $('.content-02').offset();
	var contentTres = $('.content-03').offset();
	var contentCuatro = $('.content-04').offset();
	var infoCasas = $('.info__casas').offset();
	var contentCinco = $('.content-05').offset();
	var contentSeis = $('.content-06').offset();
	var contentSiete = $('.content-07').offset();
	var contentOcho = $('.content-08').offset();

	$window.scroll(function() {
		if ($window.scrollTop()+100 >= contentCuatro.top ) {
			menuicon.removeClass().addClass('menuicon--white');
		} else {
			menuicon.removeClass().addClass('menuicon');
		}

		if ($window.scrollTop() >= infoCasas.top ) {
			menuicon.removeClass().addClass('menuicon');
		}


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


