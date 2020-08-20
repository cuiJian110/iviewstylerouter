import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export let routers = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: () => import("@/pages/login")},
  { path: "/page",name: "page", component: () => import("@/pages/page"), children: [
    // 有三种情况 1、没有左侧菜单 2、有左侧菜单 3、固定死的（个人中心。。。。。。）前两种动态生成，最后一种写死
  ]},
  // { path: "/pages/page1", name: "page1", component: () => import("@/pages/page1") },
  // { path: "/pages/page2", name: "page2", component: () => import("@/pages/page2") },
  // { path: "/pages/page3", name: "page3", component: () => import("@/pages/page3") },
  // { path: "/pages/page4", name: "page4", component: () => import("@/pages/page4") },
  // { path: "/pages/page5", name: "page5", component: () => import("@/pages/page5") },
  // { path: "/pages/page7", name: "page7", component: () => import("@/pages/page7") },
  // { path: "/pages/page8", name: "page8", component: () => import("@/pages/page8") },
  // { path: "/pages/page9", name: "page9", component: () => import("@/pages/page9") },
  // { path: "/pages/page10", name: "page10", component: () => import("@/pages/page10") },
  // { path: "/pages/page11", name: "page11", component: () => import("@/pages/page11") },
  // { path: "/pages/page12", name: "page12", component: () => import("@/pages/page12") }
]
const router = new Router({
  routes: routers
})
const modulesFiles = require.context("@/pages", true, /\.vue$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});
var getLastUrl = (str, yourStr) => str.slice(str.lastIndexOf(yourStr))//取到浏览器出现网址的最后"/"出现的后边的字符
router.beforeEach((to, from, next) => {
  if(from.name === null) {
    console.log('666 执行了么')
    if(localStorage.getItem('routerList')) {
      const newMenuList = JSON.parse(localStorage.getItem('routerList'))
      newMenuList.forEach(item => {
        router.options.routes.forEach(i => {
            if(i.name === "page") {
                i.children.push({
                    path: item.path, 
                    name: item.name,
                    component: modules[item.name]
                })
            }
        })
      })
      router.addRoutes(router.options.routes)
      localStorage.removeItem('routerList')
      const path = window.location.hash.split('/')[2]
      console.log(path);
      newMenuList.forEach(item => {
        if(item.path.includes(path)) {
          router.replace({
            name: item.name
          })
        }
      })
    }
  }
  next()
})



export default router
