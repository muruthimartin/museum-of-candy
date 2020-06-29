$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainNav");
        $nav.toogleClass("scrolled",$(this).scrollTop() > $nav.height());

    })
})