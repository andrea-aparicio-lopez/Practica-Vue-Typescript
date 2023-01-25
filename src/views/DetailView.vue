<template>

    <h3>Aquí se monstrarán los detalles de un producto</h3>
</template>


<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'DetailView',
    props: {
        id: {
            type: Number,
            required: true,
        }
    }
})
</script>

<style scoped>

</style>