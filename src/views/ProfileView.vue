<template>
    <div class="body">
        <div class="loading" v-if="isLoading">Cargando...</div>
        <div class="profile" v-else>
            <UserProfile 
            :key="user.id"
            :user="user"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserProfile from '@/components/UserProfile.vue';
// import user from '@/store/user';
import useUser from '@/composables/useUser';

// import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'ProfileView',
    components: {
        UserProfile,
    },
    setup() {
        const { user, isLoading, fetchUser } = useUser();
        // const router = useRouter()
        fetchUser();
        return {
            user,
            isLoading,
        }
    }
})

</script>

<style scoped>
.body {
    background-color: rgb(236, 239, 241);
    height: 100vh;
    display: flex;
}

.profile {
    margin: auto;
    margin-top: 30px;
}

</style>