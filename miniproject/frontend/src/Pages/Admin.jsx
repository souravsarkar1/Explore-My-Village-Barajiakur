import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    dispatch(addData(product));
    setProduct(initialState);
  };

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
