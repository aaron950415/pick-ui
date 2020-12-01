<demo>
Basic Use</demo>
<template>
  <div>
    <h1>Sample 1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :ok="fn1"
      :cancel="fn2"
      :closeOnClickOverlay="false"
    >
      <template v-slot:tittle>
        <h1>title</h1>
      </template>
      <template v-slot:content>
        <p>h1</p>
        <p>h2</p>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Button, Dialog } from "../lib/index";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    let x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      x.value = !x.value;
    };
    const fn2 = () => {
      x.value = !x.value;
    };
    return { x, toggle, fn1, fn2 };
  },
};
</script>