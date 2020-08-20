// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import myModal from './common/myModal'
Vue.component("mymodal", myModal)
// import msg from "./common/msg";
// Vue.prototype.$msg = msg;
import confirm from "./common/423/confirm";
Vue.prototype.$confirm = confirm;
import 'vue-orgchart/dist/style.min.css'
import "@/directives"
Vue.config.productionTip = false
import Vue2OrgTree from 'vue2-org-tree'
Vue.use(Vue2OrgTree)
import OrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
Vue.use(OrgTree)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
