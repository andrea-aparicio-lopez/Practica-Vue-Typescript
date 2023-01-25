import { Module } from "vuex";
import { IProductsState } from "./state";


const productsModule: Module<IProductsState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};