<template>
  <router-view />|<router-link to="/">22222 </router-link>|<router-link
    to="/doc"
    >doc</router-link
  >
</template>

<script>
import { provide } from "vue";

export default {
  name: "App",
  setu() {
    const asideVisible = ref(false);
    provide("xx", asideVisible);
  },
};
</script>
