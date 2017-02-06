var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

$(document).ready(function () {
    navbarHeight = $('header').outerHeight();

    var mainHeight = (5 * $(".main").width()) / 8;
    $(".main-header").css('height', mainHeight + 'px');

    $(".search-tab").css('width', $(".navbar").width() + 'px');

    $(".nav-item").click(function (){
        $(".nav-item").removeClass("selected");
        $(this).addClass("selected");

        $(".nav-item").addClass("light-left-border");
        $(".nav-item").removeClass("dark-left-border");

        $(this).removeClass("light-left-border");
        $(this).next().removeClass("light-left-border");
        $(this).addClass("dark-left-border");
        $(this).next().addClass("dark-left-border");
    });

    $(".search-tab input").keyup(function () {
        if ($(this).val() != "") {
            $(this).siblings("img").show();
        }
        else {
            $(this).siblings("img").hide();
        }
    });

    $(".search-tab img").click(function () {
        $(this).parent().find("input").val("");
        $(this).hide();
    });

    $(".card-main-img").css('height', ($(".card-main-img").width() * 0.7) + 'px');

    $(".team .video").css('height', ($(".team").width() * 0.33) + 'px');
});


$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        if ($(window).width() > 460 || $(".nav-menu-mobile i").hasClass("fa-bars")) {
            $('header').animate({ marginTop: -500 }, 200);
        }
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').animate({ marginTop: 0 }, 200);
        }
    }

    lastScrollTop = st;
}
