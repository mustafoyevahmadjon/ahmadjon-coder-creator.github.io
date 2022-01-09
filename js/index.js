window.addEventListener('load', function () {
    // start navbar sticky
    $(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 0) {
                $('.navbar').addClass("sticky")
            } else {
                $('.navbar').removeClass("sticky")
            }
        })
        // start magnifyPopup
        $('.portfolio').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
            }
        })
    })
    // start cout
    $(".start-count").each(function () {
        const This = $(this);
        $({ Count: This.text() }).animate(
            { Count: This.parent().attr("data-count") },
            {
                duration: 200,
                easing: "linear",
                step: function () {
                    This.text(Math.floor(this.Count))
                },
                step: function () {

                }
            }
        )
    })
    // start scrollTop
    $(document).ready(function () {
        $(window).scroll(function () {
            let scroll = $(this).scrollTop();
            if (scroll >= 100) {
                $('#top').fadeIn();
            } else {
                $("#top").fadeOut();
            }
        })
        $("#top").click(function () {
            $("html,body").animate({
                scrollTop: 0,
            })
        })
    })
    // scroller navbar
    $(document).ready(function () {
        var $Links = $('.menu a');
        $Links.click(function (event) {
            event.preventDefault();
            $Links.removeClass('active')
            let id = $(this).addClass('active').attr('href');
            let target = $(id).offset().top - 60;
            $('html,body').animate({
                scrollTop: target,
            }, 500)
        })
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();

            $Links.each(function () {
                var target = $(this).attr('href');
                var selector = $(target).offset().top - 70;

                if (scroll >= selector) {
                    $Links.removeClass('active');
                    $(this).addClass('active');
                }
            })
        })
    });
    // start rateyo
    $(function () {
        $(".rateYo").rateYo({
            rating: 0,
            maxValue: 50,
            starWidth: "21px",
            "startColor": "#FF0000", //RED
        });
    });
    // start type
    var mixer = mixitup('.portfolio');
    var typed = new Typed(".typing", {
        strings: ["Dasturchi", "Gamer", "Blogger", "Freelancer", "Dizayner","Odam"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })
    // basic info
    var j = 0;

    $(window).scroll(function () {
        if ($(document).scrollTop() >= $('#resume').offset().top && j < 1) {
            j++;
            setTimeout(function () {
                new Typed('#name1', {
                    strings: ['Ahmadjon'],
                    typeSpeed: 200,
                    showCursor: false,
                    onComplete: function () {
                        new Typed('#name2', {
                            strings: ['Mustafayev'],
                            typeSpeed: 200,
                            showCursor: false,
                            onComplete: function () {
                                new Typed('#occ', {
                                    strings: ['schoolboy'],
                                    typeSpeed: 100,
                                    showCursor: false,
                                    onComplete: function () {
                                        new Typed('#uni1', {
                                            strings: ['schoolboy'],
                                            typeSpeed: 50,
                                            showCursor: false,
                                            onComplete: function () {
                                                new Typed('#uni2', {
                                                    strings: ['Front-End Back-End programmer'],
                                                    typeSpeed: 50,
                                                    showCursor: false,
                                                    onComplete: function () {
                                                        new Typed('#lang', {
                                                            strings: ['Uzbek <br> Russian'],
                                                            typeSpeed: 100,
                                                            showCursor: false,
                                                            onComplete: function () {
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }, 1000);

        }
    });

    new Vivus('my-svg', {duration: 200}, myCallback);

});