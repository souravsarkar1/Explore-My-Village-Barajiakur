import axios from "axios";
import { ADD_DATA_FAIL, ADD_DATA_REQUEST, ADD_DATA_SUCESS } from "./actionTypes";

export const addData = (data)=>(dispatch)=>{
    dispatch({type : ADD_DATA_REQUEST});
    axios.post(`http://localhost:8080/data/add`,data).then((res)=>{
        dispatch({type : ADD_DATA_SUCESS});
    }).catch((err)=>{
        console.log(err);
        dispatch({type : ADD_DATA_FAIL});
    })
}