import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Flex h="container.sm" justifyContent="center" alignItems="center">
        <Heading as="h1" size={{ base: 'sm', md: 'xl', xl: '4xl' }}>
          Welcome in my simple shop.
        </Heading>
      </Flex>
      <Box textAlign="center">
        <Button as={Link} marginInline="40px" marginBottom="10px" to="/shop">
          Go shopping!
        </Button>
        <Button
          as={Link}
          marginInline="40px"
          marginBottom="10px"
          to="/promotions"
        >
          Check out latest promotions!
        </Button>
      </Box>
    </>
  );
};

export default Home;
