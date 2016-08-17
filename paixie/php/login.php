<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/8/13
 * Time: 20:23
 */
$name=$_REQUEST['name'];
$pwd = $_REQUEST['pwd'];
$conn = new mysqli('127.0.0.1', 'root', "123", "paixie");
if ($conn->connect_error) {
    echo "404";
} else {
    $sqla = "SELECT id FROM user WHERE uname='$name' AND pwd='$pwd'";
    $res = $conn->query($sqla);
    $arr = [];
    if ($res) {
        while($row=$res->fetch_assoc()) {
            array_push($arr,$row);//将查询到的数据插入到数组
        }
        $resarr = array("code"=>200,"data"=>$arr);
        echo json_encode($resarr);
    }else{
        $resarr = array("code"=>400,"msg"=>"登录异常");
        echo json_encode($resarr);
    }
}