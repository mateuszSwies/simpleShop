import { Box, Flex, Heading, Stack, Text, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, shopProducts } from '@/constants/mocks';

const ShopView = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
      //   setSelectedSubcategory('');
    }
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
              bg={
                selectedCategory === category.name ? 'gray.200' : 'transparent'
              }
              p={2}
              borderRadius="md"
              onClick={() => handleCategoryClick(category.name)}
            >
              <Text
                fontWeight={
                  selectedCategory === category.name ? 'bold' : 'normal'
                }
              >
                {category.name}
              </Text>
              {selectedCategory === category.name && (
                <Stack pl={4} mt={2}>
                  {category.subcategories.map(subcategory => (
                    <Box
                      key={subcategory}
                      cursor="pointer"
                      bg={
                        selectedSubcategory === subcategory
                          ? 'gray.200'
                          : 'transparent'
                      }
                      p={1}
                      borderRadius="md"
                      onClick={() => setSelectedSubcategory(subcategory)}
                    >
                      <Text
                        fontWeight={
                          selectedSubcategory === subcategory
                            ? 'bold'
                            : 'normal'
                        }
                      >
                        {subcategory}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Środek */}
      <Box width="80%">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>Sortowanie</Heading>
          {/* Dodaj tu opcje sortowania */}
        </Flex>
        {/* Dodaj tu breadcrumbs */}
        <Text mt={2}>{`Jesteś w: ${selectedSubcategory}`}</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {shopProducts &&
            shopProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default ShopView;
