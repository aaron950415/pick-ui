<template>
  <div>
    <h1>Switch Template</h1>
    <Demo :component="SwitchDemo"></Demo>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import SwitchDemo from "./Switch.Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { SwitchDemo };
  },
};
</script>

