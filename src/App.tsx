import React from 'react';
import {CardActions, Typography, CardContent, Button, Modal, Card, FormControl, TextField} from "@mui/material"
import './App.css';
import {postTask} from './api';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const App = () => {
  return (
    <TaskModal></TaskModal>
  );
}

const TaskModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [name, setName] = React.useState<any | null>(null);
  // const [desc, setDesc] = React.useState<any | null>(null);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");


  return (
    <div>
      <Button onClick={handleOpen}>New Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                <Card sx={style} data-cy='modal'>
                    <FormControl >
                        <CardContent>
                            <Typography variant='h4' align='center' gutterBottom>
                                Create Task
                            </Typography>
                            <TextField id="task-name" value={name} label="Task Name" variant="outlined" size='small' onChange={(task) => {setName(task.target.value)}}/>
                        </CardContent>
                        <CardContent>
                            <TextField id="desc" value={desc} label="Description" variant="standard" size="medium" onChange={(task) => {setDesc(task.target.value)}}/>
                        </CardContent>
                        <CardActions>
                            
                            <Button style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => handleClose()} size="small" data-cy='close'>Close</Button>
                            
                            <Button style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={ async () => {handleClose();
                            // //console.log(name, desc);
                            // // const resolve = await post('http://localhost:8000/api/task', {name, desc});
                            // const resolve = await postTask({name, desc});
                            // console.log(resolve);
                            // setName("");
                            // setDesc("");
                            const data = await axios.post("http://localhost:8000/api/test", {test: "test"},  {headers: { 
                              'Content-Type': 'application/json'
                            }}) 
                            console.log(data)
                            }} size='small' data-cy='submit'>Submit</Button>
                        
                        </CardActions>

                    </FormControl>
                </Card>
      </Modal>
    </div>
  );
}



export default App;
