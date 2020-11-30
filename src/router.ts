import { createRouter, createWebHashHistory } from "vue-router";
import Doc from "./views/Doc.vue";
import Home from "./views/Home.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Intro from "./views/Intro.vue";
import GetStart from "./views/GetStart.vue";
import Install from "./views/Install.vue";
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: Intro },
        { path: "get-start", component: GetStart },
        { path: "install", component: Install },
        { path: "", component: DocDemo },
        { path: "switch", component: SwitchDemo },  
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
