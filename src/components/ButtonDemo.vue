<template>
  <h1>Button Template</h1>
  <Demo :component="Button1Demo" ></Demo>
  <Demo :component="Button2Demo" ></Demo>
  <Demo :component="Button3Demo" ></Demo>
  <Demo :component="Button4Demo" ></Demo>
  <Demo :component="Button5Demo" ></Demo>
</template>

<script lang="ts">
import Button1Demo from "./Button1.Demo.vue";
import Button2Demo from "./Button2.Demo.vue";
import Button3Demo from "./Button3.Demo.vue";
import Button4Demo from "./Button4.Demo.vue";
import Button5Demo from "./Button5.Demo.vue";
import Demo from "./Demo.vue";
export default {
  components: { Demo },
    setup() {
    return { Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo };
  },
};
</script>
