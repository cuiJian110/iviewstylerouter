<template>
    <div>
        <myHeader></myHeader>
        <div class="myContent">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import myHeader from "@/commonComponents/myHeader";
export default {
    components: {
        myHeader,
    },
    data() {
        return {
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        
        
    },
}
</script>
<style scoped>
</style>