import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Box, IconButton, useToast, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useStore from '@/store/shoppingCartStore';

const ShoppingCartIcon = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { numberOfProducts } = useStore();

  const handleOnCartClick = () => {
    navigate('/cart');
    toast({
      title: 'Cart clicked.',
      description: 'You clicked a cart button.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      position="fixed"
      bottom="3rem"
      right="10vw"
      zIndex="999"
      cursor="pointer"
      onClick={handleOnCartClick}
    >
      <IconButton
        isRound
        variant="solid"
        colorScheme="teal"
        size="lg"
        aria-label="ShoppingCart"
        icon={<AiOutlineShoppingCart size="30px" />}
      />
      <Badge
        position="absolute"
        top="-8px"
        right="-8px"
        fontSize="15px"
        bgColor="red.500"
        color="white"
      >
        {numberOfProducts}
      </Badge>
    </Box>
  );
};

export default ShoppingCartIcon;
