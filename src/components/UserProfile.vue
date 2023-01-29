<template>
    <div class="profile">
        <div class="avatar" :style="`background-image: url(${user.avatar})`">
        <img :src="user.avatar" :alt="user.name">    
        </div>
        <h3 class="name">{{ user.name }}</h3>
        <div class="user-info">
            <span>Información del perfil:</span>
            <div class="email">Email: {{ user.email }}</div>
            <div class="role">Rol: {{ user.role }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '@/models/user';

export default defineComponent({
    // name: 'UserProfile',
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
})
</script>


<style scoped>
.profile {
    background-color: white;
    box-shadow: 5px 10px 10px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    padding: 2rem;
}

.avatar {
    width: 15rem;
    height: 15rem;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    background-size: cover;
    /* margin: 2rem; */
    margin-bottom: 1rem;
}
.avatar > img {
    display: none;
    margin: 0 auto;
    margin-left: -25%;
    height: 100%;
    width: auto;
}

.name {
    font-weight: bold;
}

.user-info {
    display: flex;
    flex-direction: column;
    height: 8rem;
    justify-content: space-around;
    align-items: flex-start;
    background-color: rgb(230, 223, 255);
    border-radius: 10px;
    padding: 0 1rem;
    background-position: center;
}

.user-info > span {
    font-weight: bold;
}
</style>