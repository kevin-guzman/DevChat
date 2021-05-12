import React from 'react'
import {Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link, Switch } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../Styles/index.css'
import Registrar from './Registrar';


const Login = () => {
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

                    <TextField  label="Nombre Usuario" placeholder='ingrese usuario' fullWidth required />
                    <TextField  label="Contraseña" placeholder='ingrese contraseña'type='password'fullWidth required />
                    

                    <FormControlLabel 
                    control={
                        <Checkbox
                        name="checkedB"
                        color="primary"/>
                    }
                    label="recordar"
                    />
                    <Button type='submit'  fullWidth variant="contained" color="primary">
                        Ingresar
                    </Button>  

                    <Typography>
                       <Link href="#">
                         Olvidastes contraseña
                       </Link>
                    </Typography> 

                    <Typography>
                       <Link href="<Registrar/>">
                        Registrar una nueva cuenta
                       </Link>
                    </Typography> 

                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login;