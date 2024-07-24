import axios from "axios";

const token = localStorage.getItem('token')
const authToken = `Bearer ${token}`;
console.log("token",token)
const instance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": authToken })
    }
});
const proceeds = axios.create({
    baseURL: "http://localhost:5000/checkout",
    headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": authToken })
    }
});
export {proceeds};
export default instance;