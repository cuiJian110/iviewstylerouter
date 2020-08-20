<template>
    <div>
        <slot :datason="data">
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
                return {id: 0, name: "mo ren son", author: "zs son"}
            }
        }
    }
}
</script>
<style >

</style>