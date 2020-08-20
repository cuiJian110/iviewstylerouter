<template>
    <div class="sonson">
        <div v-if="data.children && data.children.length !== 0">
            name: {{data.name}}
            <div class="son" >
                <testTree 
                    v-for="(item,index) in data.children"
                    :key="index"
                    :data="item"
                    :childrenKey="index"
                >
                </testTree>
            </div>
        </div>
        <span v-else>
            <span>name: {{data.name}}</span>
            aaa
        </span>
    </div>
</template>
<script>
export default {
    name: "testTree",
    props: {
        msg: {
            type: String,
            default: "9999"
        },
        data: {
            default: () => {
                return {}
            },
            type: Object
        },
        childrenKey: {

        }
    },
    computed: {
        children() {
            return this.data[this.childrenKey];
        }
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped>
.son {
    padding-left: 20px;
}
</style>