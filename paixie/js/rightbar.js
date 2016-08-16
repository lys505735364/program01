/**
 * Created by Administrator on 2016/8/16.
 */
$(document).ready(function(){
    $(".goodnews_img").hover(function(){
        $(".goodnews_title").stop().animate({left:-60},200);
    },function(){
        $(".goodnews_title").stop().animate({left:0},200);
    });

    $(".history_img").hover(function(){
        $(".history_title").stop().animate({left:-60},200);
    },function(){
        $(".history_title").stop().animate({left:0},200);
    });

    $(".rightbar_code_l").hover(function(){
        $(".rigntbar_code_b").stop().animate({left:-138},200);
    },function(){
        $(".rigntbar_code_b").stop().animate({left:0},200);
    });

    $(".backtop_img").hover(function(){
        $(".backto_top_title").stop().animate({left:-60},200);
    },function(){
        $(".backto_top_title").stop().animate({left:0},200);
    });

    $(".server_img").hover(function(){
        $(".server_title").stop().animate({left:-60},200);
    },function(){
        $(".server_title").stop().animate({left:0},200);
    });
    $(window).scroll(function(){
        var dis = $(this).scrollTop();
        if(dis>800){
            $(".backto_top").css({height:"35"});
        }else{
            $(".backto_top").css({height:"0"});
        }
    })
    $(".backtop_img").click(function(){
        $("body").animate({scrollTop:0},300);
    })




});