<template>
    <div>
        testRender
        <div class="son">
            <!-- <son1 level="3" :data="myData"></son1> -->
            <!-- <render :render="myRender"></render> -->
            <son2></son2>
        </div>
    </div>
</template>
<script>
import son1 from "@/testCom/son1";
import son2 from "@/testCom/son2";
import render from "@/testCom/render";
export default {
    components: {
        son1,
        son2,
        render
    },
    watch: {
        type: {
            handler(n,o) {
                console.log(n,o)
            },
            deep: true
        }
    },
    computed: {
        com_type() {
            console.log(this.a1, this.a2)
            return this.a1 + this.a2;
        }
    },
    data() {
        return {
            myData: {
                title: "titletile",
                render: (h,obj) => {
                    console.log(obj)
                    return h("div",obj.data.name)
                }
            },
            myRender: (h,obj) => {

                return h("div","传入的")
            }
        }
    },
    methods: {
    },
    beforeDestroy() {
        console.log("page1 beforeDestroy")
    },
    destroyed() {
        console.log("page1 destroyed")
    }
}
</script>
<style scoped>

</style>