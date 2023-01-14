import axios from "axios";
import { callAxios } from "./axiosTest";
const TaskApi = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {'Content-Type': 'application/json'}
});

export const postTask = async (data: any) =>{
  // const response = await TaskApi.post('/api/task', data);
  // console.log(response)
  // return await response.data;
  callAxios()
}

export default TaskApi;





// export async function post(url: string, data: any) {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     return await response.json();
//   }

//   export async function get(url: string) {
//     const response = await fetch(window.location.origin + url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     return await response.json();
//   }