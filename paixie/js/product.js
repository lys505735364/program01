/**
 * Created by Administrator on 2016/8/14.
 */
$("document").ready(function() {
    /************* 先验证登录状态*************/

    var iflogin  = getCookieArray("userKey");
    $(".nav_box_no1").hover(function () {
        $(this).css({borderRight: "none"});
        $(this).children("span").stop().animate({marginLeft: 40}, 500);
        $(this).children("p").stop().animate({marginLeft: 40}, 500);
        $(this).children(".nav_box_show").css({display: "block"});
    }, function () {
        $(this).css({borderRight: "1px solid #e7e7e7"});
        $(this).children("span").stop().animate({marginLeft: 20}, 500);
        $(this).children("p").stop().animate({marginLeft: 20}, 500);
        $(this).children(".nav_box_show").css({display: "none"});
    });

    /*****************菜单内容获取****************************/
    mgetnav.ajax("get", "json/nav0.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var index in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(0).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(0).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get", "json/nav1.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var index in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(1).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(1).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get", "json/nav2.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var index in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(2).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(2).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get", "json/nav3.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var index in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(3).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(3).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get", "json/nav4.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var index in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(4).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(4).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get", "json/nav5.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var index in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(5).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(5).children("a").append(htmlstr);
        }
    );
    mgetnav.ajax("get", "json/nav6.json",
        function (data) {
            var htmlstr = "";
            var len = data.title.length;
            htmlstr += "<div class='showbox_left'>";
            for (var j = 0; j < len; j++) {
                var title = data.title[j]["t" + j];
                htmlstr += "<h3 class='navbox_l_title'>";
                htmlstr += title;
                htmlstr += "</h3><span class='navbox_l_wrap'>";
                var obja = data.list[j];
                var objurl = data.urlist[j];
                var count = 0;
                for (var x in obja) {
                    count++;
                }
                for (var k = 0; k < count; k++) {
                    htmlstr += "<a href='";
                    htmlstr += objurl["u" + k];
                    htmlstr += "' class='navbox_l_link'>";
                    htmlstr += obja["a" + k] + "</a>";
                }
                htmlstr += "</span>";
            }
            htmlstr += "</div>";
            $(".nav_box_show").eq(6).append(htmlstr);
            htmlstr = "";
            htmlstr += "<img src='" + data.image + "'>";
            $(".showbox_img").eq(6).children("a").append(htmlstr);
        }
    );
    /********************菜单事件   *********************************/
    $(".All_shop_list").hover(function () {
        $(this).children(".nav_box").css({display: "block"});
    }, function () {
        $(this).children(".nav_box").css({display: "none"});
    });

    $(".close_navbox_but").click(function () {
        $(this).parent().parent().css({display: "none"});
    });

    $("body").on("mouseenter", ".showbox_img", function () {
        $(this).css({opacity: "0.9"});
    }).on("mouseleave", ".showbox_img", function () {
        $(this).css({opacity: "1"});
    });

/***********************************************************************************************************************三级菜单事件*/

$(".menu1").mouseenter(function(){
    $(this).children(".menu2_box").css({display:"block"});
}).mouseleave(function(){
    $(this).children(".menu2_box").css({display:"none"});
});

    $(".menu2_li").mouseenter(function(){
        $(this).children(".menu3_box").css({display:"block"});
    }).mouseleave(function(){
        $(this).children(".menu3_box").css({display:"none"});
    });
    $(".menu2_li a").mouseenter(function(){
        $(this).css({background:"#ced3e1"})
    }).mouseleave(function(){
        $(this).css({background:"#eceff7"})
    });

    $(".menu3_li a").mouseenter(function(){
        $(this).css({background:"#ced3e1"})
    }).mouseleave(function(){
        $(this).css({background:"#eceff7"})
    });

    $(".show_img").mousemove(function(evt){
        var e = evt||window.event;
        var disY = $(this).offset().top - $("body").scrollTop();
        var disX =$(this).offset().left - $("body").scrollLeft();
        var mpointX = e.clientX - disX;
        var mpointY = e.clientY - disY;
        var dis_Top = mpointY - $(".proimg_tip").height()/2;
        var dis_Left = mpointX - $(".proimg_tip").width()/2;
        dis_Top =(dis_Top<=0?0:dis_Top);
        dis_Top =(dis_Top>=200?200:dis_Top);
        dis_Left =(dis_Left<=0?0:dis_Left);
        dis_Left =(dis_Left>=200?200:dis_Left);

        $(".proimg_tip").css({top:dis_Top});
        $(".proimg_tip").css({left:dis_Left});
        $(".bigimg_box").css({marginLeft:-dis_Left*2});
        $(".bigimg_box").css({marginTop:-dis_Top*2});
    });
    $(".show_img").mouseenter(function(){
        $(".proimg_tip").css({display:"block"});
        $(".bigImg").css({display:"block"});
    }).mouseleave(function(){
        $(".proimg_tip").css({display:"none"});
        $(".bigImg").css({display:"none"});

    });


    $(".imglist li a img").click(function(){
        $(this).parent().parent().addClass("checked_img").removeClass("nochecked_img").siblings().removeClass("checked_img").addClass("nochecked_img");
        var str = $(this).attr("src");
        console.log(str);
        $(".show_img").children("img").attr("src",str);
        $(".bigimg_box").children("img").attr("src",str);
    });

    var P_Color=null;
    var P_Price=null;
    $(".pro_color").click(function(){
        $(this).css({borderColor:"#C00"});
        $(this).children("i").css({display:"block"});
        $(this).siblings().css({borderColor:"#e7e7e7"});
        $(this).siblings().children("i").css({display:"none"});
        P_Color = $(this).children("img").attr("title");
        P_Price = $(this).children("img").attr("data-price")
    });
    var P_Size = null;
    $(".pro_size").click(function(){
        $(this).css({borderColor:"#C00"});
        $(this).children("i").css({display:"block"});
        $(this).siblings().css({borderColor:"#e7e7e7"});
        $(this).siblings().children("i").css({display:"none"});
        P_Size =$(this).attr("rel");
    });
    var P_Count = $(".sumbox").children("input").val();
    $(".sumbox i").click(function(){
        var i = $(this).index(".sumbox i");
        var count = P_Count;
        if(i==1){
            count++;
            if(count>=10){
                count=10;
                $(this).removeClass("numUp").addClass("numupNo");
            }
            $(this).siblings("i").removeClass("numdownNo").addClass("numDown");
            $(".numText").val(count);
            $(".numText").attr("value",count);
            P_Count =count;
        }else{
            count--;
            if(count<=1){
                count=1;
                $(this).removeClass("numDown").addClass("numdownNo");
            }
            $(this).siblings("i").removeClass("numupNo").addClass("numUp");
            $(".numText").val(count);
            $(".numText").attr("value",count);
            P_Count =count;
        }
        console.log($(".numText").attr("value"));
        console.log($(".numText").val());
    });
    $(".sumbox input").blur(function(){
        var count = $(".sumbox").children("input").val();
        if(count<=1){
            count=1;
            $(this).siblings("i").eq(0).removeClass("numDown").addClass("numdownNo");
            $(this).siblings("i").eq(1).removeClass("numupNo").addClass("numUp");
        }if(count>=10){
            count =10;
            $(this).siblings("i").eq(0).removeClass("numdownNo").addClass("numDown");
            $(this).siblings("i").eq(1).removeClass("numUp").addClass("numupNo");
        }
        $(".numText").val(count);
        console.log($(".numText").attr("value"));
        P_Count =count;
    });
    $(".payments").hover(function(){
        $(this).children("div").css({width:"157",borderColor:"#e7e7e7"});
        $(this).children("div").children("ul").css({display:"block"});
    },function(){
        $(this).children("div").children("ul").css({display:"none"});
        $(this).children("div").css({width:"98",borderColor:"#FFF"});
    });
    var P_Id = $("#P_Title").attr("data-Pid");

    $("#tj_addcart").click(function () {
        if(P_Color==null||P_Size==null){
            alert("请选择颜色和尺码")
        }else{
            if(iflogin.id){
                var obj={
                    P_Id:P_Id,
                    P_Color:P_Color,
                    P_Price:P_Price,
                    P_Size:P_Size,
                    P_Count:P_Count
                };
                if(obj.P_Color=="黑色"){obj.img="image/color1.jpg"}
                if(obj.P_Color=="绯红色"){obj.img="image/color2.jpg"}
                if(obj.P_Color=="卡其色"){obj.img="image/color3.jpg"}
                console.log(obj.img);
                addToCookie(obj);
            }else{
                alert("当前未登录,请先登录!")
            }

        }

    });
    /***********************************************************************************************************************************Cookie相关操作*/
    var cookieArray  = getCookieArray("CartList");
    function getCookieArray(arry) {
        //拿到一条一条的cookie数组
        var arr = document.cookie.split("; ");
        for(var i= 0,len=arr.length;i<len;i++) {
            var key = arr[i].split("=")[0];
            var value = arr[i].split("=")[1];
            if(key==arry) {
                return JSON.parse(value);//返回数组
            }
        }
        return [];//之前没有加入到购物车
    }
    function  getIndexOf(obj) {
        for(var i= 0,len=cookieArray.length;i<len;i++) {
            if(cookieArray[i].P_Color==obj.P_Color&&cookieArray[i].P_Size==obj.P_Size&&cookieArray[i].P_Id==obj.P_Id) {
                return i;
            }
        }
        return -1;//该商品之前从未被添加过
    }
    function  addToCookie(obj) {
        var index = getIndexOf(obj);//检测当前要添加的商品在数组中是否已存在
        if(index!=-1) {//假如数组中已存在该商品,把该商品的数量加一
            //先操作cookie所对应的那个数组
            var count = parseInt(cookieArray[index].P_Count);
            count += parseInt(obj.P_Count);
            if(count>=10)count = 10;
            cookieArray[index].P_Count = count;
        }
        else {//把obj对应的商品添加到数组中
            cookieArray.push(obj);
        }
        var date = new Date();
        date.setDate(date.getDate()+3);
        document.cookie = "CartList="+JSON.stringify(cookieArray)+";expires="+date.toString();
        alert("成功添加到购物车")
    };
    $("#tj_buy").click(function(){
        location.href = "shopcart.html";
    });
/***********************************************************************商品详情选项卡 ****************************************************************8*/
    $(".tabbar ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var i = $(this).index(".tabbar ul li");
        $(".subcards").children('div').eq(i).css({display:"block"}).siblings().css({display:"none"});
        $("#subtabbar").children("ul").children("li").eq(i).addClass("current").siblings().removeClass("current");
        if(i==0){
            $(".details").css({display:"block"});
        }else{
            $(".details").css({display:"none"});
        }
    });
    $(".subtabbar ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var i = $(this).index(".subtabbar ul li");
        $(".subcards").children('div').eq(i).css({display:"block"}).siblings().css({display:"none"});
        $(".tabbar ul li").eq(i).addClass("current").siblings().removeClass("current");
        if(i==0){
            $(".details").css({display:"block"});
        }else{
            $(".details").css({display:"none"});
        }
    });
    var subtabbarleft =$("#subdescription").offset().left;
    var subtabbartop = $("#subdescription").offset().top;
    $(this).scroll(function(){
        var dis = $(this).scrollTop() -  subtabbartop;
        if(dis<0){
            dis=0;
            $("#subtabbar").css({position:"absolute",left:0});
        }else{
            $("#subtabbar").css({position:"fixed",left:subtabbarleft});
        }
    });


});