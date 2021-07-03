$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()> 40){
            $("#btn__go-up").fadeIn();
        }
        else{
            $("#btn__go-up").fadeOut();
        }
    });

    $("#btn__go-up").click(function(){
        $("html,body").animate({scrollTop: 0},700);
    });
});

