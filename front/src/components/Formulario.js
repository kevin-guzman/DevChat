import React from 'react'
import {Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link,FormControl, FormLabel, RadioGroup, RadioGrou, Radio } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../Styles/index.css'
import {User} from '../api/querys'
import useForm from '../hooks/useForm'
import { useHistory } from "react-router-dom";
import {Chat} from '../api/querys'
import axios from 'axios'


const Formulario = () => {
    const initialValues = {name:'',description:""}
    const history = useHistory();
    const {fields, setForm} = useForm({initialValues})
  const oncreateforoclik = async () => {
      const {name, description} = fields
      console.log(name, description);
    const {data, status} = await Chat().createforos(name, description)
    console.log('Data y status, ', data, status);
      if (status ==201) {
        history.push("/products");
      } else {
        history.push("/Formulario");
      }
  }
  
    return (
        <Grid>
            <Paper elevation={10} className='paperstyle'>
                <Grid>
                    <div className="flexbox">
                        <div className="uno"></div>
                        <div className="dos">
                        </div>
                        <div className="tres"></div>
                    </div>
                    <h2>Crear nuevo formulario</h2>

                    <TextField  onChange={({target:{value}})=>setForm('name', value)} label="Tema"  fullWidth required />
                    <TextField  onChange={({target:{value}})=>setForm('description', value)} label="Descripcion"  fullWidth required />
                    <Button  onClick={()=>oncreateforoclik()} className='saline' type='submit'  fullWidth variant="contained" color="primary">
                        Publicar
                    </Button>  
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Formulario
