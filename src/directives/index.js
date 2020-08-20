import Vue from 'vue';
Vue.directive("debounce", {
    inserted: function(el, binding) {
        let timer;
        el.addEventListener("click", () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
        //关键点:vue 的自定义指令传递的参数binding 如果是一个函数,则通过      binding.value()来执行,通过上述示例,还可以传递比如事件, 绑定对象之类的
            binding.value();
            }, 200);
        });
    }
})
Vue.directive("red", {
    inserted: function(el, binding) {
        console.log(el);
        // console.log(binding.value)
        el.addEventListener("click",function() {
            console.log("directive chufale")
            binding.value();
        })
        
        el.style.color = "red"
    }
})