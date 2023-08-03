import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
  useToast,
  Select,
} from '@chakra-ui/react';
import { useEffect, useState, ChangeEvent } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/constants/mocks';
import { Category, Product } from '@/types';
import ProductModal from '../ProductModal/ProductModal';
import sortProducts from '@/helpers/shopProductSorter';
import filterProductsByCategory from '@/helpers/filterProductsByCategory';

const ShopView = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [shopProducts, setShopProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [productToShowMore, setProductToShowMore] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toast = useToast();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setShopProducts(json);
        setFilteredProducts(json);
      })
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
  }, [selectedProductId, shopProducts]);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    if (category === null) {
      setFilteredProducts(shopProducts);
    } else {
      const newFilteredProducts = filterProductsByCategory(
        shopProducts,
        category
      );
      setFilteredProducts(newFilteredProducts);
    }
  };

  const handleOnProductClick = (productId: string) => {
    setIsModalOpen(true);
    setSelectedProductId(productId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnSortingSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const newShopProductsList = sortProducts(
      filteredProducts,
      event.target.value
    );
    setFilteredProducts(newShopProductsList);
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
                {capitalizeFirstLetter(category)}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box width="80%">
        <Flex justifyContent="center" alignItems="center" mb="5">
          <Text mr="5">Sort by:</Text>
          <Select w="xs" onChange={handleOnSortingSelect}>
            <option value="nameASC">Name Ascending</option>
            <option value="nameDESC">Name Descending</option>
            <option value="priceASC">Price Ascending</option>
            <option value="priceDESC">Price Descending</option>
            <option value="category">Category</option>
            <option value="rating">Rating</option>
          </Select>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {filteredProducts &&
            filteredProducts.map(product => (
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
