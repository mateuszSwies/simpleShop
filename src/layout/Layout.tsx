import { Box, Flex, Heading, Center } from '@chakra-ui/react';
import { ReactNode } from 'react';
import MainMenu from '@/components/MainMenu';
import ShoppingCartIcon from '@/layout/ShoppingCartIcon';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Center w="95vw">
      <Flex direction="column" minH="100vh" w="90%" maxW="1440px">
        <Box bg="teal" color="white" p={4}>
          <Heading as="nav" size={{ base: 'md', md: 'lg', lg: 'xl' }}>
            <MainMenu />
          </Heading>
        </Box>
        <Box flex="1" p={4}>
          {children}
        </Box>
        <Box bg="gray" color="white" p={4}>
          <Center>Simple shop &copy;</Center>
        </Box>
        <ShoppingCartIcon />
      </Flex>
    </Center>
  );
};

export default Layout;
