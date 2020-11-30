<template>
  <div>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :ok="fn1"
      :cancel="fn2"
      :closeOnClickOverlay="false"
    >
      <template v-slot:tittle>
        <h1>标题改</h1>
      </template>
      <template v-slot:content>
        <p>h1</p>
        <p>h2</p>
      </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">toggle</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog";
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
    const fn2 = () => {x.value = !x.value;};
    const showDialog = () => {
      openDialog({ tittle: "tittle", content: "h1h2",ok(){},cancel(){},closeOnClickOverlay:true});
    };
    return { x, toggle, fn1, fn2, showDialog };
  },
};
</script>

<style lang="scss" scoped>
</style>
