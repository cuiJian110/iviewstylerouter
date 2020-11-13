<template>
    <div>
        <div >
            <button v-debounce="handleSuccess">success</button>
            <button   v-red="handleWarn">error</button>
            <button @click="handleWarn">Warn</button>
        </div>
        <div>
            <button @click="add">点击增加</button>
            <s1></s1>
        </div>
    </div>
</template>
<script>
// import mix from "@/mixins"
import s1 from "./page2_1";
function aaa() {
    console.log(this)
    console.log("aaa")
}
export default {
    // mixins: [mix],
    components: {
        s1
    },
    provide() {
        return {
            page2Instance: this,
            testValue: this.testValue,
            newFoo: this.fooObj
        }
    },
    data() {
        return {
            color: "#fff",
            backgroundColor: "#ccc",
            testValue: 90,
            fooObj: {
                v: 20
            }
        }
    },
    name: "page2",
    age: "page2 45",
    created() {
        aaa();
        console.log(this.$options)
        console.log(this.$options.age)
    },
    methods: {
        add(){
            this.fooObj.v ++
            this.testValue++
            console.log(this.testValue)
            this.$forceUpdate()
        },
        fatherMethods(value) {
            console.log("page2 methods chufa",value)
        },
        handleSuccess() {
            // this.$msg.success("success");
            console.log("adsf")
        },
        handleError() {
            // this.$msg.error("error");
        },
        handleWarn() {
            // this.$msg.warn("warn");
            console.log("warn")
            this.foo()
        },
        // foo() {
        //     console.log("children foo")
        // }
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