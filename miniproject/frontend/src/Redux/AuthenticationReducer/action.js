import axios from 'axios'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCESS } from './actiontTypes'
import Cookies from "js-cookie";
export const registerUser = (data) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    axios.post(`https://barajiakurbe.onrender.com/users/register`, data).then((res) => {
        console.log(res.data);
        dispatch({ type: REGISTER_SUCESS })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL })
    })
}
export const loginUser = (data) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post(`https://barajiakurbe.onrender.com/users/login`, data).then((res) => {
        console.log(res.data.name);
        Cookies.set("barajiakurToken",res.data.token);
        dispatch({ type: LOGIN_SUCESS, payload: res.data })
    }).catch((err) => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL })
    })
}


