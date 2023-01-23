<template>
    <input class="search-bar" type="text" placeholder="Búsqueda de productos">
    <br>
    <h2>Aquí se listarán los productos</h2>

</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductsView',
})

</script>

<style scoped>
* {
    align-content: center;
}
</style>