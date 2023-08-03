import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
} from '@chakra-ui/react';
import useShoppingCartStore from '@/store/shoppingCartStore';
import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
  // eslint-disable-next-line no-unused-vars
  onProductClick: (productId: string) => void;
};

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const { addToCart } = useShoppingCartStore();

  const { title, price, image, description, rating, id } = product;

  const handleOnAddToCartClick = (item: Product) => {
    addToCart(item);
  };

  const showMoreInfo = (productId: string) => {
    onProductClick(productId);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Grid justifyContent="center">
          <Image src={image} alt={title} borderRadius="full" boxSize="150px" />
        </Grid>
        <Stack mt="6" spacing="3">
          <Heading size="md" noOfLines={[1]}>
            {title}
          </Heading>
          <Text noOfLines={[1, 2, 3]} maxH="30%">
            {description}
          </Text>
          <Flex justify="space-around">
            <Text color="blue.600" fontSize="2xl">
              {`$ ${price}`}
            </Text>
            <Flex align="center">
              <Text color="black" fontSize="2xl" mr="2">
                {`${rating.rate}/5`}
              </Text>
              <Text color="black" fontSize="sm">
                {`(${rating.count})`}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter gap={2} justify="space-around">
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => handleOnAddToCartClick(product)}
        >
          Add to cart
        </Button>
        <Button
          variant="outline"
          colorScheme="blue"
          onClick={() => showMoreInfo(id)}
        >
          More Info
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
