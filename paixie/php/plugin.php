<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/8/11
 * Time: 14:06
 */


header("Content-Type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");//web端跨域请求


$error=array('code'=>400,'msg'=>'参数错误');
$act=$_REQUEST['act'];

/******************  爱团购的加载  **********************************/
if($act==1){
    $conn = new mysqli('localhost', 'root', "123", "paixie");
    if ($conn->connect_error) {
        echo "404";
    } else {
        $sqla = "select * from activeintime WHERE class='1'";
        $res = $conn->query($sqla);
        $arr = [];
        if ($res) {
            //$row=$res->fetch_assoc()循环拿出查到每一条数据
            while($row=$res->fetch_assoc()) {
                array_push($arr,$row);//将查询到的数据插入到数组
            }
            $resarr = array("code"=>200,"data"=>$arr);
            echo json_encode($resarr);
        } else {
            $resarr = array("code" => 400, "msg" => "false");
            echo json_encode($resarr);
        }
    }
}
if($act==2){
    $conn = new mysqli('localhost', 'root', "123", "paixie");
    if ($conn->connect_error) {
        echo "404";
    } else {
        $sqla = "select * from activeintime WHERE class='2'";
        $res = $conn->query($sqla);
        $arr = [];
        if ($res) {
            //$row=$res->fetch_assoc()循环拿出查到每一条数据
            while($row=$res->fetch_assoc()) {
                array_push($arr,$row);//将查询到的数据插入到数组
            }
            $resarr = array("code"=>200,"data"=>$arr);
            echo json_encode($resarr);
        } else {
            $resarr = array("code" => 400, "msg" => "false");
            echo json_encode($resarr);
        }
    }
}
/********************     楼层  的 加载   ***************************************/
$page=$_REQUEST['page'];
$cl=$_REQUEST['cl'];
if($page&&$cl){
    $conn = new mysqli('localhost', 'root', "123", "paixie");
    $conn->set_charset("utf8");
    if ($conn->connect_error) {
        echo "404";
    } else {
        $sqla = "select * from floor$page WHERE class='$cl'";
        $res = $conn->query($sqla);
        $arr = [];
        if ($res) {
            //$row=$res->fetch_assoc()循环拿出查到每一条数据
            while($row=$res->fetch_assoc()) {
                array_push($arr,$row);//将查询到的数据插入到数组
            }
            $resarr = array("code"=>200,"data"=>$arr);
            echo json_encode($resarr);
        } else {
            $resarr = array("code" => 400, "msg" => "false");
            echo json_encode($resarr);
        }
    }
}


