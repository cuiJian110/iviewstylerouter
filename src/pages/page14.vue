<template>
    <div>
        page 14
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        let routeList = [
            {path: "/pages/page13", name: "page13"},
            {path: "/pages/page14", name: "page14"}
        ]
        localStorage.setItem("routerList",JSON.stringify(routeList))
    },
    methods: {
        
        
    },
}
</script>
<style scoped>
</style>