import axios from 'axios'

let localAction = axios.create({
    baseURL: 'http://localhost:3001'
});

// localAction.interceptors.response.use((res) => {
//     console.log(res.data);
// });
//
// localAction.interceptors.request.use((config) => {
//     console.log(config);
// });

export default localAction;

