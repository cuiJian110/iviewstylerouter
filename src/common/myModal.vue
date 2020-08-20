<template>
    <div class="mask" @click="$emit('close')">
        <div class="content" @click.stop="handlePrevent">
            <div class="myheader">
                <div class="title">
                    title
                </div>
                <div class="close" @click="$emit('close')">
                    关闭
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.m_drag()
    },
    methods: {
        handlePrevent() {
            return;
        },
        m_drag() {
            const mask = document.querySelector(".mask");
            const content = document.querySelector(".content");
            const title = document.querySelector(".myheader");
            title.addEventListener("mousedown",function(e) {
                // 获取鼠标在元素中的位置
                let x = e.pageX - content.offsetLeft;
                let y = e.pageY - content.offsetTop;
                mask.addEventListener("mousemove",move);
                function move(e) {
                // 获取定位的left top
                let left = e.pageX - x;
                let top = e.pageY - y;
                content.style.left = left + "px";
                content.style.top = top + "px";
                }
                title.addEventListener("mouseup", function(e) {
                mask.removeEventListener("mousemove",move)
                })
            })
        }
    }
}
</script>
<style scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
}
.content {
    width: 300px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    overflow: hidden;
}
.myheader {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    cursor: move;
}
.close {
    cursor: pointer;
}
</style>