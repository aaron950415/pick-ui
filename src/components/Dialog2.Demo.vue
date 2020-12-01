<demo>
Quick Settings</demo>
<template>
  <div>
    <h1>Sample 2</h1>
    <Button @click="showDialog">toggle</Button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        tittle: "tittle",
        content: "h1h2",
        ok() {},
        cancel() {},
        closeOnClickOverlay: true,
      });
    };
    return { showDialog };
  },
};
</script>
