import React from 'react';
import './App.css';
import {CounterWithRedux} from "./counter/CounterWithRedux";


function App() {
    return (
        <div className="App">
            <p>
                <CounterWithRedux/>
            </p>
        </div>
    );
}

export default App;
