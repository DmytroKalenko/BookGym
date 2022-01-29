
import {useContext} from "react";
import Context from '../Context';
//

//
// console.log(value);

function MainShow(){
    const value = useContext(Context)
    return(
        <>
            {console.log(value)}

            <p>HELLLLLOOOO</p>
        </>
    )
}


export default MainShow;






// //Get from server
//
//
//
//
//
//
//
//
// window.addEventListener('load',()=>{
//     console.log('Dom loaded')
//
//     async function GetData(){
//         await fetch('../backEnd/API.php',{
//             method: 'get',
//             header:{
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(response => response.json())
//             .then(data => {
//                 const customersNameTable = document.querySelector('.customers .customers_item.__name');
//                 const customersTimeTable = document.querySelector('.customers .customers_item.__time');
//
//                 const namesList = document.createElement('ul');
//                 namesList.classList.add('namesList');
//                 customersNameTable.append(namesList);
//
//                 const timesList = document.createElement('ul');
//                 timesList.classList.add('timesList');
//                 customersTimeTable.append(timesList);
//
//
//
//                 data.forEach(element=>{
//                     let listItemName = document.createElement('li');
//                     listItemName.classList.add('namesList_item');
//                     listItemName.textContent = element.person.customerName;
//                     namesList.append(listItemName);
//
//                     let listItemTime = document.createElement('li');
//                     listItemTime.classList.add('namesTime_item');
//                     listItemTime.textContent = element.person.reg_data;
//                     timesList.append(listItemTime);
//
//
//                     console.log(element.person);
//                 })
//
//             })
//     }
//     GetData();
// })
//
//
//
