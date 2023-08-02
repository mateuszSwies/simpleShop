import { Flex, Heading, Text } from '@chakra-ui/react';
import useShoppingCartStore from '@/store/shoppingCartStore';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const ShoppingCart = () => {
  const { shoppingCart } = useShoppingCartStore();
  const { items, totalValue } = shoppingCart;

  return (
    <Flex w="100%" align="center" flexDir="column" gap="7">
      <Heading>Here is your shopping cart</Heading>
      {items ? (
        items.map(item => <ShoppingCartItem key={item.id} item={item} />)
      ) : (
        <Text>Your cart is empty</Text>
      )}
      <Heading>{`Total value: ${totalValue}`}</Heading>
    </Flex>
  );
};

export default ShoppingCart;
