import { ADD_DATA_FAIL, ADD_DATA_REQUEST, ADD_DATA_SUCESS } from "./actionTypes";

const initialCase = {
    isLoading : false,
    isError : false
}

export const reducer = (state = initialCase , {type,payload})=>{
    switch (type) {
        case ADD_DATA_REQUEST : 
        return {...state , isLoading : true};
        case ADD_DATA_SUCESS : 
        return {...state , isLoading : false};
        case ADD_DATA_FAIL : 
        return {...state , isLoading : false , isError : true}
        default:
            return state;
    }
}