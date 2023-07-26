import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from '../Redux/galleryReducer/action';
import GalleryImageDiv from '../Component/GalleryImageDiv';
import styled from '@emotion/styled';
import Loader from '../Component/Laoder';

const Gallery = () => {
    const dispatch = useDispatch();
    const data = useSelector(st => st.dataReducer.data);
    const isLoading = useSelector(st => st.dataReducer.isLoading);
    useEffect(()=>{
        dispatch(getData());
    },[dispatch]);
    console.log(data);
    
    if (isLoading) {
      return <Loader/>
    }
    
      
    return (
        <MDiv>
        <DIV>
        {data?.map((el)=>(
            <GalleryImageDiv key={el._id} {...el}/>
        ))}
        </DIV>
        </MDiv>
    )
}

export default Gallery

const MDiv = styled.div`
@media (max-width: 768px) {
 DIV{
    grid-template-columns: repeat(2,1fr);
    margin: auto;
    padding: 20px;
 }
}

@media (max-width: 576px) {
  DIV{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
 
  }
`

const DIV = styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
grid-row-gap: 20px;
`
