import axios from 'axios'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCESS } from './actiontTypes'
import Cookies from "js-cookie";
export const registerUser = (data) => (dispatch) => {
    let signupMessageBarajiakur;
    dispatch({ type: REGISTER_REQUEST });
    return axios.post(`https://barajiakurbe.onrender.com/users/register`, data).then((res) => {
        console.log(res.data);
        signupMessageBarajiakur = res.data.msg;
        dispatch({ type: REGISTER_SUCESS })
    }).catch((err) => {
        console.log(err);
        signupMessageBarajiakur = err.response.data.error;
        dispatch({ type: REGISTER_FAIL })
    }).finally((err) => {
        Cookies.set("signupMessageBarajiakur", signupMessageBarajiakur);
    })
}
export const loginUser = (data) => (dispatch) => {
    let loginMessageBarajiakur;
    dispatch({ type: LOGIN_REQUEST });
    return axios.post(`https://barajiakurbe.onrender.com/users/login`, data).then((res) => {
        console.log(res.data.name);
        loginMessageBarajiakur = res.data.msg;
        Cookies.set("barajiakurToken", res.data.token);
        dispatch({ type: LOGIN_SUCESS, payload: res.data })
    }).catch((err) => {
        console.log(err);
        loginMessageBarajiakur = err.response.data.error;
        dispatch({ type: LOGIN_FAIL })
    }).finally(() => {
        Cookies.set("loginMessageBarajiakur", loginMessageBarajiakur);
    })
}


