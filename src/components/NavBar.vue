<template>
    <nav class="navbar">
        <div class="home-page">
            <!-- <span>Shop icon</span> -->
            <router-link to="/">Fake Shop</router-link>
        </div>
        <div class="links">
            <ul>
                <li>
                    <router-link to="/products">Productos</router-link>
                </li>
                <li>
                    <router-link to="/profile">Perfil</router-link>
                </li>
            </ul>
        </div>
        <div class="logout">
            <button @click="logout" >
            <!-- <button @click="logout" v-if="logedIn"> -->
                Cerrar sesión
                <!-- <span>Log out icon</span> -->
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';


export default defineComponent({
    name: 'NavBar',
    setup() {
        let logedIn = ref<boolean>(false) 
        const token = localStorage.getItem('accesToken')
        if(token) {
            logedIn = ref<boolean>(true)
        }

        return {
            logedIn,
            logout: () => {
                localStorage.removeItem('accessToken')
                router.push({ name: 'home' })
            }
        }
    },

})
</script>

<style scoped>
nav {
    height: 30px;
    width: auto;
    background-color: rgb(88, 67, 190);
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* justify-self: center; */
    list-style: none;
}

li {
    padding: 1rem;
}

a {
    color: white;
    text-decoration: none;
    transition: 0.25s;
    font-weight: bold;
}

a:visited {
    color: white;
}

a:hover {
    color: rgb(120, 226, 179);
    cursor: pointer;
}

.home-page a:hover {
    color: white;
}

.logout {
    width: max-content;
}
</style>

