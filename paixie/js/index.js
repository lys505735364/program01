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
    /**********************   吸顶菜单未来元素事件  菜单     *****************************************/

    $("#scrolltop_nav_ul").on("mouseenter","li",function(){
        $(this).css({borderRight:"none"});
        $(this).children("span").stop().animate({marginLeft:40},500);
        $(this).children("p").stop().animate({marginLeft:40},500);
        $(this).children(".nav_box_show").css({display:"block"});
    }).on("mouseleave","li",function(){
        $(this).css({borderRight:"1px solid #e7e7e7"});
        $(this).children("span").stop().animate({marginLeft:20},500);
        $(this).children("p").stop().animate({marginLeft:20},500);
        $(this).children(".nav_box_show").css({display:"none"});
    });

    /**************************************************************/
	$(".close_navbox_but").click(function(){
		$(this).parent().parent().css({display:"none"});
	});
	$("body").on("mouseenter",".showbox_img",function(){
		$(this).css({opacity:"0.9"});
	}).on("mouseleave",".showbox_img",function(){
		$(this).css({opacity:"1"});		
	});
	/**
	**
	**ajax 获取菜单栏列表
	**
	**/
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

},function(){});
$(".floor_nav_list").hover(function(){
    var al =$(this).index();
    $(this).addClass("floor"+flo+"_nav_color");
    $(this).siblings().removeClass("floor"+flo+"_nav_color");
    if(al==0){
        $(".fnl_pointer").eq(flo).stop(true,true).animate({left:-32},200);
        $(".floor_box_li"+flo).eq(al).removeClass("dis01");
        $(".floor_box_li"+flo).eq(al).siblings().addClass("dis01");
    }
    if(al==1){
        $(".fnl_pointer").eq(flo).stop(true,true).animate({left:89},200);
        $(".floor_box_li"+flo).eq(al).removeClass("dis01");
        $(".floor_box_li"+flo).eq(al).siblings().addClass("dis01");
    }
    if(al==2){
        $(".fnl_pointer").eq(flo).stop(true,true).animate({left:220},200);
        $(".floor_box_li"+flo).eq(al).removeClass("dis01");
        $(".floor_box_li"+flo).eq(al).siblings().addClass("dis01");
    }
},function(){});

//
var openkeys = [true,true,true,true,true];
//此参数用于每一楼左侧下拉菜单
$(".bar_open").click(function(){
    var ii =$(this).index();
    if(openkeys[ii]){
        $(this).children(".openkey").css({backgroundPositionX:-310});
        $(".fl_bar_a").eq(flo).stop().animate({height:200},300);
    }else{
        $(this).children(".openkey").css({backgroundPositionX:-287});
        $(".fl_bar_a").eq(flo).stop().animate({height:98},300);
    }
    openkeys[ii] = !openkeys[ii];
});
/*****************/
$("body").on("mouseenter",".img_move",function(){
    $(this).stop().animate({marginLeft:-10},200);
}).on("mouseleave",".img_move",function(){
    $(this).stop().animate({marginLeft:0},200);
});
/*********************/

$(".culture_ban_a").hover(function(){
    var ccc = $(".culture_ban_a").index(this);
    $(this).addClass("culture_ban_hover").siblings().removeClass("culture_ban_hover");
    $(".culture_banner_box").stop(true,true).animate({marginLeft:-400*ccc},200);
},function(){});

/********************************************/

$(".season_img").hover(function(){
    $(this).children("a").children("i").stop().animate({top:-30},300);
    $(this).children("a").children("img").stop().animate({bottom:10},300);
}, function () {
    $(this).children("a").children("i").stop().animate({top:0},300);
    $(this).children("a").children("img").stop().animate({bottom:0},300);

});


/*********************************************/
//操蛋不会用taggle 还一直碰见这种切换的样式
var footnavkey = false;
$("#dolinkshow").click(function(){
    if(!footnavkey){
        $(this).css({backgroundPosition: "-239px 0"});
        $(".foot_linkText").css({height:80});
    }else{
        $(this).css({backgroundPosition: "-239px -17px"});
        $(".foot_linkText").css({height:20});
    }
    footnavkey = !footnavkey;
});

/*
$(".lovetuan_linkl").eq(0).children("img").attr("src","image/paixie.gif");

*/


