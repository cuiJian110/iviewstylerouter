<template>
    <div class="myHeader">
        myHeader 
    </div>
</template>
<script>
// import {routers} from "@/router";
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
            headerRouterList: [
                {moduleId: "1",moduleName: "hr仪表盘",modulePath: "/panel"},
                {moduleId: "2",moduleName: "组织发展云",modulePath: "/organization"},
                {moduleId: "3",moduleName: "牛人猎聘云",modulePath: "/cooperated"},
                {moduleId: "4",moduleName: "hr工具云",modulePath: "/tool"}
            ],
            hrpanel: [
                {menuType: "C", menuName: "查看", routeName: "",nullroutePath: "/panel/info"}
            ],
            organization: [
                {menuType: "M", menuName: "HR诊断", routeName: "",nullroutePath: "/organization/diagnose"},
                {menuType: "M", menuName: "顶层设计", routeName: "",nullroutePath: "/organization/topDesign"},
                {menuType: "M", menuName: "组织设计", routeName: "",nullroutePath: "/organization/design"}
            ],
            
            niurenList: [

            ],
            tool: [
                {menuType: "M", menuName: "资源库", routeName: "",nullroutePath: "/tool/resource"}
            ],
        }
    },
    created() {
        // let routers = [
        //     { path: "/", redirect: "/login" },
        //     { path: "/login", name: "login", component: () => import("@/pages/login")},
        //     { path: "/page", name: "page", component: () => import("@/pages/page"), children: [
        //         // 有三种情况 1、没有左侧菜单 2、有左侧菜单 3、固定死的（个人中心。。。。。。）前两种动态生成，最后一种写死
        //     ]},
        // ]
        console.log(this.$router.options.routes)
        let routeList = [
            {path: "/page/page1", name: "page1"},
            {path: "/page/page2", name: "page2"},
            {path: "/page/page3", name: "page3"},
            {path: "/page/page4", name: "page4"},
            {path: "/page/page5", name: "page5"},
            {path: "/page/page15", name: "page15"}
        ]
        localStorage.setItem("routerList",JSON.stringify(routeList))
        routeList.forEach(item => {
            this.$router.options.routes.forEach(i => {
                // console.log(i)
                if(i.name === "page") {
                    i.children.push({
                        path: item.path, 
                        name: item.name,
                        component: modules[item.name]
                    })
                }
            })
            
        })
        this.$router.addRoutes(this.$router.options.routes)
        console.log(this.$router.options.routes)
    },
    mounted() {
    },
    methods: {
        
        
    },
}
</script>
<style scoped>
.myHeader {
    height: 50px;
    line-height: 50px;
}
</style>