import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../Redux/AuthenticationReducer/action';
import Cookies from 'js-cookie';
import Laoder from '../Component/Laoder';
const initialCase = {
  email: '',
  pass: ""
}
export default function Login() {
  useEffect(() => {
    Cookies.set("barajiakurToken", "");
  }, [])
  const [userData, setUserData] = useState(initialCase);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isError, isAuth, token,isLoading } = useSelector(st => st.authReducer);
  console.log({ isAuth, isError, token });
  const { email, pass } = userData;
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
    dispatch(loginUser(userData)).then((res) => {
      const msg = Cookies.get("loginMessageBarajiakur");
      alert(msg);
      setTimeout(() => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/myprofile")
        }
      }, 1500);
    })
    //  setUserData(initialCase);
  };
 if (isLoading) {
    <Laoder/>
 }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' valid={email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='pass' value={pass} onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                No Account? <Link to={'/signup'} color={'blue'}>Create A New Account</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}