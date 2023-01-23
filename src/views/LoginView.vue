<template>
    <div class="login-box">
        <h2>Inicia sesión para acceder a la tienda</h2>
        <div class="inputs">
            <form action="post">
                <input class="email" type="email" placeholder="Correo electrónico" required>
                <input class="password" type="password" placeholder="Contraseña" required>
            </form>
        </div>
        <button type="submit">Acceder</button>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
})

</script>


<style scoped>
.login-box {
    margin: auto;
    margin-top: 100px;
    height: 400px;
    width: 500px;
    border: 2px solid rgb(88, 67, 190);
    padding: 100px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

input {
    width: 70%;
    border-radius: 5px;
    padding: 5px;
}

</style>