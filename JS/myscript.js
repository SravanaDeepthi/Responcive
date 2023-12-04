/*============================
-----------Preloader---------
==============================*/
$(window).on('load', function () {
    $('#child_preloader').fadeOut();
    $('#parent_preloader').delay(350).fadeOut();
});

/*============================
-----------Team-Owl-carousel---------
==============================*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<span><i class="fa-solid fa-caret-left"></i></span>', '<span><i class="fa-solid fa-caret-right"></i></span>']
    });
});

/*============================
-----------Progress Bar---------
==============================*/

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy()
    }, {
        offset: 'bottom-in-view'
    });
});

/*==================================================
------Githun Responsive-tabs (usages copy past)-------
=======================================================*/

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*============================
-----------Portfolio---------
==============================*/
$(window).on('load', function () {
    // init Isotope
    var $grid = $('.grid').isotope({});
    // filter items on button click
    $('.portfolio-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        //Adding Custome active class
        $('.portfolio-buttons').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*============================
-----------Magnific Popup---------
==============================*/

$('.portfolio-item').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
});

/*============================
-----------Copy---------
==============================*/

let ip = document.querySelector('.ip');
let btn = document.querySelector('.btn')

function copy() {
    ip.select();
    document.execCommand('copy')
}

 /*============================
-----------Testimonial-Owl-carousel---------
==============================*/
$(document).ready(function () {
    $("#testimonials-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<span><i class="fa-solid fa-caret-left"></i></span>', '<span><i class="fa-solid fa-caret-right"></i></span>']
    });
});