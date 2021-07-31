//owl carousel for blog

const responsive = {
    320 : {
    items: 1
},
    520 : {
    items: 2
},
    960 : {
    items: 3
}
}

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:false,
    autoplayTimeout: 7000,
    stagePadding: 30,
    dots:true,
    nav:true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive,
});


//scroll top
$('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})