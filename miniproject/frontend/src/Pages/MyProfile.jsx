import { Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, myData } from '../Redux/AdminCrudReducer/action';
import styled from 'styled-components';
import ProfileCard from '../Component/ProfileCard';
import Laoder from '../Component/Laoder';

const MyProfile = () => {
    const token = useSelector(st => st.authReducer.token);
    const isLoading = useSelector(st => st.authReducer.isLoading);
    const data = useSelector(st => st.adminCurdReducer.mydata);
    const isLoading2 = useSelector(st => st.adminCurdReducer.isLoading);
    //console.log(data.data);
    const dispatch = useDispatch();
    // console.log(token.name);
    let mydata = data.data;
    useEffect(() => {
        dispatch(myData());
    }, [dispatch])
    const handleDelteData = (id) => {
        dispatch(deleteData(id)).then((res)=>{
            dispatch(myData());
        })
    }
    if (isLoading || isLoading2) {
        return <Laoder/>
    }
    return (
        <MDiv>
            <Heading>Wel Come {token.name}</Heading>
            <DIV>
                {mydata?.map((el) => (
                    <ProfileCard key={el._id} {...el} handleDelteData={handleDelteData} />
                ))}
            </DIV>
        </MDiv>
    )
}

export default MyProfile

const MDiv = styled.div`
@media (max-width: 768px) {
 DIV{
    grid-template-columns: repeat(1,1fr);
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
