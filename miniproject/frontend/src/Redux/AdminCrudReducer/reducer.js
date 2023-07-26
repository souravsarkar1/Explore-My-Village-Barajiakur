import { ADD_DATA_FAIL, ADD_DATA_REQUEST, ADD_DATA_SUCESS, DELETE_MYDATA_FAIL, DELETE_MYDATA_REQUEST, DELETE_MYDATA_SUCESS, GET_MYDATA_FAIL, GET_MYDATA_REQUEST, GET_MYDATA_SUCESS, UPDATE_MYDATA_FAIL, UPDATE_MYDATA_REQUEST, UPDATE_MYDATA_SUCESS } from "./actionTypes";

const initialCase = {
    isLoading: false,
    isError: false,
    mydata: []
}

export const reducer = (state = initialCase, { type, payload }) => {
    switch (type) {
        case ADD_DATA_REQUEST:
            return { ...state, isLoading: true };
        case ADD_DATA_SUCESS:
            return { ...state, isLoading: false };
        case ADD_DATA_FAIL:
            return { ...state, isLoading: false, isError: true }
        case GET_MYDATA_REQUEST:
            return { ...state, isLoading: true };
        case GET_MYDATA_SUCESS:
            return { ...state, isLoading: false, mydata: payload };
        case GET_MYDATA_FAIL:
            return { ...state, isLoading: false, isError: true };
        case DELETE_MYDATA_REQUEST:
            return { ...state, isLoading: true };
        case DELETE_MYDATA_SUCESS:
            return { ...state, isLoading: false };
        case DELETE_MYDATA_FAIL:
            return { ...state, isLoading: false, isError: true }
        case UPDATE_MYDATA_REQUEST:
            return { ...state, isLoading: true };
        case UPDATE_MYDATA_SUCESS:
            return { ...state, isLoading: false };
        case UPDATE_MYDATA_FAIL:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}