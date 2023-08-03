import { Box, Flex, Center } from '@chakra-ui/react';
import { ReactNode } from 'react';
import MainMenu from '@/components/MainMenu';
import ShoppingCartIcon from '@/layout/ShoppingCartIcon';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Center>
      <Flex direction="column" w="100vw">
        <Box
          bg="teal"
          color="white"
          p={4}
          width="100vw"
          maxWidth="1440px"
          marginX="auto"
        >
          <MainMenu />
        </Box>
        <Box
          flex="1"
          w="100vw"
          alignContent="center"
          maxWidth="1440px"
          marginX="auto"
          mb={10}
        >
          {children}
        </Box>
        <Box
          bg="gray"
          color="white"
          p={4}
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          maxWidth="1440px"
          marginX="auto"
          width="100vw"
        >
          <Center>Simple shop &copy;</Center>
        </Box>
        <ShoppingCartIcon />
      </Flex>
    </Center>
  );
};

export default Layout;
