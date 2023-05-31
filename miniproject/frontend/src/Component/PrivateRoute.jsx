import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
const PrivateReoute = ({children}) => {
  const isAuth = useSelector(st=>st.authReducer.isAuth);
 const location = useLocation();
 console.log(location);
 if(!isAuth){
    return <Navigate state={location.pathname} to={'/login'}/>
 }
 return children;
}

export default PrivateReoute
