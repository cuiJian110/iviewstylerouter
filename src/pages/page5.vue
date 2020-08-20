<template>
    <div>
        <div class="box">
            <div class="view bb"  :class="'my_'+item.lei" v-for="item in datalist" :key="item.lei">
                {{item.content}}
            </div>
        </div>
        <div class="box1">
            <button @click="handleShow">show</button>
            <button @click="handleHide">hide</button>
        </div>
        <div class="box2">
            <button v-debounce.click="handleText1">test1</button>
            <button @click="handleText2">test2</button>
            <button @click="handleText3">test3</button>
        </div>
        <div class="box3" v-debounce.click="handleText1">sss</div>
    </div>
</template>
<script>
export default {
    // directives: {
    //     debounce: {//防抖函数指令
    //         inserted: function(el, binding) {
    //             let timer;
    //             el.addEventListener("click", () => {
    //             if (timer) {
    //                 clearTimeout(timer);
    //             }
    //             timer = setTimeout(() => {
    //             //关键点:vue 的自定义指令传递的参数binding 如果是一个函数,则通过      binding.value()来执行,通过上述示例,还可以传递比如事件, 绑定对象之类的
    //                 binding.value();
    //             }, 500);
    //             });
    //         }
    //     }
    // },
    data() {
        return {
            datalist: [
                {lei: "red", content: "neirong1"},
                {lei: "yellow", content: "neirong2"},
                {lei: "blue", content: "neirong3"}
            ]
        }
    },
    created() {
    },
    methods: {
        handleShow() {
            this.$confirm({
                title: "woshititle",
                msg: "msg",
                btn: {
                    ok: "oookkk",
                    cancel: "oookkkcancel"
                }
            }).catch(err => {
                console.log("cuole err",err)
            }).then(res =>{
                console.log("zhi xing ok",res)
            })
        },
        handleHide() {
        },
        handleText1() {
            console.log("111")
        },
        handleText2() {
            console.log("222")
        },
        handleText3() {
            console.log("333")
        }
    },
    beforeDestroy() {
        console.log("page5 beforeDestroy")
    },
    destroyed() {
        console.log("page5 destroyed")
    },
    filters: {
        toInt(val) {
            return parseInt(val);
        }
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