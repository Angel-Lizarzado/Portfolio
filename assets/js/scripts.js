; (function ($) {
    "use strict"


    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();



    const skillItems = document.querySelectorAll(".skill_item");

    skillItems.forEach((item) => {
        const progressBar = item.querySelector(".progress-bar");
        const progressValue = item.querySelector(".counter").textContent;

        progressBar.style.width = progressValue + "%";
        progressBar.setAttribute("aria-valuenow", progressValue);
    });

    $(window).scroll(function () {
        $(".fade-in").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });
})(jQuery)