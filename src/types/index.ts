import { ImageProps } from '@chakra-ui/react';

export type Product = {
  id: string;
  label: string;
  value: string;
  price: number;
  image: ImageProps;
  description: string;
  highlighted?: boolean;
  discounted?: boolean;
};

export type ShoppingCart = {
  items: Product[];
  totalValue: number;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  purchasesMade: number;
};
