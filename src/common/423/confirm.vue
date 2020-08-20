<template>
    <div v-if="isShow">
        <div class="title">title: {{textObj.title}}</div>
        <div class="content">{{textObj.msg}}</div>
        <div class="footer">
            <button @click="ok()">{{textObj.btn.ok}}</button>
            <button @click="cancel()">{{textObj.btn.cancel}}</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: true,
            textObj: {
                title: "title",
                msg: "content",
                btn: {
                    ok: "确认",
                    cancel: "取消"
                }
            }
        }
    },
    methods: {
        ok() {

        },
        cancel() {

        }
    }
}
</script>