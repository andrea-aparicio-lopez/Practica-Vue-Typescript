<template>
    <div class="login-box">
        <h2>Inicia sesión para acceder a la tienda</h2>
        <div class="login-data">
            <form v-on:submit.prevent="login" action="post">
                <input class="email" type="email" placeholder="Correo electrónico" v-model="email" required>
                <input class="password" type="password" placeholder="Contraseña" required>
                <button type="submit">Acceder</button>
            </form>
        </div>
    </div>

</template>

<script lang="ts">
import router from '@/router';
import login from '@/router/login';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    components: {
        login
    },
    methods: {
        // if(login) {
        //     router.push({ name: 'products' })
        // },
        return: {
            login(email: string, password: string)
        }
    }

})

</script>


<style scoped>
.login-box {
    margin: auto;
    margin-top: 100px;
    height: 350px;
    width: 500px;
    border: 2px solid rgb(88, 67, 190);
    padding: 100px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 75px;
    align-items: center;
}

input {
    width: 250px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

.login-data form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>