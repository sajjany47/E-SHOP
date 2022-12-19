import { useState, useEffect } from 'react';
import {
  Link as RouterLink,
  useSearchParams,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  Spacer,
} from '@chakra-ui/react';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();
  let redirect = searchParams.get('redirect') || '/';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Flex w='full' alignItems='center' justifyContent='center' py='5'>
      <FormContainer>
        <Heading as='h1' mb='8' fontSize='3xl'>
          Login
        </Heading>

        {error && <Message type='error'>{error}</Message>}

        <form onSubmit={submitHandler}>
          <FormControl id='email'>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input
              id='email'
              type='text'
              placeholder='username@domain.com'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <Spacer h='3' />

          <FormControl id='password'>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type='password'
              placeholder='************'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type='submit' colorScheme='teal' mt='4' isLoading={loading}>
            Login
          </Button>
        </form>

        <Flex pt='10'>
          <Text fontWeight='semibold'>
            New Customer?{' '}
            <Link as={RouterLink} to='/register'>
              Click here to register
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default LoginScreen;
