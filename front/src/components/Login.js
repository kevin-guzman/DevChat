import React from 'react'
import {Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link, Switch } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../Styles/index.css'
import Registrar from './Registrar';
import {User} from '../api/querys'
import useForm from '../hooks/useForm'
import { useHistory } from "react-router-dom";
import useUser from '../hooks/useUser'



const Login = () => {
    const {logout, setUser, user} = useUser()
    const history = useHistory();
    const initialValues = {name:'', password:''}
    const {fields, setForm} = useForm({initialValues})
    const onLoginClick = async() => {
        const {name, password} = fields
        const {data, status} = await User().login(name, password)
        console.log('Data y status, ', data, status);
        if (status ==200) {
            history.push("/Team");
            setUser({...user, ...data})
          } else {
            history.push("/Login");
          }
    }
    return (
        <Grid>
            <Paper elevation={10} className='paperstyle'>
                <Grid>
                    <div className="flexbox">
                        <div className="uno"></div>
                        <div className="dos">
                            <Avatar>
                            <div className="iconito">
                                <LockOutlinedIcon/>
                            </div>    
                            </Avatar>
                        </div>
                        <div className="tres"></div>
                    </div>
                    <h2>Iniciar sesion</h2>

                    <TextField onChange={({target:{value}})=>setForm('name', value)} label="Nombre Usuario" placeholder='ingrese usuario' fullWidth required />
                    <TextField onChange={({target:{value}})=>setForm('password', value)} label="Contraseña" placeholder='ingrese contraseña'type='password'fullWidth required />
                    

                    <FormControlLabel 
                    control={
                        <Checkbox
                        name="checkedB"
                        color="primary"/>
                    }
                    label="recordar"
                    />
                    <Button onClick={()=>onLoginClick()} type='submit'  fullWidth variant="contained" color="primary">
                        Ingresar
                    </Button>  

                    <Typography>
                       <Link href="#">
                         Olvidastes contraseña
                       </Link>
                    </Typography> 

                    <Typography>
                       <Link href="/registro">
                        Registrar una nueva cuenta
                       </Link>
                    </Typography> 

                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login;