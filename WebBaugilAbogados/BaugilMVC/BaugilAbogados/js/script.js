(function($) {
	
	"use strict";
	
	
	//Preloader
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(100).fadeOut(500);
		}
	}
	
	
	//Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 200) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Language Dropdown Hide / Show
	if($('.lang-box .lang-list').length){
		$('.lang-box .sel-btn').on('click', function() {
			$('.lang-box .lang-list').fadeToggle(300);
		});
	}
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon fa fa-bars"></i></button>';
		});
		// hidding submenu 
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a) 
					.parent() // return parent of a (li)
						.children('ul').slideToggle();
	
				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-minus fa-bars');
	
				return false;
	
			});
		});
	}
	
	//Custom Scroll Bar for Hidden Sidebar
	function customScrollBarHiddenSidebar() {
		if ($('.hidden-bar-wrapper').length) {
			$('.hidden-bar-wrapper').mCustomScrollbar();
		}
	}
	
	//Hidden Bar Toggler
	function hiddenBarToggler() {
		if ($('.hidden-bar-closer').length) {
			$('.hidden-bar-closer').on('click', function () {
				$('.hidden-bar').removeClass('visible-sidebar');
			});
		}
		if ($('.hidden-bar-opener').length) {
			$('.hidden-bar-opener').on('click', function () {
				$('.hidden-bar').addClass('visible-sidebar');
			});
		}
	}
	
	
	//Revolution Slider
	if($('.revolution-slider .tp-banner').length){

		jQuery('.revolution-slider .tp-banner').show().revolution({
		  delay:10000,
		  startwidth:1200,
		  startheight:720,
		  hideThumbs:600,
	
		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,
	
		  navigationType:0,
		  navigationArrows:"1",
		  navigationStyle:"preview3",
	
		  touchenabled:"on",
		  onHoverStop:"off",
	
		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,
	
		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	
		  keyboardNavigation:"off",
	
		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:0,
	
		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:0,
		  soloArrowLeftVOffset:0,
	
		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:0,
		  soloArrowRightVOffset:0,
	
		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",
	
		  spinner:"spinner4",
	
		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,
	
		  shuffle:"off",
	
		  autoHeight:"off",
		  forceFullWidth:"on",
	
		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,
	
		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

		
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
				1400:{
					items:1
				}
			}
		});    		
	}
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.accord-btn', function() {
		
			if($(this).hasClass('active')!==true){
			$('.accordion .accord-btn').removeClass('active');
			
			}
			
			if ($(this).next('.accord-content').is(':visible')){
				$(this).removeClass('active');
				$(this).next('.accord-content').slideUp(300);
			}else{
				$(this).addClass('active');
				$('.accordion .accord-content').slideUp(300);
				$(this).next('.accord-content').slideDown(300);	
			}
		});	
	}
	
	
	//Tabs / Jquery Tabs
	if($('.tabs-box').length){
		
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			$('.tabs-box .tab-buttons .tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			$('.tabs-box .tabs-content .tab').hide(0);
			$('.tabs-box .tabs-content .tab').removeClass('active-post');
			$(target).fadeIn(300);
			$(target).addClass('active-post');
			var windowWidth = $(window).width();
			if (windowWidth < 600) {
				$('html, body').animate({
				   scrollTop: $('.tabs-content').offset().top
				 }, 1000);
			}
		});
		
	}
	
	//Product Tabs
	if($('.prod-tabs .tab-btn').length){
		$('.prod-tabs .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.prod-tabs .tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			$('.prod-tabs .tab').fadeOut(0);
			$('.prod-tabs .tab').removeClass('active-tab');
			$(target).fadeIn(500);
			$(target).addClass('active-tab');
		});
		
	}
	
	
	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	//Gallery With Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//Price Range Slider
	if($('.range-slider-price').length){

		var priceRange = document.getElementById('range-slider-price');

		noUiSlider.create(priceRange, {
			start: [ 25, 100 ],
			limit: 200,
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 10,
				'max': 200
			}
		});

		var limitFieldMin = document.getElementById('min-value-rangeslider');
		var limitFieldMax = document.getElementById('max-value-rangeslider');
		
		priceRange.noUiSlider.on('update', function( values, handle ){
			(handle ? limitFieldMax : limitFieldMin).value = values[handle];
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				firstname: {
					required: true
				},
				lastname: {
					required: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var HeaderHeight = $('.header-lower').height();
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top - HeaderHeight
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
	
	$(document).on('ready', function() {
		customScrollBarHiddenSidebar();
		hiddenBarToggler();
		hiddenBarMenuConfig();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is Loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
    $(document).ready(function () {
        $("#btn1").click(function () {
            $("#ddFormCombo").val('1');
        });
        $("#btn2").click(function () {
            $("#ddFormCombo").val('2')
        });
        $("#btn3").click(function () {
            $("#ddFormCombo").val('3')
        });
        $("#btn4").click(function () {
            $("#ddFormCombo").val('4')
        });
        $("#btn5").click(function () {
            $("#ddFormCombo").val('5')
        });
        $("#btn6").click(function () {
            $("#ddFormCombo").val('6')
        });
        $("#btn7").click(function () {
            $("#ddFormCombo").val('7')
        });
        $("#btn8").click(function () {
            $("#ddFormCombo").val('8')
        });
        $("#btn9").click(function () {
            $("#ddFormCombo").val('9')
        });
        $("#btn10").click(function () {
            $("#ddFormCombo").val('10')
        });
        $("#btn11").click(function () {
            $("#ddFormCombo").val('11')
        });
        $("#btn12").click(function () {
            $("#ddFormCombo").val('12')
        });
        $("#btn13").click(function () {
            $("#ddFormCombo").val('13')
        });
        $("#btn14").click(function () {
            $("#ddFormCombo").val('14')
        });
        $("#btn15").click(function () {
            $("#ddFormCombo").val('15')
        });

        $(".btnEnviarCaso").click(function() {
            window.location.href = '/#snText';
        });
        $("#btnSolicitarServicio").click(function () {
            var isValid = Validate('servicio');

            if (isValid) {
                jQuery.support.cors = true;
                var servicio = {
                    Nombres: $('#nombreServicio').val(),
                    Apellidos: $('#apellidoServicio').val(),
                    Telefono: $('#telefonoServicio').val(),
                    Servicio: $('#ddFormCombo option:selected').text(),
                    ResumencCaso: $('#mensajeServicio').val(),
                    Email: $('#emailServicio').val(),
                    Tipo: "Servicio"
                };

                $.ajax({
                    url: '/api/values',
                    type: 'POST',
                    data: JSON.stringify(servicio),
                    contentType: "application/json;charset=utf-8",
                    success: function(data) {
                        var r = confirm(
                            "Su solicitud de servicio fue enviado, le responderemos los mas pronto posible.");
                        if (r == true) {
                            window.location.reload();
                        } else {
                            window.location.reload();
                        }
                    },
                    error: function(x, y, z) {

                    }
                });

            } else {
                //alert('Debe llenar los campos.');
            }
        });
        $("#btnSolicitarConsulta").click(function () {
            var isValid = Validate('consulta');

            if (isValid) {
                jQuery.support.cors = true;
                var consulta = {
                    Nombres: $('#nombresConsulta').val(),
                    Apellidos: $('#apellidosConsulta').val(),
                    Telefono: $('#telefonoConsuta').val(),
                    Servicio: $('#ddFormComboConsulta option:selected').text(),
                    ResumencCaso: $('#mensajeConsulta').val(),
                    Email: $('#emailConsulta').val(),
                    Tipo: "Consulta"
                };

                $.ajax({
                    url: '/api/values',
                    type: 'POST',
                    data: JSON.stringify(consulta),
                    contentType: "application/json;charset=utf-8",
                    success: function(data) {
                        var r = confirm("Su consulta fue enviada, le responderemos los mas pronto posible.");
                        if (r == true) {
                            window.location.reload();
                        } else {
                            window.location.reload();
                        }
                    },
                    error: function(x, y, z) {

                    }
                });
            }
            else {
                //alert('Debe llenar los campos.');
            }
        });

        function Validate(type) {
            if (type == "servicio") {
                var servicio = {
                    Nombres: $('#nombreServicio').val(),
                    Apellidos: $('#apellidoServicio').val(),
                    Telefono: $('#telefonoServicio').val(),
                    Servicio: $('#ddFormCombo option:selected').text(),
                    ResumencCaso: $('#mensajeServicio').val(),
                    Email: $('#emailServicio').val(),
                    Tipo: "Servicio"
                };
                if (servicio.Nombres == "") {
                    alert('Debe indicar el nombre');
                    return false;
                }
                if (servicio.Telefono == "") {
                    alert('Debe indicar el telefono');
                    return false;
                }
                if (servicio.ResumencCaso == "") {
                    alert('Debe indicar el resumen del caso');
                    return false;
                }
                if (servicio.Email == "") {
                    alert('Debe indicar el correo');
                    return false;
                }
                return true;
            } else {
                var consulta = {
                    Nombres: $('#nombresConsulta').val(),
                    Apellidos: $('#apellidosConsulta').val(),
                    Telefono: $('#telefonoConsuta').val(),
                    Servicio: $('#ddFormComboConsulta option:selected').text(),
                    ResumencCaso: $('#mensajeConsulta').val(),
                    Email: $('#emailConsulta').val(),
                    Tipo: "Consulta"
                };
                if (consulta.Nombres == "") {
                    alert('Debe indicar el nombre');
                    return false;
                }
                if (consulta.Telefono == "") {
                    alert('Debe indicar el telefono');
                    return false;
                }
                if (consulta.ResumencCaso == "") {
                    alert('Debe indicar el resumen del caso');
                    return false;
                }
                if (consulta.Email == "") {
                    alert('Debe indicar el correo');
                    return false;
                }
                return true;
            }
        }
    });
	

})(window.jQuery);