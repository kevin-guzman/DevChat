import React from 'react'
import {Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link,FormControl, FormLabel, RadioGroup, RadioGrou, Radio } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../Styles/index.css'

const Registrar = props => {
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
                    <h2>Crear nueva cuenta</h2>

                    <TextField  label="Nombre Usuario" placeholder='ingrese usuario' fullWidth required />
                    <TextField  label="Correo" placeholder='ingrese correo electronico ' fullWidth required />
                    <TextField  label="Contraseña" placeholder='ingrese contraseña'type='password'fullWidth required />
                    <TextField  label="Confirmar Contraseña" type='password' fullWidth required/>
                    
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Genero</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" style={{display:'initial'}} >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <FormControlLabel 
                    control={
                        <Checkbox
                        name="checkedB"
                        color="primary"/>
                    }
                    label="Aceptar terminos y condiciones"
                    />
                    <Button type='submit'  fullWidth variant="contained" color="primary">
                        Ingresar
                    </Button>  
                </Grid>
            </Paper>
        </Grid>
    )
}


export default Registrar
