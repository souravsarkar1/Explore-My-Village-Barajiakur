import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from '../Redux/galleryReducer/action';
//import axios from 'axios';
const Gallery = () => {
   // const [data ,setData] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(st => st.dataReducer.data);
    useEffect(()=>{
        dispatch(getData());
    },[dispatch]);
    console.log(data);
    // useEffect(()=>{
    //     axios.get('http://localhost:8080/data').then((res)=>{
    //       console.log(res.data);
    //       setData(res.data);
    //     }).catch((err)=>{
    //       console.log(err.message);
          
    //     })
    //   },[])
      
    return (
        <div>
        {data?.map((el)=>(
            <div key={el.id}>
            <img src={'https://drive.google.com/file/d/1vJjHfmwff3y8bEPBzgtQlfo40GrdPw0n/view?usp=sharing'} alt={el.ocation} />
            <h2>{el.ocation}</h2>
            <h2>{el.clickBy}</h2>
            <h2>{el.loaction}</h2>
            </div>
        ))}
        </div>
    )
}

export default Gallery
