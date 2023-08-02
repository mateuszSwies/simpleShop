import {
  Category,
  FoodSubCategory,
  FurnitureSubCategory,
  Product,
} from '@/types';

export const categories = [
  {
    name: Category.Furniture,
    subcategories: [
      FurnitureSubCategory.Chair,
      FurnitureSubCategory.Lamp,
      FurnitureSubCategory.Sofa,
    ],
  },
  {
    name: Category.Food,
    subcategories: [FoodSubCategory.Fruits, FoodSubCategory.Vegetables],
  },
];

export const shopProducts: Product[] = [
  {
    id: '1',
    label: 'Beautiful sofa',
    price: 150,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: `This sofa is perfect for modern tropical spaces, baroque inspired
      spaces, earthy toned spaces and for people who love a chic design
      with a sprinkle of vintage design.`,
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Sofa,
  },
  {
    id: '2',
    label: 'Some seat',
    price: 50,
    image:
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Chair,
  },
  {
    id: '3',
    label: 'Yellow chair',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is th',
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Chair,
  },
  {
    id: '4',
    label: 'Grey lamp',
    price: 110,
    image:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are goin",
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Chair,
  },
  {
    id: '5',
    label: 'Beautiful Lamp',
    price: 197,
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Sofa,
  },
  {
    id: '6',
    label: 'Beautiful Gold Lamp',
    price: 254,
    image:
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Lamp,
  },
  {
    id: '7',
    label: 'Beautiful Brown sofa',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    highlighted: false,
    discounted: false,
    category: Category.Furniture,
    subCategory: FurnitureSubCategory.Sofa,
  },
];
