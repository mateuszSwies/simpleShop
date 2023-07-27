/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { Product, ShoppingCart } from '@/types';

type Store = {
  numberOfProducts: number;
  shoppingCart: ShoppingCart;
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
};

const useStore = create<Store>()(set => ({
  numberOfProducts: 0,
  shoppingCart: {
    items: [],
    totalValue: 0,
  },
  addToCart: item =>
    set(state => ({
      numberOfProduct: state.numberOfProducts + 1,
      shoppingCart: {
        items: [...state.shoppingCart.items, item],
        totalValue: state.shoppingCart.totalValue + item.price,
      },
    })),
  removeFromCart: item =>
    set(state => {
      const newNumberOfProducts = state.numberOfProducts - 1;
      const newTotalValue = state.shoppingCart.totalValue - item.price;
      const newItems = state.shoppingCart.items.filter(
        cartItem => cartItem.id !== item.id
      );

      // We check whether the number of products will remain greater
      // than or equal to zero after the operation is performed
      if (newNumberOfProducts >= 0) {
        return {
          numberOfProduct: newNumberOfProducts,
          shoppingCart: {
            items: newItems,
            totalValue: newTotalValue,
          },
        };
      }
      // If the number of products falls below zero, we return the current state unchanged
      return state;
    }),
}));

export default useStore;
