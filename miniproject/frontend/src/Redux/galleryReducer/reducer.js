import { DATA_FAIL, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";

const initialCondition = {
    isLoading : false,
    data : [],
    isError : false
}

export const reduder = (state = initialCondition , {type , payload})=>{
    switch (type) {
       case DATA_REQUEST:
        return {...state , isLoading : true};
        case DATA_SUCCESS : 
        return {...state , isLoading : false , data : payload};
        case DATA_FAIL : 
        return {...state , isError : true};
        default:
          return state;
    }
}