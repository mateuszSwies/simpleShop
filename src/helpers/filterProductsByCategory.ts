import { Product, Category } from '@/types';

const filterProductsByCategory = (
  products: Product[],
  category: Category
): Product[] => {
  return products.filter(product => product.category === category);
};

export default filterProductsByCategory;
