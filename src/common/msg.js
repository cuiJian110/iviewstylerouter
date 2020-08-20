import Vue from "vue";
import msg from "./msg.vue";
const MsgConstructor = Vue.extend(msg);
const MsgFun = function() {
    this.msgInstance = new MsgConstructor({
        el: document.createElement("dev")
    })
    document.body.appendChild(this.msgInstance.$el)
}
MsgFun.prototype.init = function(tips="default", backgroundColor) {
    this.msgInstance.isShow = true;
    this.msgInstance.backgroundColor = backgroundColor;
    this.msgInstance.tips = tips;
    setTimeout(() => {
        this.msgInstance.isShow = false
    },2000)
}
MsgFun.prototype.success = function(tips="default") {
    this.init(tips, "skyblue")
}
MsgFun.prototype.error = function(tips="default") {
    this.init(tips, "blue")
}
MsgFun.prototype.warn = function(tips="default") {
    this.init(tips, "red")
}
export default new MsgFun();