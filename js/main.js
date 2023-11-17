$(document).ready(function() {
    //use aos animation
	AOS.init();
    $('#intro-btn').click(function(e){
        e.preventDefault();
        $(".banner-card.back").removeClass('hide');
        $(".banner-card.back").addClass('show');
    })
    $('.close-btn').click(function(e){
        e.preventDefault();
        $(".banner-card.back").addClass('hide');
    })
    //number count
    $(".comma").each(function () {
        var addComma = $(this).text();
        var addCommaNum = parseInt(addComma);
        addCommaNum = addCommaNum.toLocaleString("en-US");
    });
    
    function startCount() {
        $(".count").each(function () {
            $(this).prop('Counter',0).animate({
                Counter: 987655873
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now).toLocaleString('en'));
                }
            });
        });
    };

    //section menu click
    $('.nav-link.menu').on('click', function (e) {
        e.preventDefault();
        //  $(document).off("scroll");
        var thisSection = this;
        var target = this.hash,
                menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $('.nav-link.menu').removeClass('active');
            $(thisSection).addClass('active');

        });

    });

    //section menu scroll and add active class
    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 0)
        {
            $('a[href^="#claims"]').addClass('active');
            return;
        } //set first active nav when scroll page top
        $('.nav-link.menu').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            var scrollDona = $("#dona").position().top;
            if (refElement.length){
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.nav-link.menu').removeClass("active");
                    currLink.addClass("active");
                    refElement.addClass("section-active");                    
                } else {
                    currLink.removeClass("active");
                    refElement.removeClass("section-active");
                }
            }
            if ($('#dona').hasClass( "section-active" )) {
                startCount();
            }
        });
    });



});