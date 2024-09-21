import axios from "axios";

const Instance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-Type': 'application/json',
      },
})

export default Instance;