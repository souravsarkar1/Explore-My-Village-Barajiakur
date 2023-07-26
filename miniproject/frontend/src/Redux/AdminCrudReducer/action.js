import axios from "axios";
import { ADD_DATA_FAIL, ADD_DATA_REQUEST, ADD_DATA_SUCESS, DELETE_MYDATA_FAIL, DELETE_MYDATA_REQUEST, DELETE_MYDATA_SUCESS, GET_MYDATA_FAIL, GET_MYDATA_REQUEST, GET_MYDATA_SUCESS, UPDATE_MYDATA_FAIL, UPDATE_MYDATA_REQUEST, UPDATE_MYDATA_SUCESS } from "./actionTypes";
import Cookies from "js-cookie";
export const addData = (data) => (dispatch) => {
    const token = Cookies.get("barajiakurToken")
    dispatch({ type: ADD_DATA_REQUEST });
    axios.post(`https://barajiakurbe.onrender.com/data/add`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        dispatch({ type: ADD_DATA_SUCESS });
    }).catch((err) => {
        console.log(err);
        dispatch({ type: ADD_DATA_FAIL });
    })
}

export const myData = () => (dispatch) => {
    const token = Cookies.get("barajiakurToken")
    dispatch({ type: GET_MYDATA_REQUEST });

    axios.get(`https://barajiakurbe.onrender.com/data/mydata`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        dispatch({ type: GET_MYDATA_SUCESS, payload: res.data });
    }).catch((err) => {
        dispatch({ type: GET_MYDATA_FAIL });
    })
}

export const deleteData = (id) => (dispatch) => {
    const token = Cookies.get("barajiakurToken")
    dispatch({ type: DELETE_MYDATA_REQUEST });
    axios.delete(`https://barajiakurbe.onrender.com/data/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        dispatch({ type: DELETE_MYDATA_SUCESS });
        console.log(res);
    }).catch((err) => {
        dispatch({ type: DELETE_MYDATA_FAIL });
        console.log(err);
    })
}
export const updateData = (id, data) => (dispatch) => {
    const token = Cookies.get("barajiakurToken")
    dispatch({ type: UPDATE_MYDATA_REQUEST });
    axios.put(`https://barajiakurbe.onrender.com/data/update/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        dispatch({ type: UPDATE_MYDATA_SUCESS });
        console.log(res);
    }).catch((err) => {
        dispatch({ type: UPDATE_MYDATA_FAIL });
        console.log(err);
    })
}