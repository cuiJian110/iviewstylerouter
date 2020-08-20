<template>
    <div>
        <slot :data11="data">
            <li>id:{{data.id}} name: {{data.name}} author:{{data.author}}</li>
        </slot>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {id: 0, name: "mo ren", author: "zs"}
            }
        }
    }
}
</script>
<style >

</style>