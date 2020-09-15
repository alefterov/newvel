$('document').ready(() => {

    $('.menuButton__button').click(() => {
        $('header').addClass('active');
        $('.menu__container').addClass('active');
    });

    $('.closeMenu__button').click(() => {
        if ($('header').offset().top > 0) {
            $('.menu__container').removeClass('active');
        } else {
            $('header').removeClass('active');
            $('.menu__container').removeClass('active');
        }

    });
    $(document).scroll(() => {
        if ($('header').offset().top > 0) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });
    $(document).mouseup(function(e) {
        var div = $(".menu__container.active");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".menu__container").removeClass('active');
        }
    });
    let i = 1;
    $('.leftArea__slide_' + 1 + '').addClass('active');
    $('.rightArea__slide_' + 1 + '').addClass('active');
    $('.right__controller').click(() => {

        if (i == 6) {
            i = 1;
            $('.leftArea__slide_' + i + '').addClass('active');
            $('.leftArea__slide_' + 6 + '').removeClass('active');
            $('.rightArea__slide_' + i + '').addClass('active');
            $('.rightArea__slide_' + 6 + '').removeClass('active');
        } else {
            i++
            $('.leftArea__slide_' + i + '').addClass('active');
            $('.leftArea__slide_' + (i - 1) + '').removeClass('active');
            $('.rightArea__slide_' + i + '').addClass('active');
            $('.rightArea__slide_' + (i - 1) + '').removeClass('active');

        }
        $('.leftArea__line').addClass('active');
        $('.rightArea__line').addClass('active');
        setTimeout(() => {
            $('.leftArea__line').removeClass('active');
            $('.rightArea__line').removeClass('active');
        }, 1000);

    });

    $('.left__controller').click(() => {

        if (i == 1) {
            i = 6;
            $('.leftArea__slide_' + i + '').addClass('active');
            $('.leftArea__slide_' + 1 + '').removeClass('active');
            $('.rightArea__slide_' + i + '').addClass('active');
            $('.rightArea__slide_' + 1 + '').removeClass('active');
        } else {
            i--
            $('.leftArea__slide_' + i + '').addClass('active');
            $('.leftArea__slide_' + (i + 1) + '').removeClass('active');
            $('.rightArea__slide_' + i + '').addClass('active');
            $('.rightArea__slide_' + (i + 1) + '').removeClass('active');
        }
        $('.leftArea__line').addClass('active');
        $('.rightArea__line').addClass('active');
        setTimeout(() => {
            $('.leftArea__line').removeClass('active');
            $('.rightArea__line').removeClass('active');
        }, 1000);

    });

    $('.closePopap__button').click(() => {
        $('.popap__container').addClass('hide__popap');
        $('.bronzePopap__container').addClass('hide__popap');
        $('.silverPopap__container').addClass('hide__popap');
        $('.goldPopap__container').addClass('hide__popap');
        $('.doublegoldPopap__container').addClass('hide__popap');
        $('.triplegoldPopap__container').addClass('hide__popap');
    });
    $('.moreInfo__button').click(() => {
        $('.popap__container').removeClass('hide__popap');
    });
    $('.sugesrion__button').click(() => {
        $('.popap__container').removeClass('hide__popap');
    });

    $('.closePopap__button').click(() => {
        $('.popap__container').addClass('hide__popap');
    });
    $('#start').click(() => {
        $('.bronzePopap__container').removeClass('hide__popap');
    });
    $('#silver').click(() => {
        $('.silverPopap__container').removeClass('hide__popap');
    });
    $('#gold').click(() => {
        $('.goldPopap__container').removeClass('hide__popap');
    });
    $('#platin').click(() => {
        $('.doublegoldPopap__container').removeClass('hide__popap');
    });
    $('#investor').click(() => {
        $('.triplegoldPopap__container').removeClass('hide__popap');
    });
    $('.sugesrion__button').click(() => {
        $('.popap__container').removeClass('hide__popap');
    });

    $('.economiCalendar__container').addClass('active');
    $('#economic-сalendar').addClass('active');

    let isResizeble = false;


    $(document).scroll(() => {
        let windowPosition = $(window).scrollTop() + $(window).height();
        let workBottomBorder = $(".work__container").offset().top + $(".work__container").height();
        if (workBottomBorder < windowPosition && !isResizeble) {

            let start_1 = 0;
            let start_2 = 0;
            let start_3 = 0;
            let firstTimerT = setInterval(() => {
                start_1 += 1000;
                $('.lines__1').html("<h1>" + start_1 + "</h1>");
                if (start_1 > 16000) {
                    clearInterval(firstTimerT);
                }
            }, 1000 / 20);
            let firstTimerH = setInterval(() => {
                start_1 += 100;
                $('.lines__1').html("<h1>" + start_1 + "</h1>");
                if (start_1 > 17100) {
                    clearInterval(firstTimerH);
                }
            }, 1000 / 40);
            let firstTimerD = setInterval(() => {
                start_1 += 1;
                $('.lines__1').html("<h1>" + start_1 + "</h1>");
                if (start_1 > 17131) {
                    clearInterval(firstTimerD);
                }
            }, 1000 / 35);
            let secondTimerM = setInterval(() => {
                start_2 += 100000;
                $('.lines__2').html("<h1>" + start_2 + " $</h1>");
                if (start_2 > 5100000) {
                    clearInterval(secondTimerM);
                }
            }, 1000 / 64);
            let secondTimerT = setInterval(() => {
                start_2 += 1000;
                $('.lines__2').html("<h1>" + start_2 + " $</h1>");
                if (start_2 > 5161000) {
                    clearInterval(secondTimerT);
                }
            }, 1000 / 70);
            let secondTimerH = setInterval(() => {
                start_2 += 10;
                $('.lines__2').html("<h1>" + start_2 + " $</h1>");
                if (start_2 > 5161400) {
                    clearInterval(secondTimerT);
                }
            }, 1000 / 40);
            let secondTimerD = setInterval(() => {
                start_2 += 1;
                $('.lines__2').html("<h1>" + start_2 + " $</h1>");
            }, 1000 / 13);
            let thirdTimer = setInterval(() => {
                start_3 += 1;
                $('.lines__3').html("<h1>" + start_3 + "</h1>");
                if (start_3 > 8) {
                    clearInterval(thirdTimer);
                };
            }, 1000 / 10);


            setTimeout(() => {
                clearInterval(firstTimerT);
                clearInterval(firstTimerH);
                clearInterval(firstTimerD);
                clearInterval(secondTimerM);
                clearInterval(secondTimerT);
                clearInterval(secondTimerH);
                clearInterval(secondTimerD);
                clearInterval(thirdTimer);
            }, 1000);
            isResizeble = true;
        }


    });

    let slideMoove = 0;
    let n;
    for (n = 0; n < 15; n++) {
        $('.bottomSlider__item_' + n + '').css('left', (n * 200) - 600);
    }


    $(".bottomSlider__right").click(() => {

        slideMoove = slideMoove - 200;

        for (n = 0; n < 15; n++) {
            // if($('.slider__item_' + i + ''))
            let realLeft = parseInt($('.bottomSlider__item_' + n + '').css("left"), 10) - 200;


            $('.bottomSlider__item_' + n + '').css('left', realLeft);

            if (parseInt($('.bottomSlider__item_' + n + '').css("left"), 10) <= -600) {
                $('.bottomSlider__item_' + n + '').css("left", 2000);
                $('.bottomSlider__item_' + n + '').css("opacity", 0);
            }

            if (parseInt($('.bottomSlider__item_' + n + '').css("left"), 10) <= -400) {
                $('.bottomSlider__item_' + n + '').css("opacity", 0);

            } else {
                $('.bottomSlider__item_' + n + '').css("opacity", 1);
            }

            console.log(parseInt($('.bottomSlider__item_' + n + '').css("left"), 10));
        }
        $(".bottomSlider__right").css('pointer-events', 'none')
        setTimeout(() => {
            $(".bottomSlider__right").css('pointer-events', 'auto')

        }, 400);

        // $('.slider__area').css('margin-left', slideMoove);
    });
    $(".bottomSlider__left").click(() => {

        slideMoove = slideMoove + 200;

        for (n = 0; n < 15; n++) {
            let realLeft = parseInt($('.bottomSlider__item_' + n + '').css("left"), 10) + 200;
            $('.bottomSlider__item_' + n + '').css('left', realLeft);

            if (parseInt($('.bottomSlider__item_' + n + '').css("left"), 10) >= 2200) {
                $('.bottomSlider__item_' + n + '').css("left", -400);
                $('.bottomSlider__item_' + n + '').css("opacity", 0);
            }
            if (parseInt($('.bottomSlider__item_' + n + '').css("left"), 10) >= 2000) {
                $('.bottomSlider__item_' + n + '').css("opacity", 0);
            } else {
                $('.bottomSlider__item_' + n + '').css("opacity", 1);
            }

        }
        $(".bottomSlider__right").css('pointer-events', 'none')
        setTimeout(() => {
            $(".bottomSlider__right").css('pointer-events', 'auto')

        }, 400);

        // $('.slider__area').css('margin-left', slideMoove);
    });




    $('#analitic__pagination').click(() => {
        $('.marketReview__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.economiCalendar__container').addClass('active');

        $('#market-review').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#economic-calendar').addClass('active');
    });


    $('#economic-calendar').click(() => {
        $('.marketReview__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.economiCalendar__container').addClass('active');

        $('#market-review').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#economic-calendar').addClass('active');
    });
    $('#market-review').click(() => {
        $('.economiCalendar__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.marketReview__container').addClass('active');

        $('#economic-calendar').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#market-review').addClass('active');
    });
    $('#cuorces').click(() => {
        $('.economiCalendar__container').removeClass('active');
        $('.marketReview__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.cuorces__container').addClass('active');

        $('#economic-calendar').removeClass('active');
        $('#market-review').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#cuorces').addClass('active');
    });
    $('#criptomarket').click(() => {
        $('.economiCalendar__container').removeClass('active');
        $('.marketReview__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').addClass('active');

        $('#economic-calendar').removeClass('active');
        $('#market-review').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').addClass('active');

    });

});