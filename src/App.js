import logo from './logo.svg';
import './App.css';
import Cakestore from './component/Cakestore';
import {Provider} from 'react-redux'
import store from './Redux/Store';
import New from './component/New';

function App() {
  return (
    <>
    <Provider store={store}>
      <div className="App">
        <Cakestore/>
       
      </div>
    </Provider>
    <New/>
    </>
   
  );
}

export default App;
