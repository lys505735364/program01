/**
 * Created by Administrator on 2016/8/13.
 */
$(document).ready(function(){
    $(".clear_butt").css({display:"none"});
    var times = [0,0];
    var flag = [false,false];
    var u_id = null;
    var u_pwd = null;
   $(".username").focus(function(){
       $(this).siblings("i").css({backgroundPositionX:-39});
       $(this).siblings("span").css({display:"none"});
       $(this).siblings(".clear_butt").css({display:"inline-block"});
       $(this).parent().removeClass("blshadow");
       $(this).parent().addClass("ofshadow");
   }).blur(function(){  //////-------------------------------失焦事件
       $(this).siblings("i").css({backgroundPositionX:0});
       $(this).siblings("span").css({display:"inline-block"});
       $(this).siblings(".clear_butt").css({display:"none"});
       if($(this).val()){
           //如果值存在
           $(this).siblings("span").css({display:"none"});
           $(this).parent().removeClass("blshadow");
           $(this).parent().removeClass("ofshadow");
           if($(this).index(".username")==0){
               $(".name_err").html("");
               flag[0]=true;
               times[0]=1;
           }else{
               $(".pass_err").html("");
               flag[1]=true;
               times[1]=1;
           }

       }else{
           //----------------------------------如果值为空
           if(times[0]==0){ //第一次空值
               $(this).parent().removeClass("blshadow");
               $(this).parent().removeClass("ofshadow");
           }else{ //后来 值 置空
               $(this).parent().removeClass("ofshadow");
               $(this).parent().addClass("blshadow");
               if($(this).index(".username")==0){
                   $(".name_err").html("请输入手机号/邮箱");
               }else{
                   $(".pass_err").html("请输入密码")
               }
               flag[0] = false;
           }
       }
   });
    $(".clear_butt").click(function(){
        var i = $(this).index(".clear_butt");
        $("username").eq(i).attr("value","");
        $(this).parent().removeClass("ofshadow");
        $(this).parent().addClass("blshadow");
        flag[i]=false;
        if(i==0){
            $(".name_err").html("请输入手机号/邮箱");
        }else{
            $(".pass_err").html("请输入密码")
        }
    });
    $(".login_button").click(function(){
        var free = $("#freelogin").is(":checked");
        var relg = false;
        if(flag[0]&&flag[1]){
            relg=true;
        }
        console.log(relg);
        if(relg){
            $(".login_button").html("登录中...");
            var uname = $(".username").eq(0).val();
            var pwd = $(".username").eq(1).val();
            $.ajax({
                type:'get',
                url: 'http://localhost:63342/paixie/php/login.php?name='+uname+"&pwd="+pwd,
                dataType:'json',
                async:true,
                success:function (data){
                    var obj = data.data[0];
                    console.log(obj);
                    if(data.code==200){
                        if(obj){
                            $(".login_button").html("登录成功5秒后跳转...");
                            setTimeout(function(){
                                if(free==true){
                                    var date = new Date();
                                    date.setDate(date.getDate()+3);
                                    document.cookie = "userKey="+JSON.stringify(obj)+";expires="+date.toString();
                                }else{
                                    document.cookie = "userKey="+JSON.stringify(obj);
                                }
                                location.href = "index.html";
                            },5000)
                        }
                        else{
                            alert("账号密码不匹配!");
                        }
                    }else{
                        alert("登录异常");
                    }

                }
            })
        }
    })

});