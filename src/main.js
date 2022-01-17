import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "./firebase/init";
// import VueChatScroll from 'vue-chat-scroll'

// Vue.use(VueChatScroll)

createApp(App).use(store).use(router).mount("#app");
