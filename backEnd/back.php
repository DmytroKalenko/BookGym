<?php


// connect and add data to database
function addDataToDataBase($customerName, $choosedHours){
    $connect = new mysqli('localhost','root','root','newdatabase');
    $sql = "INSERT INTO customers (customerName, reg_data) VALUES ('{$customerName}','{$choosedHours}')";

    if($connect -> query($sql) === true){
        echo 'data was added to DataBase';
    }else{
        echo 'something was wrong ';
    }
};



if (!empty($_POST['person'])) {
    $customer = json_decode($_POST['person'],true);
    addDataToDataBase($customer['name'], $customer['hours']);
}else{
    echo 'not got data';
}












