import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/constants/mocks';
import { Product } from '@/types';
import ProductModal from '../ProductModal/ProductModal';

const ShopView = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [shopProducts, setShopProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [productToShowMore, setProductToShowMore] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toast = useToast();

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setShopProducts(json))
      .catch(() =>
        toast({
          title: 'OOPS!',
          description: 'Something went wrong, try again in a while.',
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      );
  }, []);

  useEffect(() => {
    if (shopProducts) {
      const matchingProduct = shopProducts.find(
        product => product.id === selectedProductId
      );
      setProductToShowMore(matchingProduct);
    }
  }, [selectedProductId]);

  const handleOnProductClick = (productId: string) => {
    setIsModalOpen(true);
    setSelectedProductId(productId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex p={4} justifyContent="space-between">
      <Box width="25%">
        <Heading mb={4}>Kategorie</Heading>
        <Stack spacing={2}>
          {categories.map(category => (
            <Box
              key={Math.random()}
              cursor="pointer"
              bg={selectedCategory === category ? 'gray.200' : 'transparent'}
              p={2}
              borderRadius="md"
              onClick={() => handleCategoryClick(category)}
            >
              <Text
                fontWeight={selectedCategory === category ? 'bold' : 'normal'}
              >
                {category}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Środek */}
      <Box width="80%">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>Sortowanie</Heading>
          {/* Here goes sorting */}
        </Flex>
        {/* breadcrumbs ? */}
        <Text mt={2}>{`Jesteś w: ${selectedCategory}`}</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {shopProducts &&
            shopProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={handleOnProductClick}
              />
            ))}
        </Grid>
      </Box>
      {productToShowMore && (
        <ProductModal
          item={productToShowMore}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Flex>
  );
};

export default ShopView;
