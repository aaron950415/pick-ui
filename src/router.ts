import { createRouter, createWebHashHistory } from "vue-router";
import Doc from "./views/Doc.vue";
import Home from "./views/Home.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from './components/Markdown.vue'
import BasicsDemo from './components/columns/BasicsDemo.vue'
import intro from './markdown/intro.md'
import basicUsage from './markdown/basicUsage.md'
import install from './markdown/install.md'
import { h } from "vue";
const history = createWebHashHistory();
const md=string=>h(Markdown,{content:string,key:string})
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: md(intro) },
        { path: "basicUsage", component: md(basicUsage)},
        { path: "install", component: md(install) },
        { path: "", redirect:'/doc/intro' },
        { path: "switch", component: SwitchDemo },  
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "basics", component: BasicsDemo },
      ],
    },
  ],
});
