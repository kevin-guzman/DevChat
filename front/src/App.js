import React from 'react'
import Login from './components/Login'; 
import Registrar from './components/Registrar';
import Sidebar from './components/Sidebar';
import Apiss from './Apiss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './paginas/Reports';
import Team from './paginas/Team';
import Products from './paginas/Products';
import { Overview, Users } from './paginas/Overview';


function App() {

    return ( 
        <div>
            
             <Router> 
              {/* <h1>sistema de usuario funcionando</h1>  */}  
               <Sidebar/> 
             <Switch>
             <Route path='/Login' exact component={Login} />
             <Route path='/registro' exact component={Registrar} />
             <Route path='/overview' exact component={Overview} />
             <Route path='/overview/Users' exact component={Users} />
             <Route path='/reports' exact component={Reports} />
             <Route path='/reports/reports1' exact component={ReportsOne} />
             <Route path='/reports/reports2' exact component={ReportsTwo} />
             <Route path='/reports/reports3' exact component={ReportsThree} />
             <Route path='/Products' exact component={Products} />
             <Route path='/Team' exact component={Team} />
             </Switch> 
              </Router> 
            
           {/*  <Apiss/> */}
        </div>
        
    )
}

export default App;