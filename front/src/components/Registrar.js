import React from 'react'
import {Grid,Paper,Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link,FormControl, FormLabel, RadioGroup, RadioGrou, Radio } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../Styles/index.css'
import {User} from '../api/querys'
import useForm from '../hooks/useForm'
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const Registrar = props => {
        const history = useHistory();
        const initialValues = {name:'', email:"", password:'', password2:'', photo:""}
        const {fields, setForm} = useForm({initialValues})
        const onRegisterClick = async() => {
            const {name, password, password2,email,photo} = fields
            const {data, status} = await User().Register(name, password, password2, email, photo)
            console.log('Data y status, ', data, status);
            if (status ==201) {
                history.push("/Login");
        }};
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

                    <TextField onChange={({target:{value}})=>setForm('name', value)} label="Nombre Usuario" placeholder='ingrese usuario' fullWidth required />
                    <TextField onChange={({target:{value}})=>setForm('email', value)} label="Correo" placeholder='ingrese correo electronico ' fullWidth required />
                    <TextField onChange={({target:{value}})=>setForm('password', value)} label="Contraseña" placeholder='ingrese contraseña'type='password'fullWidth required />
                    <TextField onChange={({target:{value}})=>setForm('password2', value)} label="Confirmar Contraseña" type='password' fullWidth required/>
                    
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera/>
                      </IconButton>
                    </label>
                    <input accept="image/*"  id="icon-button-file" type="file" />
                    
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
     
          <Button onClick={()=>onRegisterClick()}type='submit'  fullWidth variant="contained" color="primary">
                        Ingresar
                    </Button>  
                </Grid>
            </Paper>
        </Grid>
    )
}


export default Registrar
