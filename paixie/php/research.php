<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/8/13
 * Time: 9:59
 */


header("Content-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");//web端跨域请求

$name=$_REQUEST['name'];

$conn = new mysqli('localhost', 'root', "123", "paixie");
if ($conn->connect_error) {
    echo "404";
} else {
    $sqla = "select * from user WHERE uname=$name";
    $res = $conn->query($sqla);
    $arr = [];
    if ($res) {
        //$row=$res->fetch_assoc()循环拿出查到每一条数据
        while($row=$res->fetch_assoc()) {
            array_push($arr,$row);//将查询到的数据插入到数组
        }
        $resarr = array("code"=>200,"data"=>$arr);
        echo json_encode($resarr);
    }
}
