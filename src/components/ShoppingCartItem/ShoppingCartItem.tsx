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

type ShoppingCartItemProps = {
  item: Product;
};

const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const { id, description, title, price, image } = item;

  return (
    <Card
      id={id}
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        // src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        src={image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2">{description}</Text>
          <Text py="2">{price}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Add more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ShoppingCartItem;
