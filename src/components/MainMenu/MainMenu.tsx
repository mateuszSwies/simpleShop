import {
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MainMenu = () => {
  return (
    <Flex justifyContent={{ base: 'flex-end', md: 'space-around' }}>
      <Box display={{ base: 'block', md: 'none' }} position="relative">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/home" color="black">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about" color="black">
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/shop" color="black">
                Shop
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact" color="black">
                Contact
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/promotions" color="black">
                Promotions
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/profile" color="black">
                Profile
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Flex
        as="nav"
        display={{ base: 'none', md: 'flex' }}
        flexGrow={1}
        justifyContent="space-around"
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/promotions">Promotions</Link>
        <Link href="/profile">Profile</Link>
      </Flex>
    </Flex>
  );
};

export default MainMenu;
