import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { registerUser } from '../Redux/AuthenticationReducer/action';
const initialCase = {
  name: '',
  email: '',
  pass: '',
  age: ''
}
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(initialCase);
  const dispatch = useDispatch();
  const { name, email, pass, age } = userData;
  const { isLoading, isRegister, isError } = useSelector(st => st.authReducer);
  console.log(isLoading, isRegister, isError);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevProduct) => {
      return {
        ...prevProduct,
        [name]: name === 'age' ? +value : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(registerUser(userData));
    //setUserData(initialCase);
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w={600}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to contribute in my web ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" placeholder='Enter Your Name Here' value={name} name='name' onChange={handleChange} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Enter Your Email Here' value={email} name='email' onChange={handleChange} />
            </FormControl>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input type="number" placeholder='Enter Your Age Here' value={age} name='age' onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} placeholder='Enter Your Password Here' value={pass} name='pass' onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to={'/login'} color={'blue'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}