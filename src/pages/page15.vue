<template>
    <div>
        page 15
        <div>
            <button v-for="(item,index) in comList" :key="index" @click="handleGoCom(item)">{{item}}</button>
        </div>
        <component :is="isWhich"></component>
        <!-- <keep-alive>
            <component :is="isWhich"></component>
        </keep-alive> -->
    </div>
</template>
<script>
// 引入所有需要的动态组件
const requireComponent = require.context(
  "./page15", //组件所在目录的相对路径
  true, //是否查询其子目录
  /\w+\.vue$/ //匹配基础组件文件名的正则表达式
);
var comObj = {};
requireComponent.keys().forEach(fileName => {
  // 获取文件名
  var names = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 若该组件是通过"export default"导出的，优先使用".default"，否则退回到使用模块的根
  comObj[names] = componentConfig.default || componentConfig;
});
export default {
    components: {
        ...comObj
    },
    data() {
        return {
            isWhich: "",
            comList: ["ma","mb","mc"]
        }
    },
    mounted() {
    },
    methods: {
        handleGoCom(com) {
            console.log(com)
            this.isWhich = com;
        }
        
        
    },
}
</script>
<style scoped>
</style>