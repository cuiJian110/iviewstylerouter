<template>
    <div>
        page3
        <!-- <test v-for="item in datalist" :key="item.id" :data="item">
            <template slot-scope='{data11}'>
                <div>
                    id_: {{data11.id}} name: {{data11.name}}
                    <testson v-for="item_ in data11.children" :key="item_.id" :data="item_">
                        <template slot-scope="{datason}">
                            <div style="color: red">
                                {{datason.name}}
                            </div>
                        </template>
                    </testson>
                </div>
            </template>
        </test> -->
    </div>
</template>
<script>
// import test from "../components/test"
// import testson from "../components/test_son"
export default {
    components: {
        // test,testson
    },
    data() {
        return {
            datalist: [
                {id: 1, name: "shujian1", author: "zs1", children: [
                    {id: 1,name: "shujian1_1", author: "zs1_1"},
                    {id: 2,name: "shujian1_2", author: "zs1_2"}
                ]},
                {id: 2, name: "shujian2", author: "zs2", children: [
                    {id: 1,name: "shujian2_1", author: "zs2_1"},
                    {id: 2,name: "shujian2_2", author: "zs2_2"}
                ]},
                {id: 3, name: "shujian3", author: "zs3", children: [
                    {id: 1,name: "shujian3_1", author: "zs3_1"},
                    {id: 2,name: "shujian3_2", author: "zs3_2"}
                ]}
            ]
        }
    },
    beforeDestroy() {
        console.log("page3 beforeDestroy")
    },
    destroyed() {
        console.log("page3 destroyed")
    }
}
</script>
<style scoped>

</style>