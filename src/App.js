import React from 'react'
import Login from './components/Login';
import Registrar from './components/Registrar';
import Sidebar from './components/Sidebar';
import Apiss from './Apiss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

    return ( 
        <div>
            {/*
            <Router>
             <h1>sistema de usuario funcionando</h1>
             <Login/> 
             <Registrar/> 
             <Sidebar/>
             </Router>
            */}
            <Apiss/>
        </div>
        
    )
}

export default App;