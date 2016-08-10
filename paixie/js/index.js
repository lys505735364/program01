/**
 * Created by Administrator on 2016/8/5.
 */
$("document").ready(function(){
    /*
    * 系统 加载行为
    * */



	/****************菜单栏事件********************/
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
	$(".close_navbox_but").click(function(){
		$(this).parent().parent().css({display:"none"});
	});
	$(".showbox_img").hover(function(){
		$(this).css({opacity:"0.9"});
	},function(){
		$(this).css({opacity:"1"});		
	});
	/**
	**
	**ajax 获取菜单栏列表
	**
	**/
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
    /**************菜单左侧图片划过事件*********************/

    $(".body_topL_link").hover(function(){
        $(this).css({opacity: 0.9});
    },function(){
        $(this).css({opacity: 1});
    });

});
/*
 * 行为事件
 * */
//我的购物车 划过 事件
$(".index_Cart").hover(function(){
    $(".index_CartList").css({display:"block"});
},function(){
    $(".index_CartList").css({display:"none"});
});
// 我的拍鞋 划过 出现菜单
$(".index_MyPX").hover(function(){
    $(".index_MyPX_list").css({display:"block"});
    $(".index_MyPX_Icon").css({backgroundPosition:"-147px -495px"});
},function(){
    $(".index_MyPX_Icon").css({backgroundPosition:"-147px -502px"});
    $(".index_MyPX_list").css({display:"none"});
});

$(".index_MyPX_Link").hover(function(){
    $(".index_MyPX_Link").css({color:"#fa5000"});
},function(){
    $(".index_MyPX_Link").css({color:"#666"});
});

$(".mypx_list_link").hover(function(){
        $(this).css({background:"#eee",color:"#fa5000"});
        $(".index_MyPX_Link").css({color:"#666"});
    },function(){
        $(this).css({background:"#fff",color:"#666"});
    }
);
//网站导航划过
$(".Web_Nav").hover(function(){
    $(".Web_nav_list").css({display:"block"});
    $(".Web_Nav_Icon").css({backgroundPosition:"-147px -495px"});
},function(){
    $(".Web_Nav_Icon").css({backgroundPosition:"-147px -502px"});
    $(".Web_nav_list").css({display:"none"});
});

$(".webnavitem").hover(function(){
        $(this).css({background:"#eee",color:"#fa5000"});
        $(".index_MyPX_Link").css({color:"#666"});
    },function(){
        $(this).css({background:"#fff",color:"#666"});
    }
);
//二维码划过事件
$(".Double_Code").hover(function(){
    $(this).css({opacity: 0.9});
},function(){
    $(this).css({opacity: 1});
});
/*
* banner图下商品划过
* */
$(".index_topAD1_img").hover(function(){
    $(this).stop().animate({marginLeft:-10},300);
},function(){
    $(this).stop().animate({marginLeft:0},300);
});
$(".index_topAD2_img").hover(function(){
    $(this).stop().animate({marginLeft:-5},300);
},function(){
    $(this).stop().animate({marginLeft:0},300);
});

/*
* Banner右侧小banner
* */
var lovechange = true;
var banner2 ="";
var bannercount2=0;
banner2 = setInterval(function(){
    bannercount2++;
    if(bannercount2==3)
    bannercount2=0;
    $(".topR_banner_box").animate({marginLeft:-(bannercount2)*220},500);
    $(".topR_banner_number").html(bannercount2+1+"/3");
},2000);

$(".topR_hover_link").hover(function(){
    var thindex = $(".topR_hover_link").index(this);
    $(this).css({borderBottom: "2px solid #333"}).siblings().css({borderBottom:"none"});
    $(".topR_hover_banner").eq(thindex).css({display:"block"}).siblings().css({display:"none"});

},function(){});
$(".thbl01").hover(function(){
    $(".thbl02").stop().animate({top:110},200);
    $(".thbl03").stop().animate({top:156},200);
});
$(".thbl02").hover(function(){
    $(this).stop().animate({top:46},200);
    $(".thbl03").stop().animate({top:156},200);
});
$(".thbl03").hover(function(){
    $(this).stop().animate({top:110},200);
    $(".thbl02").stop().animate({top:46},200);
});
$(".thbr01").hover(function(){
    $(".thbr02").stop().animate({top:110},200);
    $(".thbr03").stop().animate({top:156},200);
});
$(".thbr02").hover(function(){
    $(this).stop().animate({top:46},200);
    $(".thbr03").stop().animate({top:156},200);
});
$(".thbr03").hover(function(){
    $(this).stop().animate({top:110},200);
    $(".thbr02").stop().animate({top:46},200);
});

$(".lovetuan_nav1").hover(function(){
    var ln = $(this).index();
    if(ln==0){
        $(".lovetuan_list1").eq(0).removeClass("lovetuan_list_none");
        $(".lovetuan_list1").eq(1).addClass("lovetuan_list_none");
        $(".lovetuan_icon").css({left:0});
    }else{
        console.log(ln);
        $(".lovetuan_list1").eq(0).addClass("lovetuan_list_none");
        $(".lovetuan_list1").eq(1).removeClass("lovetuan_list_none");
        $(".lovetuan_icon").css({left:92});

    }
},function(){});




var lovechange = true;
//此参数用于爱团购  换一批 切换
$(".lovetuan_change").click(function(){
    lovechange = !lovechange;
    if(!lovechange){
        $(".lovetuan_list1").css({left:"-1218px"});
    }else{
        $(".lovetuan_list1").css({left:0});
    }
});
/**/
var flo = 0;//此参数用于记录当前楼层
$(".floor").hover(function(){
    flo = $(".floor").index(this);
    console.log("这是第:"+flo+"楼");

},function(){});

$(".floor_nav_list").hover(function(){
    var al =$(this).index();
    console.log(al);
    $(this).addClass("floor"+flo+"_nav_color");
    $(this).siblings().removeClass("floor"+flo+"_nav_color");
    $(".floor_list").eq(flo).html(al);
    if(al==0){
        $(".fnl_pointer").eq(flo).stop(true,true).animate({left:-32},200)
    }
    if(al==1){
        $(".fnl_pointer").eq(flo).stop(true,true).animate({left:89},200);
    }
    if(al==2){
        $(".fnl_pointer").eq(flo).stop(true,true).animate({left:220},200);
    }
},function(){});