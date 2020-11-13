<template>
    <div>
        <div >
            2-1
            <Button @click="m1">2触发</Button>
        </div>
        <div>
            <s1></s1>
        </div>
    </div>
</template>
<script>
// import mix from "@/mixins"
import s1 from "./page2_1_1";
export default {
    // mixins: [mix],
    components: {
        s1
    },
    data() {
        return {
        }
    },
    methods: {
        m1() {
            this.$parent.fatherMethods("2-1");
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