$(function () {

    // ローディング画面
    var Emblem = {
        init: function (el, str) {
            var element = document.querySelector(el);
            var text = str ? str : element.innerHTML;
            element.innerHTML = '';
            for (var i = 0; i < text.length; i++) {
                var letter = text[i];
                var span = document.createElement('span');
                var node = document.createTextNode(letter);
                var r = (360 / text.length) * (i);
                var x = (Math.PI / text.length).toFixed(0) * (i);
                var y = (Math.PI / text.length).toFixed(0) * (i);
                span.appendChild(node);
                span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                element.appendChild(span);
            }
        }
    };

    Emblem.init('.emblem');

    window.onload = function () {
        $("#loading").addClass("loaded")
        // const spinner = document.getElementById('loading');
        // spinner.classList.add('loaded');

        // const spinner2 = document.getElementsByClassName("emblem");
        // spinner2.classList.add("loaded");
    }

    // ゆるキャラhover
    $('.Item').each(function () {

        let img_off = $(this).attr('src');
        let img_on = $(this).attr('src').replace('off', 'on');

        $(this).hover(
            function () {
                $(this).attr('src', img_on);
            },
            function () {
                $(this).attr('src', img_off);
            }
        );

    });


    // JSの場合
    const typewriter = (param) => {
        let el = document.querySelector(param.el);
        let speed = param.speed;
        let string = param.string.split("");

        string.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
            }, speed * index);
        });
    };

    typewriter({
        el: "#typewriter",
        speed: 100,
        string: "I AM YUKINORI FUJITA. I AM YUNA GUSHIKEN. FG_PROJECT START !",


    });



    // section3
    $(".tab-list li a").on("click", function (event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $(".box").removeClass("current");
        $(target).addClass("current");
    })

    // サガ
    // $("#ranking-btn").on("mouseover",function(){
    //     $(".ranking-text").addClass("hide");
    //     $(".fileter").addClass("hide");
    // })
    // $("#ranking-btn").on("mouseleave",function(){
    //     $(".ranking-text").removeClass("hide");
    //     $(".fileter").removeClass("hide");
    // })

    // ページトップに戻る
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    })
    pagetop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    })











    // ここより上で描く

})