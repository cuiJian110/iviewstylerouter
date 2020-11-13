<template>
    <div>
        <div >
            2-1-1
            <Button @click="m1">2-1触发</Button>
            {{newFoo.v}} <br>
            {{page2Instance.testValue}} <br>
            {{testValue}}
        </div>
    </div>
</template>
<script>
// import mix from "@/mixins"
export default {
    // mixins: [mix],
    data() {
        return {
        }
    },
    inject: ["page2Instance","testValue","newFoo"],
    methods: {
        m1() {
            // this.aaa("2-1-1");
            // console.log(this.page2Instance.color)
            // this.page2Instance.handleSuccess();
        }
    },
    beforeDestroy() {
        console.log("page2 beforeDestroy")
    },
    destroyed() {
        console.log("page2 destroyed")
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