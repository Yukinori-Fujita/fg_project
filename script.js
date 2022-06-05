$(function () {

    
    // jsの場合
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



    // JSの場合
     typewriter({
     el: "#typewriter",
     speed: 200,
     string: "I AM YUKINORI FUJITA. I AM YUNA GUSHIKEN. FG_PROJECT START !",
     });




    // section3

    $(".tab-list li a").on("click", function (event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $(".box").removeClass("current");
        $(target).addClass("current");
    })


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