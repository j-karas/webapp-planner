import axios from "axios"
const data = JSON.stringify({
  "name": "testerton",
  "desc": "Testington"
});

const config = {
  method: 'post',
  url: 'http://localhost:8000/api/test',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

export const callAxios = () => axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});