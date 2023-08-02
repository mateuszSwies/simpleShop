/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum Category {
  Furniture = 'Furniture',
  Food = 'Food',
}

export enum FurnitureSubCategory {
  Sofa = 'Sofa',
  Chair = 'Chair',
  Lamp = 'Lamp',
}

export enum FoodSubCategory {
  Fruits = 'Fruits',
  Vegetables = 'Vegetables',
}

export type Product = {
  id: string;
  label: string;
  price: number;
  image: string;
  description: string;
  highlighted?: boolean;
  discounted?: boolean;
  category: Category;
  subCategory: FurnitureSubCategory | FoodSubCategory;
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
