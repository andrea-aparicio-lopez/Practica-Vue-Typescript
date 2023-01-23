<template>
    <div class="user-info">
        <h2>Aquí se mostrará la información del perfil</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProfileView',
})

</script>

<style scoped>
.user-info {
    width: 400px;
    height: 300px;
    border: 3px solid rgb(88, 67, 190);
    border-radius: 15px;
    margin: auto;
    margin-top: 100px;
}

</style>