<template>
    <div>
        page 12
    </div>
</template>
<script>
const modulesFiles = require.context("@/pages", true, /\.vue$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});
export default {
    data() {
        return {
        }
    },
    created() {
        let routeList = [
            {path: "/pages/page13", name: "page13"},
            {path: "/pages/page14", name: "page14"}
        ]
        localStorage.setItem("routerList",JSON.stringify(routeList))
        routeList.forEach(item => {
            this.$router.options.routes.push({
                path: item.path, 
                name: item.name,
                component: modules[item.name]
            })
        })
        this.$router.addRoutes(this.$router.options.routes)
    },
    mounted() {
    },
    methods: {
        
        
    },
}
</script>
<style scoped>
</style>