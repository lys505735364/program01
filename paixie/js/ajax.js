/**
 * Created by Administrator on 2016/7/20.
 */

var mgetnav = {
    ajax:function (method ,url, successFn,i)
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //成功后才可以拿到数据,这个过程需要一定时间
            if (xhr.readyState == 4 && xhr.status == 200) {
                //使用外部传来的函数,处理数据,因为不同的数据处理方式不同
                //获取到responseText之后让Ajax使用者来处理,
                //通过调用successFn函数把数据传给ajax使用者
                successFn(JSON.parse(xhr.responseText));
            }
        };
        xhr.open(method ,url, true);
        xhr.send();
    }
};