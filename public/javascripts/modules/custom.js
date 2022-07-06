/*===========================================
			BACKGROUND MOVE
=============================================*/
$("#banner-black").on("mousemove", function(e) {
    parallaxIt(e, ".shap-1", -50);

    parallaxIt(e, "", -10);
});
$("#banner-black").on("mousemove", function(e) {
    parallaxIt(e, ".shap-2", -100);

    parallaxIt(e, "", -10);
});
$("#banner-black").on("mousemove", function(e) {
    parallaxIt(e, ".shap-3", -150);
    parallaxIt(e, "", -10);
});

function parallaxIt(e, target, movement) {
    var $this = $("#banner-black");
    var relX = e.pageY - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement
    });
}

/*===========================================
			TESTIMONIAL Slider
=============================================*/
$(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 0,
    animateOut: "fadeOut",
    dots: false,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    nav: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 1
        },
        576: {
            items: 1
        },
        1920: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

/*===========================================
			SERVICE Slider
=============================================*/
$(".service-slider-area").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ],
    nav: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 1
        },
        576: {
            items: 2
        },
        1920: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

/*===========================================
			Blog page slider
=============================================*/
$(".post-slider-common-content").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    nav: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 1
        },
        576: {
            items: 2
        },
        1920: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

/*===========================================
			LOGO Slider
=============================================*/

$(".logo-slider").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        360: {
            items: 3
        },
        576: {
            items: 3
        },
        1920: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
});

/*===========================================
			AWARD Slider
=============================================*/
$(".award-slider").owlCarousel({
    loop: true,
    margin: 0,
    //	  animateOut: 'fadeOut',
    dots: false,
    navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right'></i>"],
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 1
        },
        576: {
            items: 1
        },
        1920: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

$(".blog-area-slider-content").owlCarousel({
    loop: true,
    margin: 0,
    animateOut: "fadeOut",
    dots: false,
    navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right'></i>"],
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 1
        },
        576: {
            items: 1
        },
        1920: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

/*===========================================
			PARTNER TWO Slider
=============================================*/
$(".partner-logo-slider-two").owlCarousel({
    loop: true,
    margin: 0,
    animateOut: "fadeOut",
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        360: {
            items: 3
        },
        576: {
            items: 3
        },
        1920: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
});
/*===========================================
			product TWO Slider
=============================================*/
$(".product-img").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 1
        },
        576: {
            items: 1
        },
        1920: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

/*===========================================
			PORTFOLIO
=============================================*/
var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows"
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this)
            .find(".number")
            .text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this)
            .find(".name")
            .text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$(".filters-button-group").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});
// change is-checked class on buttons
$(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "li", function() {
        $buttonGroup.find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

/*===========================================
			PRELODER AREA
=============================================*/

$(window).on("load", function() {
    $("#status").fadeOut();
    $("#preloader")
        .delay(350)
        .fadeOut("slow");
});

/*================================
    Navagation
================================*/

$(function() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() < 50) {
            $(".navber-one-area").removeClass("nav-one");
        } else {
            $(".navber-one-area").addClass("nav-one");
        }
    });
});
/*------------------------------------------------------------
 *  search
 * ------------------------------------------------------ */
$(function() {
    $('a[href="#search"]').on("click", function(event) {
        event.preventDefault();
        $("#search").addClass("open");
        $('#search > form > input[type="search"]').focus();
    });

    $("#search, #search button.close").on("click keyup", function(event) {
        if (
            event.target == this ||
            event.target.className == "close" ||
            event.keyCode == 27
        ) {
            $(this).removeClass("open");
        }
    });

    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $("form").on("submit", function(event) {
        event.preventDefault();
        return false;
    });
});

$(document).ready(function() {
    $("#bar").on("click", function() {
        $("#nav-toggle").toggle();
    });
});

/*================================================
				SMOOTH SCROLL
=================================================*/

if ($(".client-img-slider").length) {
    $(".client-img-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 5,
        loop: true,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: "100px",
        dots: true,
        focusOnSelect: true
    });
}
/*================================================
				Typed Banner
=================================================*/

new WOW().init();