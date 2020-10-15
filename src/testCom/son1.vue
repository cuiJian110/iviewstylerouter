<template>
    <div>
        <render v-if="data.render" :render="data.render" :data="data"></render>
        <div v-else>默认的son1</div>
    </div>
</template>
<script>
import render from "./render";
export default {
    components: { render },
    props: {
        data: {
            type: Object,
        }
    }
}
</script>