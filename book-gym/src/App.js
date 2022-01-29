import './App.css';
import MainShow from "./MainShow/MainShow";
import Context from './Context';



function App() {
  return (
      <>
        <Context.Provider value={[{counter: 3, ass : 'fff'},{dddd:333}]}>
            <MainShow/>
        </Context.Provider>

      </>

  );
}

export default App;
