<template>
    <div>
        <a href="https://www.cnblogs.com/wangxiaoer5200/p/13367635.html">render 函数详解</a>
        <br>
        <a href="https://www.cnblogs.com/zpxm/p/11060086.html">vue组件递归调用</a>
        <!-- <testson1></testson1> -->
        <div class="testson2">
            <!-- <testson2></testson2> -->
        </div>
        <div class="testTree">
            <!-- <testTree 
                v-for="(item,index) in rootData"
                :key="index"
                :data="item"
                :childrenKey="index"
            >
            </testTree> -->
        </div>
    </div>
</template>
<script>
// import { directive } from 'vue/types/umd'
// import testson1 from "../testCom/test";
// import testson2 from "../testCom/test2";
// import testTree from "../testCom/testTree"
export default {
    components: {
        // testson1,
        // testson2,
        // testTree
    },
    data() {
        return {
            rootData: [
                {name: "name1", children: [
                    {name: "name1_1",children: [
                        {name: "name1_1_1",children: [
                            {name: "name1_1_1_1",children: []},
                            {name: "name1_1_1_2",children: []},
                        ]}
                    ]},
                    {name: "name1_2",children: []}
                ]},
                {name: "name2", children: []},
                // {name: "name3", children: []}
            ]
        }
    },
    mounted() {
    },
    methods: {
        getDiv() {
            return (
                <div>
                    render 函数得到的
                </div>
            )
        }
    },
}
</script>
<style scoped>
</style>