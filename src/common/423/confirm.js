import Vue from 'vue';
import confirm from './confirm.vue';
const conConstructor = Vue.extend(confirm);
const fun = function(obj) {
    return new Promise((reslove, reject) => {
        let conInstance = new conConstructor({
            el: document.createElement("div")
        })
        document.body.appendChild(conInstance.$el)
        console.log(conInstance.isShow)
        console.log(conInstance.textObj)
        const res = {code: 200, msg: "success"};
        const err = {code: 500, msg: "false"};
        conInstance.textObj = { ...conInstance.textObj, ...obj}
        conInstance.ok = function (){
            console.log("ok")
            reslove(res)
            conInstance.isShow = false
        }
        conInstance.cancel = function() {
            console.log("cancel")
            reject(err)
            conInstance.isShow = false
        }
    })
}
export default fun;