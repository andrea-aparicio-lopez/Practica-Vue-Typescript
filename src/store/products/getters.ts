import { GetterTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";


const getters: GetterTree<IProductsState, IState> = {
    getProducts(state) {
        return state.products;
    },
    getIsLoading(state) {
        return state.isLoading;
    },
    getProduct(state) {
        return state.selectedProduct;
    },
    getFilteredProducts(state) {
        return state.products;
    }
};

export default getters