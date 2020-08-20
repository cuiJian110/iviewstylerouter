<template>
    <div>
        <div>
            son7_1
            <div>
                {{msg}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        msg: {
            type: String,
            default: "9999"
        }
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    filters: {
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