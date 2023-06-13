import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addData } from '../Redux/AdminCrudReducer/action';
import { Heading } from '@chakra-ui/react';



const initialState = {
  img: '',
  ocation: '',
  location: '',
  clickBy: ''
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const { url, ocation, location, clickBy } = product;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: name === 'price' ? +value : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addData(product));
    setProduct(initialState);
  };

  return (
    <DIV>

      <Heading>Add New Post</Heading>
      <hr color='green' />
      <form onSubmit={handleSubmit}>
        <label>Image Url</label>
        <input
          type="text"
          name="img"
          placeholder="Image Url"
          value={url}
          onChange={handleChange}
        />
        <label>Theme</label>
        <input
          type="text"
          name="ocation"
          placeholder="Mood of Image"
          value={ocation}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={handleChange}
        />
        <label>{`Contributor's Name`}</label>
        <input
          type="text"
          name="clickBy"
          placeholder="Contributors Name"
          value={clickBy}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 600px;
  margin: auto;
  border: 1px solid black;
  padding: 30px;
  font-size: larger;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input,
  select {
    height: 40px;
    border-radius: 4px;
  }

  button {
    width: 400px;
    padding: 20px;
    cursor: pointer;
    margin: auto;
  }

  label {
    align-items: left;
  }
  @media (max-width: 576px){
    width: 300px;
    form{
        width: 250px;
    }
    button {
    width: 100px;
    padding: 20px;
    cursor: pointer;
    margin: auto;
  }
  input,
  select {
    height: 20px;
  }
  }
`;
