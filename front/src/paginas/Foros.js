import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../Styles/siderbar.css'
import {Grid,Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Link } from '@material-ui/core';
import {Chat} from '../api/querys'
import { useHistory } from "react-router-dom";


const Products = () => { 
  const history = useHistory();
  const [foros, setForos] = React.useState({loading:true, data:[]})
  const getForos = async () => {
    const {data, status} = await Chat().getallforos()
    console.log('Data y status, ', data, status);
      if (status ==200) {
        setForos({loading:false,data:data})
        } else {
          setForos({loading:false, data:[]})
        }
  }
  React.useEffect(()=>{
    getForos()
  },[])
    return (
        <Grid className='style2'>
   {/*  <Paper elevation={10} className='style2'> */}
        <Grid>
            <h2>Publicaciones</h2>
            <div className='paperstyle2'>
            <Button onClick={()=> history.push("/Formulario")}  type='submit'  fullWidth variant="contained" color="primary">
                        crear nuevo formulario
            </Button> 
            </div>
             {foros.data.map((value, index)=>{
               return(
                <Paper elevation={10} margin className='style21'>
                    <div className='resultado'>
                    <Button onClick={()=> history.push("/foros/".concat(value._id))}> <p>{value.name}</p></Button>
                        <p>{value.description} </p>
                      <div className='hora'>
                        <p>{value.date} </p>
                      </div>
                    </div>
                </Paper>
               )
             })}
        </Grid>
    {/* </Paper> */}
</Grid>
    )
}

export default Products
