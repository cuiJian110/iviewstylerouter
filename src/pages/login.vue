<template>
    <div>
        login page

        <Button @click="handleLogin">login</Button>
    </div>
</template>
<script>
export default {
    watch: {
        type: {
            handler(n,o) {
                console.log(n,o)
            },
            deep: true
        }
    },
    computed: {
        com_type() {
            console.log(this.a1, this.a2)
            return this.a1 + this.a2;
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleLogin() {
            this.$router.push({
                name: "page"
            })
        }
    },
    beforeDestroy() {
        console.log("page1 beforeDestroy")
    },
    destroyed() {
        console.log("page1 destroyed")
    }
}
</script>
<style scoped>

</style>