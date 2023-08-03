import { Product } from '@/types';

const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'nameASC':
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'nameDESC':
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'priceASC':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'priceDESC':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'category':
      sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'rating':
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    default:
      break;
  }

  return sortedProducts;
};

export default sortProducts;
