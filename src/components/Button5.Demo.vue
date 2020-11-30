<demo>
Support Loading</demo>
<template>
  <div>
    <h1> Sample5</h1>
    <div>
      <Button loading>Loading</Button>
      <Button>Loaded</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
</style>
