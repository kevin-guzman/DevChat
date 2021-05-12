import React from 'react'
import { FaAppStoreIos } from 'react-icons/fa'

const Apiss = () => {
    console.log('in apis');
    React.useEffect(()=>{
        console.log('In use Effect');
        const url ='http://192.168.0.11:8080'
        fetch(url)
        .then(Response => Response.json())
        .then(data=>{
        
            console.log(data)
        })
        .catch(err=>console.log(err))
    },[])

    
    return (
        <div>
            <p>
                Sapaperras
            </p>

        </div>
    )}

    export default Apiss;


   

