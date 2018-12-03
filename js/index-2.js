$(function(){

    $(".login_wrap>a").on("click",function(){
        $("#login_f").animate({top:"20px"},500);
        return flase;
    });
    $(".login_wrap .login_close_btn,input[alt='로그인버튼']").on("click",function(){
        $("#login_f").animate({top:"-500px"},500);
        return false;
    });


    $('.bxslider').bxSlider({
        auto:true,
        autoHover:true,
    });
    $("#gnb_sub>li>a").on("mouseover focus",function(){
        $(".wrapper").css({"zIndex":-1000});
    });
    $("#nav").on("mouseleave",function(){
        $(".wrapper").css({"zIndex":10});
    })
   
});
