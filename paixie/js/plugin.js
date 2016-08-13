/**
 * Created by Administrator on 2016/8/11.
 */

$("document").ready(function(){

    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/plugin.php?act=1&page=0&cl=0',
        dataType:'json',
        //data:$("form").serialize(),//username=xx&password=xxx
        async:true,
        success:function (data){//服务器返回数据v
            var arr1 = data.data;
            var len  = arr1.length;
            //console.log(arr1[0].stoptime);
            for(var i=0;i<len;i++){
                $(".lovetuan_list_item1").eq(i).children('a').attr('href',arr1[i].src).children('img').attr('src',arr1[i].url)
            }

        }
    });
    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/plugin.php?act=2&page=0&cl=0',
        dataType:'json',
        //data:$("form").serialize(),//username=xx&password=xxx
        async:true,
        success:function (data){//服务器返回数据v
            var arr1 = data.data;
            var len  = arr1.length;
            //console.log(arr1[0].stoptime);
            for(var i=0;i<len;i++){
                $(".lovetuan_list_item2").eq(i).children('a').attr('href',arr1[i].src).children('img').attr('src',arr1[i].url)
            }

        }
    });

});
/**********************************  楼层处理  *************    以及吸顶菜单的操作      ****************************************/
var floorlen = $(".floor").length;
var topnavdis =$(".index_body_top").offset().top+$(".index_body_top").height();
var scrollnav = false;
var floorflag =[true,true,true,true,true];
// 此参数 floorflag 用于记录每一楼层是否加载完成
$(window).scroll(function(){
    var dis =  $(this).scrollTop()+$(this).height();
    var showdis1 = $(".floor").eq(0).offset().top;
    var showdis2 = $(".floor").eq(floorlen-1).offset().top+$(".floor").eq(floorlen-1).height()*3/2;
    //吸顶菜单的判断
    if($(this).scrollTop()>topnavdis){
        $(".Scroll_TopBar").fadeIn(400);
        if(!scrollnav){
            $("#scrolltop_nav_ul").append($(".nav_box").html());
            scrollnav = true;
        }
    }else{
        $(".Scroll_TopBar").fadeOut(400);
    }
/*******************    楼层是否加载的判断     ***************************/
    for(var fff=0;fff<floorlen;fff++)
    {
        if(dis>$(".floor").eq(fff).offset().top)
        {
            if(floorflag[fff]){
                floor1plugin(fff);
                floorflag[fff]=false;

            }
        }
    }



    /*******************************************/
    //左侧楼层提示的判断
    if(dis> showdis1&&dis<showdis2){
        $("#index_left").fadeIn(400);
    }else{
        $("#index_left").fadeOut(400);
    }
    for(var j=floorlen-1;j>=0;j--){
        if(dis>$(".floor").eq(j).offset().top+$(".floor").eq(j-1).height()/2){
            $(".Floor_li").eq(j).children().css({display:'block'});
            $(".Floor_li").eq(j).siblings().children().css({display:'none'});
            break;
        }
    }
    //var fheight = $(".floor").eq(0).height();  //楼层距顶部距离
});

/*******************************  楼层鼠标划过 **************************************/
$(".Floor_li").hover(function(){
    $(this).children().css({display:'block'});
},function(){
    $(this).children().css({display:'none'});
    var dis =  $(window).scrollTop()+$(window).height();
    for(var j=floorlen-1;j>=0;j--){
        if(dis>$(".floor").eq(j).offset().top+$(".floor").eq(j-1).height()/2){
            $(".Floor_li").eq(j).children().css({display:'block'});
            break;
        }
    }
});
$(".Floor_li").click(function(){
   var goto = $(this).index();
    var floornum =$(".floor").eq(goto).offset().top-20;
    $("body,html").animate({
        scrollTop: floornum
    });
});
/***************************************     吸顶菜单的相关操作         **********************************************/

$(".scrolltop_nav_title").hover(function(){
    $(".top_scroll_nav").css({display:"block"});
},function(){
    $(".top_scroll_nav").css({display:"none"});
});

/*******************************     楼层内容加载                *********************************************/

function  floor1plugin(n){
    console.log(n+"楼已经加载");
    var m= n+1;
    var index = n;
    /******************左侧广告图片加载***********************/
    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/plugin.php?page='+m+'&cl=lb&act=0',
        dataType:'json',
        //data:$("form").serialize(),//username=xx&password=xxx
        async:true,
        success:function (data){//服务器返回数据v
            var arr1 = data.data[0];
            //console.log(arr1);
            var htmlstr = "<img src='"+arr1.src+"'>";
            //console.log(htmlstr);
            $(".fl_bar_img").eq(index).attr('href',arr1.hre);
            $(".fl_bar_img").eq(index).append(htmlstr);
        }
    });

    /*********************  右侧豪华房间加载  **************************************/
    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/plugin.php?page='+m+'&cl=r1&act=0',
        dataType:'json',
        //data:$("form").serialize(),//username=xx&password=xxx
        async:true,
        success:function (data){//服务器返回数据v
            var arr1 = data.data;
            for(var k=0;k<arr1.length-3;k++){
                var htmlstr ="<img src='"+arr1[k].src+"' class='img_move'>";
                $("#f"+index+"_img0_"+k).attr("href",arr1[k].hre);
                $("#f"+index+"_img0_"+k).append(htmlstr);

            }
            for(var j=arr1.length-3;j<arr1.length;j++){
                var htmlstr ="<img src='"+arr1[j].src+"' class='img_move'>";
                $("#f"+index+"_img0_"+j).attr("href",arr1[j].hre);
                $("#f"+index+"_img0_"+j).children("span").children("b").html(arr1[j].tltle);
                $("#f"+index+"_img0_"+j).children("span").children("i").html("￥"+arr1[j].price);
                $("#f"+index+"_img0_"+j).append(htmlstr);

            }
        }
    });
    /*************************  没品位的普通标间做起来就是简单     **********/
    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/plugin.php?page='+m+'&cl=r2&act=0',
        dataType:'json',
        //data:$("form").serialize(),//username=xx&password=xxx
        async:true,
        success:function (data){//服务器返回数据v
            var arr1 = data.data;
            for(var j=0;j<arr1.length;j++){
                var htmll="<a href='"+arr1[j].hre+"' class='pxh_img'>";
                htmll +="<img src='"+arr1[j].src+"'><span>"+arr1[j].tltle+"</span>";
                htmll +="<span class='bx_buy'>￥"+arr1[j].price+"</span></a>";
                $(".floor_box_li"+index).eq(1).children("ul").children("li").eq(j).append(htmll);//floor_box_li1

            }
        }
    });
    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/plugin.php?page='+m+'&cl=r3&act=0',
        dataType:'json',
        //data:$("form").serialize(),//username=xx&password=xxx
        async:true,
        success:function (data){//服务器返回数据v
            var arr1 = data.data;
            for(var j=0;j<arr1.length;j++){
                var htmll="<a href='"+arr1[j].hre+"' class='pxh_img'>";
                htmll +="<img src='"+arr1[j].src+"'><span>"+arr1[j].tltle+"</span>";
                htmll +="<span class='bx_buy'>￥"+arr1[j].price+"</span></a>";
                $(".floor_box_li"+index).eq(2).children("ul").children("li").eq(j).append(htmll);

            }
        }
    });

}
