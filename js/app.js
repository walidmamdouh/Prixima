

$(document).ready(function () {
    //Owl
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['NEXT', 'PREV'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#project-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        dots: true,
        smartSpeed: 600,
        navText:["NEXT","PREV"],
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                
            },
            1140:{
                items: 2,
                center:true,
                dots:true,


            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        // margin: 24,
        // autoplay: true,
        // autoplayTimeout: 4000,
    })
});
