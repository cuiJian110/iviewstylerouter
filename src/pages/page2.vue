<template>
    <div>
        <div >
            <button v-debounce="handleSuccess">success</button>
            <button   v-red="handleWarn">error</button>
            <button @click="handleWarn">Warn</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: "#fff",
            backgroundColor: "#ccc"
        }
    },
    methods: {
        handleSuccess() {
            // this.$msg.success("success");
            console.log("adsf")
        },
        handleError() {
            // this.$msg.error("error");
        },
        handleWarn() {
            // this.$msg.warn("warn");
            console.log("warn")
        }
    },
    beforeDestroy() {
        console.log("page2 beforeDestroy")
    },
    destroyed() {
        console.log("page2 destroyed")
    }
}
</script>
<style scoped>
.test {
    height: 50px;
    min-width: 100px;
    width: auto;
}
</style>