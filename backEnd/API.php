<?php
    // create config and connect to DataBase
    $connect = mysqli_connect('localhost','root','root','newdatabase');;
    $sql = "SELECT * FROM customers";
    $resoult = mysqli_query($connect, $sql);
    $rows = mysqli_fetch_all($resoult, MYSQLI_ASSOC);

    $sourseData =[];

        //write data to array
        for ($i=0; $i<count($rows); $i++){
            array_push($sourseData,['person '.$i=>$rows[$i]]);
        }

        //create JSON
    $json = json_encode($sourseData);

















