/**
 * Created by Administrator on 2016/8/7.
 */
$("document").ready(function(){

});
var BannerTime;
var index = 0;
function autoplay(){
    index ++;
    if(index==5){
        index=0;
    }
    $(".banner_wrap1").animate({
        marginLeft:-index*780
    },500);
    $(".banner_listbut").eq(index).addClass("on");
    $(".banner_listbut").eq(index).siblings().removeClass("on");
}
BannerTime = setInterval(function(){
    autoplay();
},3000);
/*
 * banner图事件
 * */
$(".banner_box").hover(function(){
    clearInterval(BannerTime);
    $("#banner_leftbut").animate({left:15},500);
    $("#banner_rightbut").animate({right:15},500);
},function(){
    BannerTime = setInterval(function(){
        autoplay();
    },3000);;
    $("#banner_leftbut").animate({left:-50},500);
    $("#banner_rightbut").animate({right:-50},500);

});
//列表小图标划过事件
$(".banner_listbut").hover(function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    index = $(".banner_listbut").index(this);
    $(".banner_wrap1").stop(true,true).animate({
        marginLeft:-(index*780)
    },500);
},function(){
});
// 向左向右 点击事件
$("#banner_leftbut").click(function () {
    index--;
    console.log(index);
    if(index<0){
        index=4;
    }
    $(".banner_listbut").eq(index).addClass("on");
    $(".banner_listbut").eq(index).siblings().removeClass("on");
    $(".banner_wrap1").stop(true,true).animate({
        marginLeft:-(index*780)
    },500);
});

$("#banner_rightbut").click(function () {
    index++;
    if(index==5){
        index=0;
    }
    $(".banner_listbut").eq(index).addClass("on");
    $(".banner_listbut").eq(index).siblings().removeClass("on");
    $(".banner_wrap1").stop(true,true).animate({
        marginLeft:-(index*780)
    },500);
});