<?php



    $connect = new mysqli('localhost','root','root','newdatabase');
    $sql = "SELECT * FROM customers";
    $resoult = $connect -> query($sql);



    if($resoult -> num_rows > 0){
        while($row = $resoult->fetch_assoc()){
//            echo "<br> id: ". $row['id'] . "<br> customerName: ". $row['customerName'] ."<br> reg_data: ". $row['reg_data'];
//            var_dump($row);

            $json = json_encode($row);
            var_dump($json);
        };

    }else{
        echo 'something was wrong ';
    }















