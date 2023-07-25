$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.scroll li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');

            if (idx == 1) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        },
        onLeave: function (idx, nidx, dir) {
            $('.scroll li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            // if (dir == 'up') {
            //     $('.header').addClass('on')
            // } else {
            //     $('.header').removeClass('on')
            // }

        }
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        console.log(s.slideCount);

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })

    $('.business_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_business .itm').eq(c).addClass('on')
            .siblings().removeClass('on')

    })
    $('.business_slide').slick({
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: false,
    });


    $('.main_business .tab_arrows .left').on('click', function () {
        $('.business_slide').slick('slickPrev')
    });
    $('.main_business .tab_arrows .right').on('click', function () {
        $('.business_slide').slick('slickNext')
    });

    // .main_news에 화살표 버튼 눌러서 슬라이드 돌아가게 하기
    $('.main_news .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev');
    });
    $('.main_news .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext');
    });


    $('.product_slide2').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


})