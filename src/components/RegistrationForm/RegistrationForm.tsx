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
import { object, string, ZodError } from 'zod'; // Dodaliśmy import 'ZodError'

const registrationSchema = object({
  firstName: string().nonempty('Required field.'),
  lastName: string().nonempty('Required field.'),
  email: string().email('Incorrect email address.').nonempty('Required field.'),
  password: string()
    .min(6, 'Password must have at least 6 characters.')
    .nonempty('Required field.'),
  confirmPassword: string()
    .min(6, 'Password must have at least 6 characters.')
    .nonempty('Required field.'),
  phoneNumber: string().nonempty('Required field.'),
});

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
};

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: 'Passwords do not match.',
      });
      return;
    }

    try {
      registrationSchema.parse(formData);
      setErrors(initialFormData);
      // TODO: send data to store or storage or BE
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err instanceof ZodError && err.formErrors) {
        setErrors(prevErrors => ({
          ...prevErrors,
          ...err.formErrors.fieldErrors,
        }));
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
          <FormControl id="firstName" mb={4}>
            <FormLabel>
              First Name
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <Text color="red" fontSize="sm">
                {errors.firstName}
              </Text>
            )}
          </FormControl>
          <FormControl id="lastName" mb={4}>
            <FormLabel>
              Last Name
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <Text color="red" fontSize="sm">
                {errors.lastName}
              </Text>
            )}
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>
              Email
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <Text color="red" fontSize="sm">
                {errors.email}
              </Text>
            )}
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>
              Password
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <Text color="red" fontSize="sm">
                {errors.password}
              </Text>
            )}
          </FormControl>
          <FormControl id="confirmPassword" mb={4}>
            <FormLabel>
              Confirm Password
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.confirmPassword && (
              <Text color="red" fontSize="sm">
                {errors.confirmPassword}
              </Text>
            )}
          </FormControl>
          <FormControl id="phoneNumber" mb={4}>
            <FormLabel>
              Phone Number
              <Text as="span" color="red">
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <Text color="red" fontSize="sm">
                {errors.phoneNumber}
              </Text>
            )}
          </FormControl>
          <Button colorScheme="blue" size="lg" w="full" type="submit">
            Sign Up
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default RegistrationForm;
