/**
 * Created by Administrator on 2016/8/14.
 */
$("document").ready(function(){

    $(".nav_box_no1").hover(function(){
        $(this).css({borderRight:"none"});
        $(this).children("span").stop().animate({marginLeft:40},500);
        $(this).children("p").stop().animate({marginLeft:40},500);
        $(this).children(".nav_box_show").css({display:"block"});
    },function(){
        $(this).css({borderRight:"1px solid #e7e7e7"});
        $(this).children("span").stop().animate({marginLeft:20},500);
        $(this).children("p").stop().animate({marginLeft:20},500);
        $(this).children(".nav_box_show").css({display:"none"});
    });

    /*****************菜单内容获取****************************/
    mgetnav.ajax("get","json/nav0.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var index in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(0).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(0).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get","json/nav1.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var index in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(1).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(1).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get","json/nav2.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var index in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(2).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(2).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get","json/nav3.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var index in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(3).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(3).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get","json/nav4.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var index in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(4).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(4).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get","json/nav5.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var index in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(5).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(5).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get","json/nav6.json",
        function(data){
            var htmlstr="";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for(var j=0;j<len;j++){
                var title = data.title[j]["t"+j];
                htmlstr +="<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr +="</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count=0;
                for(var x in obja ){
                    count++;
                }
                for(var k=0;k<count;k++)
                {
                    htmlstr +="<a href='";
                    htmlstr += objurl["u"+k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a"+k]+"</a>";
                }
                htmlstr +="</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(6).append(htmlstr);
            htmlstr="";
            htmlstr +="<img src='"+data.image+"'>";
            $(".showbox_img").eq(6).children("a").append(htmlstr);
        }
    );
    /********************菜单事件   *********************************/
    $(".All_shop_list").hover(function(){
        $(this).children(".nav_box").css({display:"block"});
    },function(){
        $(this).children(".nav_box").css({display:"none"});
    });

    $(".close_navbox_but").click(function(){
        $(this).parent().parent().css({display:"none"});
    });

    $("body").on("mouseenter",".showbox_img",function(){
        $(this).css({opacity:"0.9"});
    }).on("mouseleave",".showbox_img",function(){
        $(this).css({opacity:"1"});
    });
/*************************************************************************************************/
    $(".Order_Rulerh").click(function(){
        $(this).addClass("this_rulerh");
        $(this).siblings(".Order_Rulerh").removeClass("this_rulerh");
    });

    $("#bysales").hover(function(){
        $(this).children(".bysales1").css({display:"block"});
    },function(){
        $(this).children(".bysales1").css({display:"none"});
    });
    $("#byprice").hover(function(){
        $(this).children(".byprice1").css({display:"block"});
    },function(){
        $(this).children(".byprice1").css({display:"none"});
    });

    $(".bysales1").children("p").click(function(){
        $("#bysales").addClass("this_rulerh").siblings().removeClass("this_rulerh");
        var i = $(this).index();
        $(this).removeClass("this_rulerh");
        $(this).parent().css({display:"none"});
    });
    $(".byprice1").children("p").click(function(){
        $("#byprice").addClass("this_rulerh").siblings().removeClass("this_rulerh");
        $(this).parent().css({display:"none"})
    });




    var $modeHTML =  $("#hand_get").html();
    var $template_1 = Handlebars.compile($modeHTML);
    $.ajax({
        type:'get',
        url: 'http://localhost:63342/paixie/php/goodslist.php?page=1',
        dataType:'json',
        async:true,
        success:function(data){
            console.log(data.good);
            var GetHTML = $template_1(data);
            $(".Goods_List").append(GetHTML);
        }
    });
    $("body").on("mouseenter",".Goods_item",function(){
        $(this).css({borderColor:"#cd2a2c",zIndex:"200","boxShadow":" 2px 2px 5px rgba(0,0,0,0.12)"});
        $(this).stop().animate({height:350},200);
    }).on("mouseleave",".Goods_item",function(){
        $(this).css({borderColor:"#f5f5f5",zIndex:"100","boxShadow":"none"});
        $(this).stop().animate({height:328},200);

    })

});