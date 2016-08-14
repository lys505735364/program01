<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/8/14
 * Time: 21:15
 */
$page=$_REQUEST['page'];

$conn = new mysqli('localhost', 'root', "123", "paixie");
$conn->set_charset("utf8");
if ($conn->connect_error) {
    echo "404";
} else {
    $sqla = "SELECT* FROM goodslist WHERE id>0 AND id<20";
    $res = $conn->query($sqla);
    $arr = [];
    if ($res) {
        while($row=$res->fetch_assoc()) {
            array_push($arr,$row);//将查询到的数据插入到数组
        }
        $resarr = array("code"=>200,"good"=>$arr);
        echo json_encode($resarr);
    }else{
        $resarr = array("code"=>400,"msg"=>"登录异常");
        echo json_encode($resarr);
    }
}