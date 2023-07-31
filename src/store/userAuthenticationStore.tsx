/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { User } from '@/types';

type UserAuthenticationStore = {
  loggedUser: User;
  isLoggedIn: boolean;
  logIn: (userId: string) => void;
  logOut: () => void;
};

const useAuthenticationStore = create<UserAuthenticationStore>()(set => ({
  loggedUser: {
    id: '',
    name: 'Brian',
    avatar: '',
    purchasesMade: 0,
  },
  isLoggedIn: false,
  logIn: userId =>
    set(state => ({
      isLoggedIn: true,
      loggedUser: { ...state.loggedUser, name: userId },
    })),
  logOut: () =>
    set(state => ({
      isLoggedIn: false,
      loggedUser: { ...state.loggedUser, name: '' },
    })),
}));

export default useAuthenticationStore;
