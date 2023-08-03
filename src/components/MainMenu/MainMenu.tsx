import {
  Avatar,
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useAuthenticationStore from '@/store/userAuthenticationStore';

const MainMenu = () => {
  const { loggedUser, isLoggedIn } = useAuthenticationStore();

  return (
    <Flex
      justifyContent={{ base: 'flex-end', md: 'space-around' }}
      width="100%"
    >
      <Box display={{ base: 'block', md: 'none' }} position="relative">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Button variant="ghost" as={Link} to="/" color="black">
                Home
              </Button>
            </MenuItem>
            <MenuItem>
              <Button variant="ghost" as={Link} to="/shop" color="black">
                Shop
              </Button>
            </MenuItem>
            <MenuItem>
              <Button variant="ghost" as={Link} to="/promotions" color="black">
                Promotions
              </Button>
            </MenuItem>
            <MenuItem>
              <Button variant="ghost" as={Link} to="/contact" color="black">
                Contact
              </Button>
            </MenuItem>
            <MenuItem>
              <Button variant="ghost" as={Link} to="/about" color="black">
                About
              </Button>
            </MenuItem>
            <MenuItem>
              <Button variant="ghost" as={Link} to="/profile" color="black">
                Profile
              </Button>
              {/* <Avatar
                as={Link}
                size="xs"
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
              /> */}
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
        <Button variant="ghost" as={Link} to="/" color="black">
          Home
        </Button>
        <Button variant="ghost" as={Link} to="/shop" color="black">
          Shop
        </Button>
        <Button variant="ghost" as={Link} to="/promotions" color="black">
          Promotions
        </Button>
        <Button variant="ghost" as={Link} to="/contact" color="black">
          Contact
        </Button>
        <Button variant="ghost" as={Link} to="/about" color="black">
          About
        </Button>
        {isLoggedIn ? (
          <Flex align="center" justify="center">
            <Avatar
              as={Link}
              to="/profile"
              size="sm"
              name={loggedUser.name}
              src={loggedUser.avatar ? loggedUser.avatar : ''}
            />
            <Text as={Link} to="/profile" fontSize="md" ml="2">
              {loggedUser.name}
            </Text>
          </Flex>
        ) : (
          <Button variant="ghost" as={Link} to="/profile" color="blue">
            Log In
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default MainMenu;
