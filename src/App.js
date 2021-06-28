import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Image from "./Components/Image";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer'
import MyProvider from './Providers/MyProvider';
import Routing from './Routes/Route';
const store = createStore(counterReducer)
function App() {
  return (<MyProvider><Provider store={store}>
    <div className="App">
        <Routing />
       </div></Provider></MyProvider>
  );
}

export default App;