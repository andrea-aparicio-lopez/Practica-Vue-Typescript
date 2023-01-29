<template>
    <div class="login-box">
        <h2>Inicia sesión para acceder a la tienda</h2>
        <div class="login-data">
            <form v-on:submit.prevent="login" action="post">
                <input class="email" type="email" placeholder="Correo electrónico" v-model="email" required>
                <input class="password" type="password" placeholder="Contraseña" v-model="password" required>
                <button type="submit">Acceder</button>
            </form>
        </div>
        <div class="error-alert" v-if="error">{{ error_msg }}</div>
    </div>

</template>

<script lang="ts">
import router from '@/router';
// import logIn from '@/router/login';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            error: false,
            error_msg: '',
        }
    },
    methods: {
        async login() {
            let data = {
                "email": this.email,
                "password": this.password
            }
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
                console.log(response)
                localStorage.setItem('accessToken', response.data.access_token)    
                console.log('Se ha guardado el token:', response.data.access_token )

                router.push({ name: 'products' })
            } catch(err) {
                console.log(err);
                this.error = true;
                this.error_msg = `${err}`
            }

            // axios.post('https://api.escuelajs.co/api/v1/auth/login', data).then((response) => {
            //     console.log(response)
            //     if(response.data.statusCode === 200) {
            //         localStorage.setItem('accessToken', response.data.access_token)    
            //         console.log('Se ha guardado el token:', response.data.access_token )
            //     }else {
            //         this.error = true;
            //         this.error_msg = response.data.message;
            //     }
            // })
        }
    }

})

</script>


<style scoped>
.login-box {
    margin: auto;
    margin-top: 40px;
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

.error-alert {
    background-color: rgb(249, 158, 158);
    color: white;
    padding: 1rem;
}
</style>