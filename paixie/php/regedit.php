<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/8/13
 * Time: 14:22
 */
$name=$_REQUEST['name'];
$pwd = $_REQUEST['pwd'];

$conn = new mysqli('localhost', 'root', "123", "paixie");
if ($conn->connect_error) {
    echo "404";
} else {
    $sqla = "INSERT INTO `user`(`uname`, `pwd`) VALUES ($name,$pwd)";
    $res = $conn->query($sqla);
    $arr = [];
    if ($res) {
        $resarr = array("code"=>200,"msg"=>"注册成功");
        echo json_encode($resarr);
    }else{
        $resarr = array("code"=>400,"msg"=>"注册失败");
        echo json_encode($resarr);
    }
}