import React, { useEffect } from 'react';
import {CardActions, Typography, CardContent, Button, Modal, Card, FormControl, TextField} from "@mui/material"
import './App.css';
import {deleteTask, getAllTasks, postTask} from './api';
import { ClientRequest } from 'http';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskProps, ContainerProps, TaskPost } from './types';

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

  const [taskData, setTaskData] = React.useState<TaskProps[] | []>([]);

  const retrieveTaskData = () => {
    getAllTasks().then((response) => {
      console.log(response.data)
      setTaskData(response.data);
    })

   
  }

  useEffect(() => {
    retrieveTaskData();
  }, [])

  return (
    <><TaskModal></TaskModal>
    <div>
      {taskData.length && taskData?.map((data) => (
        <Task {...data}></Task>
      ))}
    </div></>
  );
}

const TaskModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");


  return (
    <div>
      <Box m={2} sx={{display:'flex', justifyContent: 'center', top: 1}}>
        <Button variant='contained' onClick={handleOpen}>New Task</Button>
      </Box>
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
              <TextField id="task-name" value={name} label="Task Name" variant="outlined" size='small' onChange={(task) => { setName(task.target.value) }} />
            </CardContent>
            <CardContent>
              <TextField id="desc" value={desc} label="Description" variant="standard" size="medium" onChange={(task) => { setDesc(task.target.value) }} />
            </CardContent>
            <CardActions>

              <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() =>handleClose()}
               size="small" data-cy='close'>Close</Button>
              <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={async () => {
                handleClose();
                const resolve = await postTask({ name, desc });
                console.log(resolve);
                setName("");
                setDesc("");
              }} size='small' data-cy='submit'>Submit</Button>
            </CardActions>
          </FormControl>
        </Card>
      </Modal>
    </div>
  );
}

const Task = (props : TaskProps) => {
  return(
    <Card variant='outlined' sx={{
      width: 275,
      margin: 2,
      boxShadow: 1
     }}>
      <CardContent>
        <Typography variant='h6' sx={{fontWeight: 'bold'}} align='center'>{props.name}</Typography>
        <Typography variant='body1' align='center'>{props.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<DeleteIcon/>} onClick={async () => {
          const resolve = await deleteTask(props.id);
          console.log(resolve)
        }}>Delete</Button>  
      </CardActions>
    </Card>
  );
}

// const taskContainer:React.FC<ContainerProps>  = ({title, taskArray}) => {

// }

export default App;
