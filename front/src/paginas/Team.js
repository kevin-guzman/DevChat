import React from 'react';
import { createStyles, formatMs, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Styles/siderbar.css'
import {Grid,Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
//import useUser from '../hooks/useUser';
import UserContext from '../contex/Usercontex'
import ReactDOM from "react-dom";
import { useParams } from "react-router";


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { message } from '../api/querys';
import { useHistory } from "react-router-dom";
import useForm from '../hooks/useForm'
import { useState } from 'react';



const Team = () => {
  const {user:{name, years}, } = React.useContext(UserContext);
  console.log('data', React.useContext(UserContext));
  let { id } = useParams();

  const history = useHistory();
  const [messages, setmessages] = React.useState({loading:true, data:[]})
  const [trigger, setTrigger] = useState(false)
  const initialValues = {message:""}
  const {fields, setForm} = useForm({initialValues})

  const oncreatemessageforoclik = async () => {
    const {message:chatMessage} = fields
    setForm('message', "")
    const {data, status} = await message().sendmessageforo(id, chatMessage);
    setTrigger(!trigger)
  }


  const getmessage = async () => {
    const {data, status} = await message().getmessageforo(id)
    console.log('Data y status,message ', data, status);
      if (status ==200) {
        setmessages({loading:false,data:data})
        } else {
          setmessages({loading:false, data:[]})
        }
  }
  React.useEffect(()=>{
    getmessage()
  },[trigger])
  return (

    <Card className='style'>
      <h2>Foro</h2>
      


          {messages.data.map((value,index)=>{
            return(
              <>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className=''>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={value.user.name}
        subheader={value.date}
      />
        <Typography variant="body2" color="textSecondary" component="p">
        {value.message}
        </Typography>
              </>
              
            )
          })}
      <CardContent>
        <div className="views">
              <div className="inpout"> 
              <TextField     
                style={{ margin: 8 }}
                placeholder="Escribe un texto"
                fullWidth
                margin="normal"
                value={fields.message}
                variant="outlined"
                onChange={({target:{value}})=>setForm('message', value)}
              />
              <div className='buttonE'>
                <Grid>
                 <Button 
                 onClick={()=>oncreatemessageforoclik()}
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon/>}>
                        Enviar
                 </Button>
                </Grid>
              </div>
            </div>  
            </div>
      </CardContent>
    </Card>
  )
}

export default Team;