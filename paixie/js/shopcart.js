/**
 * Created by Administrator on 2016/8/17.
 */
$(document).ready(function(){
    var cookieArray  = getCookieArray("CartList");
    console.log(cookieArray);
    var len = cookieArray.length;
    var jsonstr = {"goodlist":cookieArray};
    var $modeHTML =  $("#goods_hand").html();
    var $template_1 = Handlebars.compile($modeHTML);
    var GetHTML = $template_1(jsonstr);
    $(".goods_box").append(GetHTML);

    var All_price = 0;
    countprice();
    function  countprice(){
        All_price = 0;
        for(var i=0;i<len;i++){
            var P_Count = parseInt($(".numText").eq(i).val());
            var prices =parseInt($(".price").eq(i).html());
            All_price += P_Count*prices;
            $(".L_price").eq(i).html(P_Count*prices+".00" );
        }
        $("#A_price").html("￥"+All_price+".00");
    }


    $(".goods_box").on("click",".count_box i",function(){
        var j = $(this).parent().index(".count_box");
        var i = $(this).index(".count_box i");
        var prices = parseInt($(".price").eq(j).html());
        var count = parseInt($(".numText").eq(j).val());
        if(i%2==1){
            count++;
            if(count>=10){
                count=10;
                $(this).removeClass("numUp").addClass("numupNo");
            }
            $(this).siblings("i").removeClass("numdownNo").addClass("numDown");
            $(this).siblings(".numText").val(count);
            $(this).siblings(".numText").attr("value",count);
            $(".L_price").eq(j).html(prices*parseInt($(".numText").val())+".00" );
        }else{
            count--;
            if(count<=1){
                count=1;
                $(this).removeClass("numDown").addClass("numdownNo");
            }
            $(this).siblings("i").removeClass("numupNo").addClass("numUp");
            $(this).siblings(".numText").val(count);
            $(this).siblings(".numText").attr("value",count);
            $(".L_price").eq(j).html(prices*parseInt($(".numText").val())+".00" );
        }
        countprice();
        cookieArray[j].P_Count = count;
        addToCookie(cookieArray[j])
    });
    $(".count_box input").blur(function(){
        var count = $(".count_box").children("input").val();
        if(count<=1){
            count=1;
            $(this).siblings("i").eq(0).removeClass("numDown").addClass("numdownNo");
            $(this).siblings("i").eq(1).removeClass("numupNo").addClass("numUp");
        }if(count>=10){
            count =10;
            $(this).siblings("i").eq(0).removeClass("numdownNo").addClass("numDown");
            $(this).siblings("i").eq(1).removeClass("numUp").addClass("numupNo");
        }
        $(".count_box").children("input").val(count);
        $(".L_price").html(prices*parseInt($(".numberText").val())+".00" );
        P_Count =count;
    });








    /***********************************************************************************************************************************Cookie相关操作*/

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
            count = parseInt(obj.P_Count);
            if(count>=10)count = 10;
            cookieArray[index].P_Count = count;
        }
        else {//把obj对应的商品添加到数组中
            cookieArray.push(obj);
        }
        var date = new Date();
        date.setDate(date.getDate()+3);
        document.cookie = "CartList="+JSON.stringify(cookieArray)+";expires="+date.toString();
    }
});