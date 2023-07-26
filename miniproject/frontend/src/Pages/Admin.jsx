import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { addData } from '../Redux/AdminCrudReducer/action';
import Loader from '../Component/Laoder';
import { useNavigate } from 'react-router-dom';

const initialState = {
  img: '',
  ocation: '',
  location: '',
  clickBy: '',
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const { img, ocation, location, clickBy } = product;
  const [flag, setFlag] = useState(true);
  const isLoading = useSelector(st=>st.adminCurdReducer.isLoading);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' ? +value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addData(product)).then((res)=>{
      setTimeout(() => {
        return  <Loader />;
      }, 2000);
      navigate('/myprofile')
    })
    setProduct(initialState);
  };
  if (flag || isLoading) {
   
  }
  return (
    <Box
      maxWidth="600px"
      mx="auto"
      borderWidth="1px"
      p={4}
      borderRadius="md"
      boxShadow="md"
      bg="white"
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Add New Post
      </Heading>
      <Divider mb={4} />

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Image Url</FormLabel>
          <Input
            type="text"
            name="img"
            placeholder="Image Url"
            value={img}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Theme</FormLabel>
          <Input
            type="text"
            name="ocation"
            placeholder="Mood of Image"
            value={ocation}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Location</FormLabel>
          <Input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>{`Contributor's Name`}</FormLabel>
          <Input
            type="text"
            name="clickBy"
            placeholder="Contributor's Name"
            value={clickBy}
            onChange={handleChange}
          />
        </FormControl>
        <Button mt={6} colorScheme="teal" type="submit" w="100%">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Admin;
