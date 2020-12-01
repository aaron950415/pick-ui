<template>
  <div>Tabs Template</div>
  <Demo :component="TabDemo"></Demo>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabDemo from "./Tab.Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { TabDemo }
  },
};
</script>

