$('.home-properties-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    autoplay: false,
    prevArrow: "#btn-previous-properties",
    nextArrow: "#btn-next-properties",
    adaptiveHeight: true,
    respondTo: 'min',
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: ($(window).width() < 600) ? 1 : ($(window).width() < 1024 ? 2 : 3),
    responsive: [
        {
            breakpoint: 99999,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 3,
            }
        },        
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
            }
        }

    ]
});

$(window).on('resize orientationchange', function() {
    $('.home-properties-slider').slick('resize');
});


$('.menu-categories-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplaySpeed: 3000,
  autoplay: false,
  prevArrow: "",
  nextArrow: "",       
  adaptiveHeight: true,
  respondTo: 'min',
  slidesToShow: 3,
  slidesToScroll: 3,
	rows: 1,	    
	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    }			    

	 ]
});



$('.textboxes_slider').slick({
    dots: true ,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    autoplay:false,
    prevArrow: "",
    nextArrow: "",       
    adaptiveHeight: true,
    respondTo: 'min',
    slidesToShow: 3,
    slidesToScroll: 1,
	rows: 1,	    
	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }			    

	 ]
});

$('.posts-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    autoplay: false,
    prevArrow: "",
    nextArrow: "",
    adaptiveHeight: true,
    respondTo: 'min',
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
});	




$('.boxes-listing-slider').slick({
    dots: true ,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    autoplay:false,
    prevArrow: "",
    nextArrow: "",       
    adaptiveHeight: true,
    respondTo: 'min',
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,	    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }			    

    ]
});