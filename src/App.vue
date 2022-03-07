<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, provide, ref } from "vue";
import { router } from "./router";
const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 800 ? false : true);
provide("asideVisible", asideVisible);
onMounted(async () => {
  window.addEventListener("resize", screenSizeChange);
});

const screenSizeChange = () => {
  if (document.body.clientWidth <= 800) {
    asideVisible.value = false;
  } else {
    asideVisible.value = true;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", screenSizeChange);
});
router.afterEach(() => {
  if (width <= 800) {
    asideVisible.value = false;
  }
});
</script>
