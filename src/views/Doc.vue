<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>Document</h2>
        <ol>
          <li><router-link to="/doc/intro">Introdaution</router-link></li>
          <li><router-link to="/doc/install">Install</router-link></li>
          <li><router-link to="/doc/get-started">Get started</router-link></li>
        </ol>
        <h2>Component</h2>
        <ol>
          <li><router-link to="/doc/switch">Swich</router-link></li>
          <li><router-link to="/doc/button">Button</router-link></li>
          <li><router-link to="/doc/dialog">Dialog</router-link></li>
          <li><router-link to="/doc/tabs">Tabs</router-link></li>
        </ol>
      </aside>
      <main><router-view></router-view></main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";

import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: lightblue;
  width: 170px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 9;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
        >a{
          display: block;
          
        padding: 4px 16px;
        }
      >.router-link-active{
        background: white;

}
    }
  }
}
main {
  margin-left: 20px;
  overflow: auto;
}
</style>
