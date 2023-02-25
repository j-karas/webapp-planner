import axios, { AxiosResponse } from "axios";
import { TaskPost, TaskProps } from "./types";
const TaskApi = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {'Content-Type': 'application/json'}
});

export const postTask = (data: TaskPost):Promise<AxiosResponse<TaskPost>> =>{
  return TaskApi.post('/api/task', data);
}

export const getAllTasks = ():Promise<AxiosResponse<TaskProps[]>> =>{
  // const response =  TaskApi.get('/api/tasks');
  // console.log(response.data.data)
  // return response.data.data;
  return TaskApi.get('/api/tasks');
}

export const deleteTask = (id: number):Promise<AxiosResponse<TaskProps["id"]>> =>{
  // const response = TaskApi.delete(`/api/task/${id}`);
  // console.log(response);
  // return response.data;
  return TaskApi.delete(`/api/task/${id}`);
}

export default TaskApi;