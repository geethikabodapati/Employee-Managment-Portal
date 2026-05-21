import axios from "axios";

const API="https://jsonplaceholder.typicode.com/users";
export const getEmployees=async()=>{
    try{
        const res=await axios.get(API);
        console.log(res.data);
        return res.data;
    }
    catch(error){
        console.error("No data of employees",error);
        throw error;
    }
}

export const getEmployeeById=async(id)=>{
        const res=await axios.get(`${API}/${id}`);
        return res.data;
};