<template>
  <router-view />
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { router } from "./router";

const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 800 ? false : true);
provide("asideVisible", asideVisible);
router.afterEach(() => {
  if (width <= 800) {
    asideVisible.value = false;
  }
});
</script>
