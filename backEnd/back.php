<?php


//// connect and add data to database
//function addCustomersToDataBase($customerName, $choosedHours){
//    $connect = new mysqli('localhost','root','root','newdatabase');
//    $sql = "INSERT INTO customers (customerName, reg_data) VALUES ('{$customerName}','{$choosedHours}')";
//
//    if($connect -> query($sql) === true){
//        echo 'data was added to DataBase';
//    }else{
//        echo 'something was wrong ';
//    }
//};
//if (!empty($_POST['person'])) {
//    $customer = json_decode($_POST['person'],true);
//    addCustomersToDataBase($customer['name'], $customer['hours']);
//}else{
//    echo 'not got data';
//}




// connect and add data to database
function addServiceToDataBase($serviceName, $servicePrise, $serviseMaster){
    $connect = new mysqli('localhost','root','root','newdatabase');
    $sql = "INSERT INTO services (service, price,master) VALUES ('{$serviceName}','{$servicePrise}','{$serviseMaster}')";

    if($connect -> query($sql) === true){
        echo 'data was added to DataBase';
    }else{
        echo 'something was wrong ';
    }
};


if (!empty($_POST['service'])) {
    $service = json_decode($_POST['service'],true);
    addServiceToDataBase($service['serviceName'], $service['servicePrise'],$service['serviseMaster']);
}else{
    echo 'not got data';
}













