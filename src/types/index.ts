/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum Category {
  MensClothing = "men's clothing",
  Jewelery = 'jewelery',
  Electronics = 'electronics',
  WomensClothing = "women's clothing",
}

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: Category;
  rating: {
    rate: number;
    count: number;
  };
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
