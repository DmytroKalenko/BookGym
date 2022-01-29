import './App.css';
import MainShow from "./MainShow/MainShow";
import Context from './Context';
import {useEffect, useState} from "react";

import './AppStyle.less';





function App() {
    const [context, setState] = useState({state:[]});

    function addContentToContext(paramsName, paramValue){
        const newContext = {...context, [paramsName] : paramValue};
        setState(newContext);
    }

    // get Data from DataBase
  const getDataFromDB =  async () =>{
        let customers = [];
        await  fetch('http://localhost/back/BookGym/backEnd/API.php',{
            method: 'get',
            header:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json'
            },})
            .then(response => response.json())
            .then(json =>{
                json.forEach(element=>{
                    customers.push(element)
                })
                addContentToContext('sssss',customers)
            })
        return customers;
    }
// set customers to list
    useEffect(()=>{
        console.log('dom')
        getDataFromDB().then(
            elements=>(addContentToContext('state',elements))
        );

    },[])


  function updateCustomersList(){
      getDataFromDB().then(
          elements=>(addContentToContext('state',elements))
      );
  }


    return (
      <>
        <Context.Provider value={{context,addContentToContext}}>
            <MainShow updateCustomersList={updateCustomersList}/>
        </Context.Provider>

      </>

  );
}

export default App;
