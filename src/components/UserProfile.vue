<template>
    <div class="profile">
        <div class="avatar" :style="`background-image: url(${user.avatar})`">
        <img :src="user.avatar" :alt="user.name">    
        </div>
        <div class="name">{{ user.name }}</div>
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
}

.avatar {
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    background-size: cover;
}
.avatar > img {
    /* object-fit: contain; */
   /* width: 100%;
   height: auto; */
}
</style>