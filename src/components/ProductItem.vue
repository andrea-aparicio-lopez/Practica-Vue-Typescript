<template>
    <div class="product-item">
            <div class="title">{{ product.title }}</div>
            <div class="description">{{ product.description }}</div>
            <div class="price">{{ product.images[0] }}</div>

    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@/models/product'; 


export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
    },
});
</script>


<style scoped>


</style>