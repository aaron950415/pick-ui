<template>
  <h1>Columns powered by Flexbox</h1>
  <Demo :component="BasicsDemo" ></Demo>
</template>

<script lang="ts">
import BasicsDemo from "./Basics.Demo.vue";
import Demo from "../Demo.vue";
export default {
  components: { Demo },
    setup() {
    return { BasicsDemo, };
  },
};
</script>
