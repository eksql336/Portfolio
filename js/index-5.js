$(function(){  
    //모바일 유틸메뉴
    $(".tablet_gnb02").on("click",function(){
        $(".mob_gnb_wrap").animate({left:"20%"},500);
        return false;
    });
    $(".gnb_close_btn").on("click",function(){
        $(".mob_gnb_wrap").animate({left:"120%"},500);
        return false;
    });

    $(".mob_gnb_menu1>a").on("click",function(){
        var menu1 = $(".mob_gnb_menu1>ul");
        if(menu1.is(":visible")){
            menu1.slideUp("normal");
            return false;
        }
        else{
            menu1.slideDown("normal");
            return false;
        }
    });

    $(".mob_gnb_menu2>a").on("click",function(){
        var menu2 = $(".mob_gnb_menu2>ul");
        if(menu2.is(":visible")){
            menu2.slideUp("normal");
            return false;
        }
        else{
            menu2.slideDown("normal");
            return false;
        }
    });
    $(".mob_gnb_menu3>a").on("click",function(){
        var menu3 = $(".mob_gnb_menu3>ul");
        if(menu3.is(":visible")){
            menu3.slideUp("normal");
            return false;
        }
        else{
            menu3.slideDown("normal");
            return false;
        }
    });
    $(".mob_gnb_menu4>a").on("click",function(){
        var menu4 = $(".mob_gnb_menu4>ul");
        if(menu4.is(":visible")){
            menu4.slideUp("normal");
            return false;
        }
        else{
            menu4.slideDown("normal");
            return false;
        }
    });

    //웹 유틸메뉴
    $('#nav_menu1').mouseover(function(){
        $('#menu1').slideDown('fast');
        $('#nav_menu1>a').css('background-color','#2d2926').css('color','#fff');

        if($('#menu1').is(":visible")){
            $('#nav_menu1').mouseleave(function(){
                $('#menu1').slideUp();
                $('#nav_menu1>a').css('background-color','#fff').css('color','#000');
            });
        }
    });
    $('#nav_menu2').mouseover(function(){
        $('#menu2').slideDown('fast');
        $('#nav_menu2>a').css('background-color','#2d2926').css('color','#fff');

        if($('#menu2').is(":visible")){
            $('#nav_menu2').mouseleave(function(){
                $('#menu2').slideUp();
                $('#nav_menu2>a').css('background-color','#fff').css('color','#000');

            });
        }
    });
    $('#nav_menu3').mouseover(function(){
        $('#menu3').slideDown('fast');
        $('#nav_menu3>a').css('background-color','#2d2926').css('color','#fff');


        if($('#menu3').is(":visible")){
            $('#nav_menu3').mouseleave(function(){
                $('#menu3').slideUp();
                $('#nav_menu3>a').css('background-color','#fff').css('color','#000');

            });
        }
    });
    $('#nav_menu4').mouseover(function(){
        $('#menu4').slideDown('fast');
        $('#nav_menu4>a').css('background-color','#2d2926').css('color','#fff');


        if($('#menu4').is(":visible")){
            $('#nav_menu4').mouseleave(function(){
                $('#menu4').slideUp();
                $('#nav_menu4>a').css('background-color','#fff').css('color','#000');

            });
        }
    });
    
    //배너 나타나기
    $(".notice_right a").on("click",function(){
        var rightbanner = $(".notice_right_banner");

        if(rightbanner.is(":visible")){
            rightbanner.slideUp("fast");
            $("img",this).attr("src",$("img",this).attr("src").replace("up_btn.png","down_btn.png"));
            return false;
        }
        else{
            rightbanner.slideDown("normal");
            $("img",this).attr("src",$("img",this).attr("src").replace("down_btn.png","up_btn.png"));
            return false;
        }
    });

    //배너 캐러셀
    $('.bxslider').bxSlider({
        auto:true,
        autoHover:true,
    });
    //패럴랙스
    $(window).resize(function(){
        $('.bg-holder').width($(window).width()).height($(window).height());
        
    })
    $('.bg-holder').parallaxScroll({
        friction:0.9
    });
});
