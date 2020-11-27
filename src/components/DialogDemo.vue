<template>
  <div>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="fn1" :cancel="fn2" :closeOnClickOverlay="false"
      >
      <template v-slot:tittle>
        <h1>
          标题改
        </h1>
      </template>
      <template v-slot:content>
      <p>h1111111111111</p>
      <p>h2</p>
      </template>
</Dialog
    >
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {};
    return { x, toggle, fn1, fn2 };
  },
};
</script>

<style lang="scss" scoped>
</style>
