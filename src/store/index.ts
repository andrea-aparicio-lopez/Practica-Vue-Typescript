import { User } from '@/models/user';
import { createStore } from 'vuex'
import productsModule from './products'

export interface IState {
  authUser: User | null;

}

export default createStore<IState>({
  state: {
    authUser: null,
  },
  getters: {
    profile(state) {
      return state.authUser
    }
  },
  mutations: {
    logIn(state, user: User) {
      state.authUser = user;
    }
  },
  actions: {
  },
  modules: {
    products: productsModule,
  }
})
