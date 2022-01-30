
import { useContext,} from "react";
import Context from '../Context';
import './style.scss'


function MainShow(props){
    const value = useContext(Context);

        //create and show table
        function createTables() {
            return (
                <div className="customers">
                    <div className="customers_wrapper __names">
                        <h2>Customers name</h2>
                        <ul className="customers_names">
                            {value.context.state.map(element =>(
                                <li className='names_item' key={element.person.id}>{element.person.customerName}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="customers_wrapper __times">
                        <h2>Customers time</h2>
                        <ul className="customers_times">
                            {value.context.state.map(element =>(
                                <li className='time_item' key={element.person.id}>{element.person.reg_data}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            )
        }


        return (
            <>
                <div className="main-page">
                    {createTables()}
                    <button onClick={() => {
                        props.updateCustomersList();
                    }}>Update List
                    </button>

                </div>



            </>
        )

}


export default MainShow;






