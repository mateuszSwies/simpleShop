import { create } from 'zustand';

type Store = {
  numberOfProduct: number;
  addToCart: () => void;
  removeFromCart: () => void;
};

const useStore = create<Store>()(set => ({
  numberOfProduct: 0,
  addToCart: () =>
    set(state => ({ numberOfProduct: state.numberOfProduct + 1 })),
  removeFromCart: () =>
    set(state => ({ numberOfProduct: state.numberOfProduct - 1 })),
}));

export default useStore;
