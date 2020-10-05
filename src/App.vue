<template>
  <router-view />|<router-link to="/">22222 </router-link>|<router-link
    to="/doc"
    >doc</router-link
  >
</template>

<script lang="ts">
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const asideVisible = ref(false);
    provide("asideVisible", asideVisible);
  },
};
</script>
