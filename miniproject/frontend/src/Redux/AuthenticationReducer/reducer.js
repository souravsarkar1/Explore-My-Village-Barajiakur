import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCESS } from "./actiontTypes";

const initialState = {
    isLoading: false,
    isRegister: false,
    isError: false,
    isAuth : false,
    token : ''
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER_REQUEST:
            return { ...state, isLoading: true };
        case REGISTER_SUCESS:
            return { ...state, isLoading: false, isRegister: true };
        case REGISTER_FAIL:
            return { ...state, isLoading: false, isError: true }
        case LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case LOGIN_SUCESS:
            return { ...state, isLoading: false, isAuth: true , token : payload };
        case LOGIN_FAIL:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}