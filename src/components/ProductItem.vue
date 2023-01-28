<template>
    <div class="product-item" @click="$emit('goDetail', product)">
            <div class="title">{{ product.title }}</div>
            <div class="image">
                <img :src="product.images[0]" :alt="product.title">
            </div>
            <div class="description">{{ product.description }}</div>
            <div class="price">{{ product.price }}€</div>

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
:root {
    --main-color: rgb(88, 67, 190);
}
.product-item {
    width: 350px;
    height: max-content;
    border: 1px solid black;
    border-radius: 5px;
    display: grid;
    grid-template-areas: 
    "title title"
    "img info"
    "img price";
    margin-bottom: 1rem;
}

.product-item:hover {
    cursor: pointer;
}

.title {
    grid-area: title;
    height: 20px;
    padding: 0.5rem;
    font-weight: bold;
    background-color: rgb(119, 101, 207);
    color: white;
}

.image {
    grid-area: img;
}
.image > img {
    width: 175px;
    /* width: 150px; */
    height: 150px;
    object-fit: cover;
    /* height: auto; */
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 15px;
    justify-self: left;
}

.description {
    grid-area: info;
    height: min-content;
    padding: 0.5rem 0.5rem 0 0;
    text-align: left;
}

.price {
    grid-area: price;
    align-self: end;
    justify-self: center;
    padding: 0.5rem 0 0.5rem 0;
    /* margin-top: auto; */
    /* padding: 0rem 0 0.5rem 0; */
    font-weight: bold;
}

</style>