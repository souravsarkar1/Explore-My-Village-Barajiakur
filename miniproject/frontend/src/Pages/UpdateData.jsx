import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { updateData } from '../Redux/AdminCrudReducer/action';
import { getData } from '../Redux/galleryReducer/action';
import Loader from '../Component/Laoder';

const UpdateData = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getData());
    },[dispatch])
    const data = useSelector(st => st.dataReducer.data);
    console.log(data);
    const myData = data.find((el) => el._id === id);
    console.log(myData);
    console.log(id);
    const { img, location, clickBy, ocation } = myData;
    const [fromData, setFormData] = useState({
        img,
        location,
        clickBy,
        ocation,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Check if the 'name' and 'value' properties exist on 'e.target'
        if (name !== undefined && value !== undefined) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            // Handle the case when 'name' or 'value' is missing
            console.error('Invalid event target:', e.target);
        }
    };

    const handleSubmit = () => {
        console.log(fromData);
        dispatch(updateData(id, fromData)).then((res)=>{
            setTimeout(() => {
                <Loader/>
            }, 1500);
           
        })
        navigate('/myprofile')
    };

    return (
        <Flex
            bg={useColorModeValue('gray.100', 'gray.900')}
            align="center"
            justify="center"
            css={{
                backgroundAttachment: 'fixed',
            }}
            id="contact"
        >
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}
            >
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: '4xl',
                                md: '5xl',
                            }}
                        >
                            Update Your Data Here!
                        </Heading>

                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Box
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base"
                            >
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Image Url</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement></InputLeftElement>
                                            <Input
                                                type="text"
                                                name="img"
                                                onChange={handleChange}
                                                value={fromData.img}
                                                placeholder="Enter Your Image Url"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Location</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement></InputLeftElement>
                                            <Input
                                                type="text"
                                                name="location"
                                                onChange={handleChange}
                                                value={fromData.location}
                                                placeholder="Enter Your Location"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Click By</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement></InputLeftElement>
                                            <Input
                                                type="text"
                                                name="clickBy"
                                                onChange={handleChange}
                                                value={fromData.clickBy}
                                                placeholder="Enter Your Click By"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Ocation</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement></InputLeftElement>
                                            <Input
                                                type="text"
                                                name="ocation"
                                                onChange={handleChange}
                                                value={fromData.ocation}
                                                placeholder="Enter Your Ocation"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <Button
                                        colorScheme="blue"
                                        bg="blue.400"
                                        color="white"
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        onClick={handleSubmit}
                                        width="full"
                                    >
                                        Update
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
};

export default UpdateData;
