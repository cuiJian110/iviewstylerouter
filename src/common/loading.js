import Vue from "vue";
import loading from "./loading.vue";
const loadingConstructor = Vue.extend(loading);
const Fun = function () {
    this.instance = new loadingConstructor({
        el: document.createElement("div"),
    })
    document.body.appendChild(this.instance.$el);
}
Fun.prototype.show = function(tips="默认的提示") {
    this.instance.isShow = true;
    this.instance.tips = tips;
}
Fun.prototype.hide = function() {
    this.instance.isShow = false;
}
export default new Fun();