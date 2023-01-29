import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

 

 const actions: ActionTree<IProductsState, IState> = {
    // Obtener todos los productos
    async fetchProducts({commit}) {
        commit("setIsLoading", true);

        console.log('por aqui pasa')
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>('/products');

        commit('setIsLoading', false);
        commit('setProducts', data)
    },

    // Obtener un producto por Id
    async fetchProductById({commit}, productId: number) {
        commit('setIsLoading', true);

        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);

        commit('setIsLoading', false);
        commit('setSelectedProduct', data); 
    },

    // Obtener productos filtrando por título
    async fetchFilteredProducts({commit}, filter: string) {
        commit('setIsLoading', true)

        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(`/products?title=${filter.trim().toLowerCase()}`)

        commit('setIsLoading', false)
        commit('setFilteredProducts', data)
    }

 }

 export default actions;