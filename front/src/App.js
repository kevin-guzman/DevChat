import React from 'react'
import Login from './components/Login'; 
import Registrar from './components/Registrar';
import Sidebar from './components/Sidebar';
import Apiss from './Apiss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './paginas/Reports';
import Team from './paginas/Team';
import Foros from './paginas/Foros';
import { Overview, Users } from './paginas/Overview';
import Usercontex from './contex/Usercontex';
import Formulario from './components/Formulario';
import Menuinit from './paginas/Menuinit';
import axios from 'axios'


function App() {
    const [user, setUser] = React.useState({name:'', age:'', id:'', token:''})
    const logOut = () => setUser({name:'', age:'', id:'', token:''})
    React.useEffect(()=>{
        if(user.token.length > 0){
            axios.defaults.headers.common.Authorization = "Bearer " + user.token
            //axios.defaults.headers.common.Authorization = "Bearer " + user.token
            console.log(user.token);
            //axios.interceptors.request.use((config)=>{
              //  config.headers.Authorization = "Bearer " + user.token; 
                //return config
           // })
        }
    },[user])

    return ( 
    <Usercontex.Provider value={{user, setUser, logOut}}>
        <div>
            <Router> 
              {/* <h1>sistema de usuario funcionando</h1>  */}  
                  <Sidebar/> 
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/registro' exact component={Registrar} />
                     <Route path='/overview' exact component={Overview} />
                    <Route path='/overview/Users' exact component={Users} />
                     <Route path='/reports' exact component={Reports} />
                    <Route path='/reports/reports1' exact component={ReportsOne} />
                    <Route path='/reports/reports2' exact component={ReportsTwo} />
                     <Route path='/reports/reports3' exact component={ReportsThree} />
                     <Route path='/Foros' exact component={Foros} />
                     <Route path='/Team' exact component={Team} />
                     <Route path='/Formulario' exact component={Formulario} />
                     <Route path='/Menuinit' exact component={Menuinit} />
                     <Route path='/foros/:id' exact component={Team} />
                </Switch> 
            </Router> 
            
           {/*  <Apiss/> */}
        </div>
    </Usercontex.Provider>
        
    )
}

export default App;