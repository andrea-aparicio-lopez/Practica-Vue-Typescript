<template>
    <h1>Info detallada</h1>
    <div class="loading" v-if="isLoading">Cargando...</div>
    <div class="product-" v-else>
        <img :src="product.images[0]" alt="">
        <h1>{{ product.title }}</h1>
        <h3>{{ product.description }}</h3>
        <h2>{{ product.price }}</h2>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '@/composables/useProducts';


export default defineComponent({
    name: 'DetailView',
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    setup(props) {
        const { product, isLoading, fetchProductById } = useProducts()
        fetchProductById(props.id)

        return {
            product, 
            isLoading,
        }
    }
})
</script>

<style scoped>

</style>