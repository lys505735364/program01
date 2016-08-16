/**
 * Created by Administrator on 2016/8/14.
 */

$("document").ready(function() {
    //定义获取Cookie函数
    function getCookieArray(k) {
        //拿到一条一条的cookie数组
        var arr = document.cookie.split("; ");
        console.log(arr);
        for(var i= 0,len=arr.length;i<len;i++) {
            var key = arr[i].split("=")[0];
            var value = arr[i].split("=")[1];
            if(key==k) {
                return JSON.parse(value);//返回数组
            }
        }
        return false;//之前没有加入到购物车
    }
//----------------------------------------------------验证登录状态
    var loginCookie = getCookieArray("userKey");
    if (loginCookie) { ////已经登录
        $(".Has_login").css({display: "inline-block"});
        $(".Not_login").css({display: "none"});
        console.log(loginCookie);

    } else { //没有登录
        console.log("没登录");
        $(".Not_login").css({display: "inline-block"});
        $(".Has_login").css({display: "none"});
    }
});