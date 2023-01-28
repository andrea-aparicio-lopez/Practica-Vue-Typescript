<template>
    <div class="search">
        <input type="text" placeholder="Búsqueda de productos">
        <button class="search-button">
            <svg    class="bi bi-search-heart" viewBox="0 0 16 16">
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
            </svg>
            <!-- &#xF787; -->
            <!-- <i class="bi bi-search-heart"></i> -->
        </button>
    </div>

    <div class="product-section">
        <div class="loading" v-if="isLoading">Cargando...</div>
        <div class="product-list" v-else>
            <ProductItem v-for="product in products"
            :key="product.id"
            :product="product"
            @goDetail="goDetail"
            />

        </div>
    </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composables/useProducts';
import products from '@/store/products';
import { useRouter } from 'vue-router';
import { Product } from '@/models/product';

export default defineComponent({
    name: 'ProductsView',
    components: {
        ProductItem
    },
    // computed: {
    //     limitProducts() {
    //          
    //     }
    // },
    setup() {
        const { products, fetchProducts, isLoading } = useProducts();
        const router = useRouter();

        fetchProducts();

        return {
            products,
            // limit: 10, 
            isLoading,
            goDetail: (product: Product) => {router.push({name: 'detail', params: {id: product.id}})}
        };

    }
})

</script>

<style scoped>
button > svg {
    width: 1rem;
    height:1rem;
}

button:hover {
    cursor: pointer;
}
.search {
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem 0;
}

.search input {
    width: 70%;
}
.product-list {
    max-width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    /* grid-auto-flow: row; */
    justify-content: center;
    gap: 1rem
}


</style>