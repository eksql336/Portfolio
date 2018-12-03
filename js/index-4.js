$(function(){

    $(".login_wrap>a").on("click",function(){
        $("#log_f").animate({top:"70px"},500);
        return false;
    });
    $(".login_wrap .login_close_btn,input[alt='로그인버튼']").on("click",function(){
        $("#log_f").animate({top:"-500px"},500);
        return false;
    });


    $('.bxslider').bxSlider({
        auto:true,
        autoHover:true,
    });
    
   if($.cookie("#pop_wrap_btn")!="no"){
       $("#pop_wrap").show();
   }
   $("#pop_wrap_close").on("click",function(){
       $("#pop_wrap").fadeOut("fast");
       return false;
   })
   $("#pop_wrap_close_oneday").on("click",function(){
       $.cookie("#pop_wrap_btn","no",{expires:1});
       $("#pop_wrap").fadeOut("fast");
       return false;
   })
});
