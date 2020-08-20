<template>
    <div v-if="isShow">
        {{tips}}...
    </div>
</template>
<script>
export default {
    data() {
        return {
            tips: "正在请求",
            isShow: false,
        }
    }
}
</script>
<style scoped>

</style>