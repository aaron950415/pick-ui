<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="pick-icon" v-if="toggleMenuButtonVisible">
        <use xlink:href="#icon-pig"></use>
      </svg>
    </router-link>
    <ul class="menu" v-if="!toggleMenuButtonVisible">
      <li><router-link to="/doc">Documentation</router-link></li>
    </ul>
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleMenu"
    >
      <svg class="pick-icon">
        <use xlink:href="#icon-caidan"></use></svg
    ></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 20;
  display: flex;
  padding: 16px;
  justify-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > .pick-icon {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    font-size: 20px;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 800px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
