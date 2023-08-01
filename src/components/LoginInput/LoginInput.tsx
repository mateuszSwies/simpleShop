import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { object, string, ZodError } from 'zod';
import useAuthenticationStore from '@/store/userAuthenticationStore';

const schema = object({
  email: string().email('Incorrect email address.').nonempty('Required field.'),
  password: string()
    .min(6, 'The password must have at least 6 characters.')
    .nonempty('Required field.'),
});

const LoginInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const { logIn } = useAuthenticationStore();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      schema.parse(loginData);
      setError({ email: '', password: '' });
      logIn(loginData.email);
    } catch (err: unknown) {
      if (err instanceof ZodError && err.formErrors) {
        setError({
          email: err.formErrors.fieldErrors?.email?.[0] || '',
          password: err.formErrors.fieldErrors?.password?.[0] || '',
        });
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex height="100%" align="center" justifyContent="center">
      <Box p={4} maxW="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <form onSubmit={handleSubmit}>
          <FormControl id="login" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder="email@example.com"
              value={loginData.email}
              onChange={handleInputChange}
            />
            {error.email && (
              <Text color="red" fontSize="sm">
                {error.email}
              </Text>
            )}
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                value={loginData.password}
                onChange={handleInputChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {error.password && (
              <Text color="red" fontSize="sm">
                {error.password}
              </Text>
            )}
          </FormControl>
          <Button colorScheme="blue" size="lg" w="full" type="submit">
            Sign In
          </Button>
        </form>
        <Text mt={2} textAlign="center">
          <Text as={Link} color="blue.500" fontSize="sm" to="/registration">
            Sign Up
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginInput;
