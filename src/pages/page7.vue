<template>
    <div>
        <div class="box">
            <Button @click="handleShow">弹框</Button>
            <Button @click="handleChangeMsg">change msg</Button>
            {{msg}}
        </div>
        <mymodal v-if="modal1" @close="modal1 = false">
            <son71 :msg="msg"/>
        </mymodal>
    </div>
</template>
<script>
import son7_1 from "./son7_1";
export default {
    components: {
        son71: son7_1
    },
    data() {
        return {
            modal1: false,
            msg: "父组件值"
        }
    },
    created() {
    },
    methods: {
        handleShow() {
            this.modal1 = true;
        },
        handleChangeMsg() {
            this.msg = "改变后的父组件值"
        }
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    filters: {
        toInt(val) {
            return parseInt(val);
        }
    }
}
</script>
<style scoped>
.my_red {
    color: red;
}
.my_yellow {
    color: yellow;
}
.my_blue {
    color: blue;
}
</style>