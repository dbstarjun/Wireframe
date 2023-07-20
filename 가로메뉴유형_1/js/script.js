$(".menu > ul > li").hover(
    function() {
        $(".menu > ul > li > ul").stop().slideDown();
    },
    function() {
        $(".menu > ul > li > ul").stop().slideUp();
    }
);