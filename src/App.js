import React from 'react';

import './App.css';
import Patron from "./Components/patron";
import Ngo from "./Components/ngo";
import Event from "./Components/events";


function App() {
    return (

        <div className="App">
            <Patron />
            <Ngo/>
            <Event />
            
        </div>

    );
}

export default App;