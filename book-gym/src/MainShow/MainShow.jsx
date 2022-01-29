
import { useContext,} from "react";
import Context from '../Context';


function MainShow(props){
    const value = useContext(Context);

        //create and show table
        function createTables() {
            return (
                <div className="customers">
                    <div className="customers_item __name">
                        <h2>Customers name</h2>
                    </div>
                    <div className="customers_item __time">
                        <h2>Customers time</h2>
                    </div>
                </div>
            )
        }


        return (
            <>
                {createTables()}
                <button onClick={() => {
                    props.updateCustomersList();
                }}>Update List
                </button>
                {value.context.state.map(element =>(
                    <li key={element.person.id}>{element.person.customerName}</li>
                ))}
            </>
        )

}


export default MainShow;






