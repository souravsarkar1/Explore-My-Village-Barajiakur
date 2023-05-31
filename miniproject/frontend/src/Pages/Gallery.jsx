import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from '../Redux/galleryReducer/action';
import GalleryImageDiv from '../Component/GalleryImageDiv';
import styled from '@emotion/styled';
//import axios from 'axios';
//  const data = [
//     {
//         "img": "https://drive.google.com/uc?id=1jnBtob-L5i-PGcj25NbpN1hxHJ7gLyLd",
//         "ocation": "Blood Donation Camp",
//         "loaction": "Barajiakur Bazar",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1muE6dOx-l6jOYnJjDK4_l8JYsxa0TMTx",
//         "ocation": "Blood Donation Camp",
//         "loaction": "Barajiakur Bazar",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1Ozg7hGGYIzwKEC66aEbqwZnK2_FT0ioX",
//         "ocation": "Beautiness of Barajiakur",
//         "loaction": "Koikuri Bil",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1EA1MoxnCxx2ZMBivyrS2SfS0R2bUDMNl",
//         "ocation": "Beautiness of Barajiakur",
//         "loaction": "Barajiakur Street",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1ZvskWSjezopCPzJ-qaIQJDeJd6JMWR13",
//         "ocation": "Beautiness of Barajiakur",
//         "loaction": "Koikuri Bi",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=11DN7OeZ8wlfaLQO06BSgWLUvtC2KRcQg",
//         "ocation": "Barajiakur Panchonantala Shib Mondhir",
//         "loaction": "Kirton",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1bzKe1D74XEjLMN_3r34ZGLdDGlBVaEuZ",
//         "ocation": "Barajiakur Panchonantala Shib Mondhi",
//         "loaction": "Kirton",
//         "clickBy": "Nishith Sarkar"
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1rFUP4kvr7sM-YqqOG_UhJFUn2g6NX-yK",
//         "ocation": "Farimig",
//         "loaction": "Barajiakur Sabji Math",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1Ozg7hGGYIzwKEC66aEbqwZnK2_FT0ioX",
//         "ocation": "Beautiness of Barajiakur",
//         "loaction": "Koikuri Bil",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1eS5cMkpvqoSyPpNz2YIkJ9O-wOGQ_jd6",
//         "ocation": "Durga Puja",
//         "loaction": "Barajiakur Panchonantala Shib Mondhir",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1rFUP4kvr7sM-YqqOG_UhJFUn2g6NX-yK",
//         "ocation": "Playing Criket",
//         "loaction": "Barajiakur Panchonantala Shib Mondhir",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1NZbxaxjTrTytxa6mrU2YYQBt83GmgDIy",
//         "ocation": "Blood Donation Camp",
//         "loaction": "Barajiakur Samaj Sochatan Chatra Samati",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1K30VSnVx7YVjZbA4IWysDUpxKsqtwUdg",
//         "ocation": "Drawing Compition",
//         "loaction": "Barajiakur Samaj Sochatan Chatra Samati",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1frpnHITKS7OLVRJj_TXe095sGscfEUoS",
//         "ocation": "Preapering For the Kirton",
//         "loaction": "Barajiakur Panchonantala Shib Mondhir",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1F8cjAk-v2XIo-hYFJP6IFQifgKnpj90I",
//         "ocation": "Barajiakur Charak Mela",
//         "loaction": "Barajiakur Panchonantala Shib Mondhir",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=14EKmdxHA8WHoEdEpzqq2MdAb-mAWqDlS",
//         "ocation": "Barajiakur Charak Mela",
//         "loaction": "Barajiakur Panchonantala Shib Mondhir",
//         "clickBy": "Nishith Sarkar"  
//     },
//     {
//         "img": "https://drive.google.com/uc?id=1vJjHfmwff3y8bEPBzgtQlfo40GrdPw0n",
//         "ocation": "Beautiness of Barajiakur P.C High School" ,
//         "loaction": "Barajiakur",
//         "clickBy": "Nishith Sarkar"  
//     }
// ]
const Gallery = () => {
 //  const [data ,setData] = useState([]);
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
grid-template-columns: repeat(3,1fr);
grid-row-gap: 20px;
`
