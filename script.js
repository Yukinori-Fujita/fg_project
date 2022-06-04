$(function () {
    // タイプライター section1
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

    typewriter({
        el: "#typewriter",
        speed: 100,
        string: "I AM YUKINORI FUJITA. I AM YUNA GUSHIKEN. FG_PROJECT START !",
    });
    // jqueryの場合
    // $(function(){
    //         var setElm = $('.split'),
    //         delaySpeed = 200,
    //         fadeSpeed = 0;
    //         setText = setElm.html();
    //         setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
    //             var elmThis = $(this);
    //             if (this.nodeType == 3) {
    //                 var $this = $(this);
    //                 $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
    //             }
    //         });
    //         $(window).load(function(){
    //             splitLength = $('.textSplitLoad').length;
    //             setElm.find('.textSplitLoad').each(function(i){
    //                 splitThis = $(this);
    //                 splitTxt = splitThis.text();
    //                 splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
    //             });
    //             setTimeout(function(){
    //                     setElm.html(setText);
    //             },splitLength*delaySpeed+fadeSpeed);
    //         });
    //     });

    // section3
    $(".tab-list li a").on("click", function (event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $(".box").removeClass("current");
        $(target).addClass("current");
    })
    // ここより上で描く
})