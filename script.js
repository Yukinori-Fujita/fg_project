$(function () {

    // ゆるキャラhover
    $('.Item').each(function() {

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