import axios from 'axios'
import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCESS } from './actiontTypes'

export const registerUser = (data) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    axios.post(`http://localhost:8080/users/register`, data).then((res) => {
        console.log(res.data);
        dispatch({ type: REGISTER_SUCESS })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL })
    })
}
export const loginUser = (data) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    axios.post(`http://localhost:8080/users/login`, data).then((res) => {
        console.log(res.data.token);
        dispatch({ type: REGISTER_SUCESS , payload : res.data.token })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL })
    })
}


