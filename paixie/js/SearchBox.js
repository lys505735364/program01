/**
 * Created by Administrator on 2016/8/16.
 */
$(document).ready(function(){
    $(".index_Search_Text").keyup(function(){
        var htmlstr="";
        var word = $(this).val();
        $here = $(this);
        $.ajax({
            type:'get',
            url:"http://www.paixie.net/search/search?keyword="+word+"&jsoncallback=?",
            dataType:'jsonp',
            async:true,
            success:function(data){
                if(data.top.title){
                    htmlstr = "<ul class='searchul'><li class='searchtitle soli soml'><a href='#'>"+data.top.title+"</a></li>";
                    htmlstr +="<li class='line'></li>";
                    for(var i=0;i<data.suggester.length;i++){
                        htmlstr +="<li class='soli soml'><a href='#'>"+data.suggester[i]+"</a></li>";
                    }
                }else{
                    htmlstr = "<ul class='searchul'><li class='searchtitle soli soml'><a href='#'>未找到"+word+"</a></li>"
                }
                $here.siblings(".head_solist").css({display:"block"}).html(htmlstr);
            }
        })
    });
    /**************************          ************************************/
    $(".index_Search_Text").blur(function(){
        $(this).siblings(".head_solist").css({display:"none"});
    });




});


