<template>
    <div>
        <div v-if='isShow' class="test" :style="{color: color, background: backgroundColor}">
            {{tips}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: "#fff",
            backgroundColor: "#ccc",
            tips: "",
            isShow: false,
        }
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