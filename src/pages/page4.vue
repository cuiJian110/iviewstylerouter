<template>
    <div>
        <div >
            <button @click="show">show</button>
            <button @click="handleError">error</button>
            <button @click="handleWarn">Warn</button>
        </div>
        <div class="test">
            <Select v-model="cityId" style="width:200px">
                <Option v-for="item in cityList" :value="item.id | toInt" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: "#fff",
            backgroundColor: "#ccc",
            cityList: [
                {
                    value: 'New Yor1',
                    label: 'New Yor1',
                    id: "1"
                },
                {
                    value: 'New Yor2',
                    label: 'New Yor2',
                    id: "2"
                },
                {
                    value: 'New Yor3',
                    label: 'New Yor3',
                    id: "3"
                },
            ],
            cityId: "",
        }
    },
    methods: {
        show() {
            // console.log(typeof(this.cityId))
            console.log(this.cityId.constructor === Number)
            // this.$loading.show();
            // setTimeout(() => {
            //     this.$loading.hide()
            // }, 2000);
        },
        handleError() {
            this.$msg.error("error");
        },
        handleWarn() {
            this.$msg.warn("warn");
        }
    },
    beforeDestroy() {
        console.log("page4 beforeDestroy")
    },
    destroyed() {
        console.log("page4 destroyed")
    },
    filters: {
        toInt(val) {
            return parseInt(val);
        }
    }
}
</script>
<style scoped>
.test {
    height: 50px;
    min-width: 100px;
    width: auto;
}
</style>