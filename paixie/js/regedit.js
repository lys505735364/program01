/**
 * Created by Administrator on 2016/8/13.
 */
$("document").ready(function(){
    $(".errorshow").css({display:'none'});
    $(".right_show").css({display:'none'});
    $(".pwd_strong").css({display:'none'});
    $(".phonecode").css({display:'none'});
    $(".successbox").css({display:"none"});
    var bugarr = [
        "请输入邮箱/手机号",
        "邮箱/手机格式错误",
        "该手机已存在，请更换手机或直接登录！",
        "6-20位字符,可使用字母,数字或符号的组合",
        "密码长度只能在6-20位字符之间",
        "请再次输入密码",
        "密码不能为空",
        "再次输入的密码不一致",
        "验证码不一致",
        "请输入验证码"
    ];
    var times = [0,0,0,0]; //各个输入框的输入状态
    var flag = [false,false,false,false,true];
    var u_id = null;
    var u_pwd = null;
    var regname = /^1[34578]\d{9}$/;
    $("#u_name").focus(function(){
        $(this).parent().addClass("it_focusr");
        $(this).parent().removeClass("it_focuse");
        $(this).siblings(".infor").css({display:"none"});

        if(!flag[0]){ //---------------------------------------------------------------------------------聚焦-------------这个值---------------不合法
            if(times[0]==0){
                $(this).siblings(".errorshow").css({display:"inline-block"});
                $(this).siblings(".errorshow").removeClass("badinfor");
                $(this).siblings(".errorshow").addClass("goodinfor");
                $(this).siblings(".errorshow").html(bugarr[0]);
            }else{
                $(this).siblings(".errorshow").css({display:"inline-block"});
                $(this).siblings(".errorshow").removeClass("badinfor");
                $(this).siblings(".errorshow").addClass("goodinfor");
                $(this).siblings(".errorshow").html(bugarr[0]);
            }
        }else{//--------------------------聚焦-这个值合法-------------------------------
            $(this).parent().siblings(".right_show").css({display:"none"});
            $(this).siblings(".errorshow").css({display:"inline-block"});
            $(this).siblings(".errorshow").removeClass("badinfor");
            $(this).siblings(".errorshow").addClass("goodinfor");
            $(this).siblings(".errorshow").html(bugarr[0]);

        }
    }).blur(function(){
        if($(this).val()){//------------------------ ===--------------------------------------------------------------   失焦    -------------------值是存在的
            if(times[0]==0)times[0]+=1;
            $(this).parent().removeClass("it_focusr");
            $(this).parent().addClass("it_focuse");
            //var ifrig = $(this).val().test(regname);
            //regname.test($(this).val());
            if(!(regname.test($(this).val()))){//---------------------------------------------------------------------------------如果这个值不合法
                $(this).siblings(".errorshow").removeClass("goodinfor");
                $(this).siblings(".errorshow").addClass("badinfor");
                $(this).siblings(".errorshow").html(bugarr[1]);
                /*flag[0] =false;*/
            }else{//---------------------------------------------------------------------------------------------------------------如果这个值--合法
                $(this).siblings(".errorshow").css({diplay:"none"});
                searchnum($(this).val(),$(this));//调用 查询函数
            }
        }else{ //------------------------------------------------------------------------------------------------------失焦   -----------------------值不存在
            //$(".phonecode").css({display:"block"});
            if(times[0]==0){
                $(this).siblings(".errorshow").css({display:"none"});
                $(this).siblings(".errorshow").addClass("goodinfor");
                $(this).parent().removeClass("it_focusr");
                $(this).parent().removeClass("it_focuse");
                $(this).siblings(".infor").css({display:"inline"});
            }else{
                $(this).siblings(".errorshow").removeClass("goodinfor");
                $(this).siblings(".errorshow").addClass("badinfor");
                $(this).siblings(".errorshow").html(bugarr[0]);
                $(this).parent().removeClass("it_focusr");
                $(this).parent().addClass("it_focuse");
                flag[0] =false;
            }
        }
    });
    function searchnum(numb,obj){
        var name = numb;
        $this =obj;
        $.ajax({
            type:'get',
            url: 'http://localhost:63342/paixie/php/research.php?name='+name,
            dataType:'json',
            //data:$("form").serialize(),//username=xx&password=xxx
            async:true,
            success:function (data){//服务器返回数据v
                if(data.data[0]){//此用户名存在-------------不能注册
                    $this.siblings(".errorshow").css({display:"inline-block"});
                    $this.siblings(".errorshow").removeClass("goodinfor");
                    $this.siblings(".errorshow").addClass("badinfor");
                    $this.siblings(".errorshow").html(bugarr[2]);
                    $(".phonecode").css({display:"none"});
                    $this.parent().siblings(".right_show").css({display:"none"});
                    $this.parent().removeClass("it_focusr");
                    $this.parent().addClass("it_focuse");
                    flag[0]=false;
                }else{//此用户名不存在-------------可以注册
                    $this.siblings(".errorshow").css({display:"none"});
                    $this.siblings(".errorshow").removeClass("badinfor");
                    $this.siblings(".errorshow").addClass("goodinfor");
                    $this.siblings(".errorshow").html(bugarr[0]);
                    $(".phonecode").css({display:"block"});
                    $this.parent().siblings(".right_show").css({display:"inline-block"});
                    $this.parent().removeClass("it_focusr");
                    $this.parent().removeClass("it_focuse");
                    flag[0]=true;
                }
            }
        });
    }
    /*********************************密码输入事件验证****************************************************************************************/
    $("#pwd1").focus(function(){
        $(this).parent().addClass("it_focusr");
        $(this).siblings(".errorshow").css({display:"inline-block"});
        $(this).siblings(".errorshow").removeClass("badinfor");
        $(this).siblings(".errorshow").addClass("goodinfor");
        $(this).siblings(".errorshow").html(bugarr[3]);
        $(this).parent().siblings(".right_show").css({display:"none"});
        $(this).parent().removeClass("it_focuse");
    }).blur(function(){
        var len = $(this).val().length;
        if(len>=6&&len<=10){
            $(this).parent().removeClass("it_focusr");
            $(this).parent().removeClass("it_focuse");
            $(this).siblings(".errorshow").css({display:"none"});
            $(this).parent().siblings(".right_show").css({display:"inline-block"});
            flag[1]=true;
        }else{
            $(this).parent().removeClass("it_focusr");
            $(this).parent().addClass("it_focuse");
            $(this).siblings(".errorshow").css({display:"inline-block"});
            $(this).siblings(".errorshow").html(bugarr[4]);
            $(this).siblings(".errorshow").removeClass("goodinfor");
            $(this).siblings(".errorshow").addClass("badinfor");
            $(this).parent().siblings(".right_show").css({display:"none"});
            flag[1]=false;
        }
    });
    /***********************     确认密码事件     ***********************/
    $("#pwd2").focus(function(){
        $(this).parent().addClass("it_focusr");
        $(this).siblings(".errorshow").css({display:"inline-block"});
        $(this).siblings(".errorshow").removeClass("badinfor");
        $(this).siblings(".errorshow").addClass("goodinfor");
        $(this).siblings(".errorshow").html(bugarr[5]);
        $(this).parent().siblings(".right_show").css({display:"none"});
        $(this).parent().removeClass("it_focuse");
    }).blur(function(){
        if($("#pwd1").val()){  //----------------- 密码不为空
            if($(this).val()==$("#pwd1").val()){
                $(this).parent().removeClass("it_focusr");
                $(this).parent().removeClass("it_focuse");
                $(this).siblings(".errorshow").css({display:"none"});
                $(this).parent().siblings(".right_show").css({display:"inline-block"});
                flag[2]=true;
            }else{
                $(this).parent().removeClass("it_focusr");
                $(this).parent().addClass("it_focuse");
                $(this).siblings(".errorshow").css({display:"inline-block"});
                $(this).siblings(".errorshow").html(bugarr[7]);
                $(this).siblings(".errorshow").removeClass("goodinfor");
                $(this).siblings(".errorshow").addClass("badinfor");
                $(this).parent().siblings(".right_show").css({display:"none"});
                flag[2]=false;
            }
        }else{
            $(this).parent().removeClass("it_focusr");
            $(this).parent().addClass("it_focuse");
            $(this).siblings(".errorshow").css({display:"inline-block"});
            $(this).siblings(".errorshow").html(bugarr[6]);
            $(this).siblings(".errorshow").removeClass("goodinfor");
            $(this).siblings(".errorshow").addClass("badinfor");
            $(this).parent().siblings(".right_show").css({display:"none"});
            flag[2]=false;
        }
    });

    /**************************验证码相关********************************/
    var codenumber =null;
    $(".getcode_but").click(function(){
        var code = parseInt(Math.random()*10000);
        if(code<10){code="000"+code;}
        else if(code<100){code="00"+code;}
        else if(code<1000){code="0"+code;}
        else(code=""+code);
        flag[3]=false;
        codenumber = code;
        alert("验证码为:"+codenumber);

    });
    $("#codes").focus(function(){
        $(this).siblings(".codeshow").css({display:"none"});
    }).blur(function(){
        if(codenumber){//------------------------------------已经发送过验证码
            if(!$(this).val()){//如果值为空
                flag[3]=false;
                $(this).siblings(".codeshow").css({display:"inline-block"});
                $(this).parent().siblings(".right_show").css({display:"none"});
                $(this).parent().siblings(".getcode_but").children(".errorshow").css({display:"inline-block"});
                $(this).parent().siblings(".getcode_but").children(".errorshow").html(bugarr[9]);
            }else{//------------------------------值不为空
                if($(this).val()==codenumber){ //-------------验证码输入正确
                    flag[3]=true;
                    $(this).parent().siblings(".getcode_but").children(".errorshow").css({display:"none"});
                    $(this).parent().siblings(".right_show").css({display:"inline-block"});
                }else{  //验证码输入错误
                    flag[3]=false;
                    $(this).parent().siblings(".getcode_but").children(".errorshow").css({display:"inline-block"});
                    $(this).parent().siblings(".getcode_but").children(".errorshow").html(bugarr[8]);
                    $(this).parent().siblings(".right_show").css({display:"none"});
                }
            }
        }else{   //--------------------------没有发送验证码
            if(!$(this).val()){    //------------如果值为空
                flag[3]=false;
                $(this).siblings(".codeshow").css({display:"inline-block"});
            }
        }
    });
/****************************   注册按钮点击事件  *******************************************/
    $(".go_but").click(function(){
        var comment = true;
        for(i in flag){
            if(!flag[i])
            {
                comment=false;
                break;
            }
        }
        if(comment){
            u_id=$("#u_name").val();
            u_pwd = $("#pwd1").val();
            $.ajax({
                type: 'get',
                url: "http://localhost:63342/paixie/php/regedit.php?name=" + u_id + "&pwd=" + u_pwd,
                dataType: 'json',
                //data:$("form").serialize(),//username=xx&password=xxx
                async: true,
                success: function (data) {
                    if(data.code==200){
                        $(".successbox").css({display:"block"});
                        setTimeout(function(){
                            location.href = "login.html";
                        },5000)
                    }else{

                        alert("注册失败");
                    }
                }
            });
        };
    });
/*************************************************************************/
});