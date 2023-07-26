import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Flex,
  Badge,
  Divider,
} from '@chakra-ui/react';

const SinglePageGallery = () => {
  const { id } = useParams();
  const data = useSelector(st => st.dataReducer.data);
  const myData = data.find(el => el._id === id);

  // Sample data as a fallback in case myData is not found
  const dj = {
    clickBy: "Nishith Sarkar",
    img: "https://drive.google.com/uc?id=1EA1MoxnCxx2ZMBivyrS2SfS0R2bUDMNl",
    location: "Barajiakur Street",
    ocation: "Beautiness of Barajiakur",
    _id: "647775c1065a8c0c0b6a2e89",
  };

  // Use myData if found, otherwise use the fallback data (dj)
  const imageData = myData || dj;

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="lg">
      <Divider mb={4} />
      <Flex direction="column" alignItems="center">
        <Box
          w="100%"
          h="600px"
          bgGradient="linear(to-r, teal.200, teal.400)"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
        >
          <Image src={imageData.img} alt="Gallery Image" objectFit="cover" h="100%" w="100%" />
        </Box>
        <Box mt={4}>
          <Badge colorScheme="teal">{imageData.location}</Badge>
        </Box>
        <Text mt={2} fontWeight="bold">
          Clicked By: {imageData.clickBy}
        </Text>
        <Text mt={2}>{imageData.ocation}</Text>
      </Flex>
    </Box>
  );
};

export default SinglePageGallery;
