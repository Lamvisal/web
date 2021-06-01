let app = {
	windowW: 0,
	windowH: 0,
	scrollTop: 0,
	lazy: function (className) {
		if ($(className).length) {
			$(className).lazy({
				effect: "fadeIn",
				effectTime: 250,
				threshold: 0
			});
		};
	},
	aosElement: function(){
		AOS.init();
	},
	dot: function (className) {
		if ($(className).length) {
			$(className).each(function () {
				var $el = $(this),
					line = $el.data('line');
				$clamp($el.get(0), {
					clamp: line
				});
			});
		}
	},
	backToTop: function () {
		$(window).on('load scroll', function () {
			if ($(window).scrollTop() > 100) {
				$('.jsBackToTop').addClass('active');
			} else {
				$('.jsBackToTop').removeClass('active');
			}
		});

		$('.jsBackToTop').on('click', function (e) {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			e.preventDefault();
		});
	},
	carouselBanner: function (className) {
		if ($(className).length) {
			$(className).each(function (index) {
				let id = '#' + $(this).children('.swiper-container').attr('id');
				$el = $(id);
				let jsBanner = new Swiper(id, {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
					speed: 750,
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
					pagination: {
						el: id + ' ~ .jsPagination',
						clickable: true
					},
				});
			});
		}
	},
	carouselPartner: function (className) {
		if ($(className).length) {
			$(className).each(function (index) {
				let id = '#' + $(this).children('.swiper-container').attr('id');
				let carouselPartner = new Swiper(id, {
					init: false,
					slidesPerView: 4,
					spaceBetween: 30,
					loop: false,
					autoHeight: false,
					speed: 500,
					breakpoints: {
						320: {
							slidesPerView: 2,
							spaceBetween: 5,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						1200: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
					pagination: {
						el: id + ' ~ .jsPagination',
						clickable: true
					},
				});
				carouselPartner.init();
			});
		}
	},
	carouselProduct: function (className) {
		if ($(className).length) {
			$(className).each(function (index) {
				let id = '#' + $(this).children('.swiper-container').attr('id');
				let carouselProduct = new Swiper(id, {
					init: false,
					slidesPerView: 3,
					spaceBetween: 30,
					loop: false,
					autoHeight: false,
					speed: 500,
					breakpoints: {
						320: {
							slidesPerView: 2,
							spaceBetween: 5,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
					pagination: {
						el: id + ' ~ .jsPagination',
						clickable: true
					},
				});
				carouselProduct.init();
			});
		}
	},
	autoModal: function (className) {
		if ($(className).length) {
			let modalId = '#' + $(className).attr('id');
			$.fancybox.open({
				src: modalId,
				type: 'inline',  
				opts: {
					afterShow: function (instance, current) {
						setTimeout(function () {
							$('.jsModalContent').animate({
								scrollTop: 0
							}, 0);
							$('.jsModalContent').css({
								'visibility': 'visible'
							});
						}, 1);
					},
					afterClose: function (instance, current) {
						$('.jsModalContent').css({
							'visibility': 'hidden'
						});
					}
				}
			});
		}
	},
	sns: function () {
		$(window).on('load scroll', function () {
			if ($(window).scrollTop() > 100) {
				$('.jsContactBtn').addClass('active');
			} else {
				$('.jsContactBtn').removeClass('active click');
				$('.jsContactBtnBox').removeClass('zoomIn').addClass('zoomOut');
				$('.jsContactBtnBox').removeClass('click');
			}
		});


		$('.jsContactBtn').on('click', function (e) {
			$(this).toggleClass('click');
			$('.jsContactBtnBox').addClass('click');
			if ($('.jsContactBtnBox').hasClass('zoomIn')) {
				$('.jsContactBtnBox').removeClass('zoomIn').addClass('zoomOut');
				setTimeout(function () {
					$('.jsContactBtnBox').removeClass('click');
				}, 250);
			} else {
				$('.jsContactBtnBox').removeClass('zoomOut').addClass('zoomIn');
			}
			e.preventDefault();
		});

		let $jsIcon = $('.jsContactBtnIcon span');
		let jsIconLength = $jsIcon.length
		let jsEffect = ['fadeInRight', 'slideInDown', 'active'];

		setInterval(function () {
			for (var i = 1; i < jsIconLength; i++) {
				let $elOld = $($jsIcon[i - 1]);
				let $el = $($jsIcon[i]);
				changeIcon($elOld, $el, i);
			}
			setTimeout(function () {
				let $elOld = $($jsIcon[jsIconLength - 1]);
				let $el = $($jsIcon[0]);
				changeIcon($elOld, $el, i);
			}, (jsIconLength * 1000) - 500);
		}, jsIconLength * 1000);

		function changeIcon($elOld, $el, i) {
			setTimeout(function () {
				$elOld.removeClass('active slideInDown fadeInRight');
				$el.addClass(jsEffect[Math.floor(Math.random() * jsEffect.length)]);
			}, 1000 * i);
		}
	},
	nav: function () {
		$('.jsNavBtn').on('click', function (e) {
			$(this).toggleClass('active');
			$('.jsNav').toggleClass('active');
			e.preventDefault();
		});

		$('.jsExpand').on('click', function (e) {
			let $el = $(this).parent('a').parent('li');
			if ($el.hasClass('active')) {
				$el.removeClass('active');
			} else {
				$el.parent('ul').find('li').removeClass('active');
				$el.addClass('active');
			}
			e.preventDefault();
		});
	},
	header: function () {
		$(window).on('load scroll', function () {
			app.scrollTop = $(window).scrollTop();
			if (app.scrollTop > 195) {
				$('.jsHeader').addClass('fixed');
			} else {
				$('.jsHeader').removeClass('fixed');
			}
		});
	},
	callModal: function (className) {
		if ($(className).length) {
			$(className).on('click', function (e) {
				let $el = $(this),
					modalId = $el.attr('href'),
					baseClass = 'fb-';
				if (modalId == undefined || modalId == '') {
					modalId = $el.data('modal');
				}
				baseClass = 'fb-' + modalId;
				modalId = '#modal-' + modalId;
				$.fancybox.open({
					src: modalId,
					type: 'inline',
					opts: {
						baseClass: baseClass,
						afterShow: function (instance, current) {
							setTimeout(function () {
								$('.jsModalContent').animate({
									scrollTop: 0
								}, 0);
								$('.jsModalContent').css({
									'visibility': 'visible'
								});
							}, 1);
						},
						afterClose: function (instance, current) {
							$('.jsModalContent').css({
								'visibility': 'hidden'
							});
						}
					}
				});
				e.preventDefault();
			});
		}
	},
	closeModal: function (className) {
		if ($(className).length) {
			$(className).on('click', function (e) {
				$.fancybox.close();
				e.preventDefault();
			});
		}
	},
	carouselNews: function (className) {
		if ($(className).length) {
			let arrCarouselNews = [];
			$(className).each(function (index) {
				let $el = $(this),
					id = '#' + $el.children('.swiper-container').attr('id');
				let jsCarouselNews = new Swiper(id, {
					init: false,
					slidesPerView: 3,
					spaceBetween: 30,
					loop: false,
					autoHeight: false,
					autoplay: {
						delay: 10000,
						disableOnInteraction: false,
					},
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 5,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
					pagination: {
						el: id + ' ~ .jsPagination',
						clickable: true
					},
				});
				jsCarouselNews.init();
				arrCarouselNews.push(jsCarouselNews);
			});
		}
	},
	swiperThumbs: function(){
		var swiper = new Swiper(".mySwiper1", {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".mySwiper2", {
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
}
jQuery(function ($) {
	//=====>
	app.windowW = $(window).width();
	app.windowH = $(window).height();
	app.scrollTop = $(window).scrollTop();
	$(window).on('resize', function () {
		app.windowW = $(window).width();
		app.windowH = $(window).height();
	});
	$(window).on('scroll', function () {
		app.scrollTop = $(window).scrollTop();
	});
	// app.dot('.jsDot');
	// app.lazy('.jsLazy');
	// app.backToTop();
	// app.sns();
	// app.nav();
	// app.header();
	// app.callModal('.jsCallModal');
	// app.closeModal('.jsCloseModal');
	// //=====>
	// app.carouselBanner('.jsBanner');
	// app.carouselPartner('.jsPartner');
	// app.carouselProduct('.jsProduct');
	// if (app.windowW < 992) {
	// 	app.carouselNews('.jscNews');
	// }
	// $('.jsLang').on('click', function (e) {
	// 	$('.jsLangData').text($(this).children('span').text());
	// 	e.preventDefault();
	// });
	app.aosElement();
	app.swiperThumbs();
});