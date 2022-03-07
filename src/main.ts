import './lib/pick.scss'
import "./index.scss";
import "./lib/column.scss"
import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./router"
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'
import  * as components  from "./lib/index";

const app = createApp(App);
app.config.globalProperties.openDialog=components.openDialog
app.use(router);
app.mount("#app");
app.component("Button",components.Button);
app.component("Switch",components.Switch);
app.component("Tabs",components.Tabs);
app.component("Tab",components.Tab);
app.component("Dialog",components.Dialog);
app.component(components.Button);
app.component("Markdown",Markdown)

