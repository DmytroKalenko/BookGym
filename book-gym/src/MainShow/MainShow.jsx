
import { useContext,} from "react";
import Context from '../Context';
import './style.scss'
import './MainShowStyle.less'

function MainShow(props){
    const value = useContext(Context);

        //create and show table
        function createTables() {
            return (
                <div className="customers">
                    <div className="customers_wrapper">
                        <h2>Customers name</h2>
                        <ul className="customers_names">
                            {value.context.state.map(element =>(
                                <li className='names_item' key={element.person.id}>{element.person.customerName}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="customers_wrapper">
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
                {createTables()}
                <button onClick={() => {
                    props.updateCustomersList();
                }}>Update List
                </button>

            </>
        )

}


export default MainShow;






