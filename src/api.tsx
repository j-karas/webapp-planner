import axios from "axios";
const TaskApi = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {'Content-Type': 'application/json'}
});

export const postTask = async (data: any) =>{
  const response = await TaskApi.post('/api/task', data);
  console.log(response)
  return await response.data;
}

export const getAllTasks = async () =>{
  const response = await TaskApi.get('/api/tasks');
  console.log(response.data.data)
  return response.data.data;
}

export const deleteTask = async(id: number) =>{
  const response = await TaskApi.delete(`/api/task/${id}`);
  console.log(response);
  return response.data;
}

export default TaskApi;