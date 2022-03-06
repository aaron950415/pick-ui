<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h3>Overview</h3>
        <ol>
          <li><router-link to="/doc/intro">Introduction</router-link></li>
          <li><router-link to="/doc/install">Installation</router-link></li>
          <li><router-link to="/doc/basicUsage">Basic Usage</router-link></li>
        </ol>
        <h3>Library</h3>
        <div>
          <h2 @click="changeVisibleStatus(`columns`, elementsVisible['columns'])">
            Columns
          </h2>
          <ol v-if="elementsVisible['columns']">
            <li><router-link to="/doc/basics">Basics</router-link></li>
          </ol>
        </div>
                <div>
          <h2 @click="changeVisibleStatus(`elements`, elementsVisible['elements'])">
            Elements
          </h2>
          <ol v-if="elementsVisible['elements']">
            <li><router-link to="/doc/switch">Swich</router-link></li>
            <li><router-link to="/doc/button">Button</router-link></li>
            <li><router-link to="/doc/dialog">Dialog</router-link></li>
            <li><router-link to="/doc/tabs">Tabs</router-link></li>
          </ol>
        </div>
      </aside>
      <main><router-view></router-view></main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";

import { inject, onMounted, onUnmounted, provide, Ref, ref } from "vue";
export default {
  components: { Topnav },

  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    let toggleMenuButtonVisible =ref(true)
    let elementsVisible = ref({
      elements: false,
      columns:false
    });

    onMounted(async () => {
      window.addEventListener('resize', screenSizeChange)
    })
    const changeVisibleStatus = (key,value) => {
      elementsVisible.value[key]=!value
      
    };

    const screenSizeChange=()=>{
      if(document.body.clientWidth <= 800){
        asideVisible.value =false;
      }else{
        asideVisible.value =true
      }
    }
    onUnmounted(() => {
      window.removeEventListener('resize', screenSizeChange)
    })
    return { asideVisible, elementsVisible, changeVisibleStatus };
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
    h3 {
      font-weight: bold;
      color: #b5b5b5;
    }
    h2 {
      font-weight: bold;
      margin-left: 10px;
    }
    @media (max-width: 800px) {
      padding-left: 0;
      h3 {
        font-size: 20px;
      }
      h2 {
        font-size: 20px;
      }
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
    background: white;
  }
}
aside {
  
  user-select:none;
  background: #fafafa;
  width: auto;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 9;
  h3 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-size: 20px;
  }
  h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-size: 20px;
    &:hover {
      color: #00d1b2;
      border-radius: 15px;
      background-color: white;
    }
  }
  ol {
    padding: 0 10px 0 20px;
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      :hover {
        background: white;
        color: #00d1b2;
        border-radius: 15px;
      }
      > .router-link-active {
        background: #00d1b2;
        color: white;
        border-radius: 15px;
      }
    }
  }
}
main {
  margin-left: 20px;
  overflow: auto;
}
</style>
