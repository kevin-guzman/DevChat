import React from 'react';
import { createStyles, formatMs, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Styles/siderbar.css'
import {Grid,Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



const Team = () => {
  return (
    <Grid>
    <Paper elevation={10} className='style'>
        <Grid>
            <h2>Chat</h2>

            <div className="views">
              <div className="inpout"> 
              <TextField 
                id="outlined-full-width"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
              />
              <div className='buttonE'>
                <Grid>
                 <Button 
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon/>}>
                        Enviar
                 </Button>
                </Grid>
              </div>
            </div>  
            </div>
        </Grid>
    </Paper>
</Grid>
    /* <div >
      <div className="inpout"> 
        <TextField 
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
       
        <div className="uno">
          <Button 
          variant="contained"
          color="primary"
          endIcon={<SendIcon/>}>
                Enviar
        </Button>
        </div>
        
    </div> */
    
  );
};

export default Team;