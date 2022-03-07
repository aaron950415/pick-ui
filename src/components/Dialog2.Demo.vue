<demo>
Quick Settings</demo>
<template>
  <div>
    <h1>Sample 2</h1>
    <Button @click="showDialog">toggle</Button>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance } from 'vue';
export default {
  setup() {
    const currentInstance = getCurrentInstance()
    const {openDialog}=currentInstance.appContext.config.globalProperties
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
