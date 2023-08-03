/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { Product, ShoppingCart } from '@/types';

type ShoppingCartStore = {
  numberOfProducts: number;
  shoppingCart: ShoppingCart;
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
};

const useShoppingCartStore = create<ShoppingCartStore>()(set => ({
  numberOfProducts: 0,
  shoppingCart: {
    items: [],
    totalValue: 0,
  },
  addToCart: item =>
    set(state => ({
      numberOfProducts: state.numberOfProducts + 1,
      shoppingCart: {
        items: [...state.shoppingCart.items, item],
        totalValue: state.shoppingCart.totalValue + item.price,
      },
    })),
  removeFromCart: item =>
    set(state => {
      const updatedTotalValue = (
        state.shoppingCart.totalValue - item.price
      ).toFixed(2);
      const updatedItems = state.shoppingCart.items.filter(
        cartItem => cartItem.id !== item.id
      );

      return {
        numberOfProducts: state.numberOfProducts - 1,
        shoppingCart: {
          items: updatedItems,
          totalValue: parseFloat(updatedTotalValue),
        },
      };
    }),
}));

export default useShoppingCartStore;
