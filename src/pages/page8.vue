<template>
    <div>
        <div class="fa">
            <span class="test">阿的双方各得三阿的双方各得三阿的双方各得三阿的双方各得三阿的双方各得三阿的双方各得三阿的双方各得三</span>
        </div>
        <div class="jiantou" v-if="isChaochu">&gt;&gt;</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isChaochu: false,
        }
    },
    mounted() {
        this.getTestWidth();
    },
    methods: {
        getTestWidth() {
            let width = document.querySelector(".test").offsetWidth;
            this.isChaochu = width > 300;
        }
    },
}
</script>
<style scoped>
.jiantou {
    float: left;
}
.fa {
    width: 300px;
    float: left;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
</style>