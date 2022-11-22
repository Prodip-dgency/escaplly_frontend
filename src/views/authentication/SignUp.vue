<template>
    <div class="sign-up">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitFrom">
            <input type="email" name="email" v-model="email">
            <input type="password" name="password" v-model="password">
            <button type="submit">Sign up</button>
        </form>
    </div>
  
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        console.log(this.$store.state.token)
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submitFrom(e) {
            const formData = {
                email : this.username,
                password: this.password
            }
            axios
                .post('/api/v1/users', formData)
                .then(response => {
                    this.$router.push('/log-in')
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    

}
</script>

<style>

</style>