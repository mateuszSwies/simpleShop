import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Heading,
  Stack,
  Text,
  Grid,
} from '@chakra-ui/react';
import useShoppingCartStore from '@/store/shoppingCartStore';
import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useShoppingCartStore();

  const { label, price, image, description } = product;

  const handleOnAddToCartClick = (item: Product) => {
    addToCart(item);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Grid justifyContent="center">
          <Image src={image} alt={label} borderRadius="full" boxSize="150px" />
        </Grid>
        <Stack mt="6" spacing="3">
          <Heading size="md">{label}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {`$ ${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => handleOnAddToCartClick(product)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
