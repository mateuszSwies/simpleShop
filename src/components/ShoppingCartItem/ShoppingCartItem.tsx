import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Product } from '@/types';
import useShoppingCartStore from '@/store/shoppingCartStore';

type ShoppingCartItemProps = {
  item: Product;
};

const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const { removeFromCart } = useShoppingCartStore();
  const { id, description, title, price, image } = item;

  return (
    <Card
      id={id}
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      w="100%"
    >
      <Image
        objectFit="contain"
        maxW={{ base: '100%', sm: '200px' }}
        src={image}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2">{description}</Text>
          <Text py="2">{`$ ${price}`}</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => removeFromCart(item)}
          >
            Remove from cart
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ShoppingCartItem;
