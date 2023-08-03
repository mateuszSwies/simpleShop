import {
  Card,
  Flex,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { Product } from '@/types';

type FullProductCardProps = {
  item: Product;
};

const FullProductCard = ({ item }: FullProductCardProps) => {
  const { title, image, description, price, rating } = item;

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
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
    </Card>
  );
};

export default FullProductCard;
