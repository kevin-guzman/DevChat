import {createContext} from 'react'

const Usercontex = createContext({
    user:{
        name:null,
        years:null,
        id:null,
        token:""
    },
    setUser:()=>{},
    logout:()=>{}

}) 
export default Usercontex


