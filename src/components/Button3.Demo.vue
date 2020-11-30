<demo>
Support Level</demo>
<template>
  <div>
  <h1>Sample 3</h1>
  <div>
    <div>
      <Button level="main">Main Button</Button><Button>Normal Button</Button
      ><Button level="danger">Danger Button</Button>
    </div>
        <div>
      <Button  theme="link" level="main">Main Link Button</Button><Button theme="link" >Normal Link Button</Button
      ><Button  theme="link" level="danger">Danger Link Button</Button>
    </div>
        <div>
      <Button theme="text" level="main">Main Text Button</Button><Button theme="text">Normal Text Button</Button
      ><Button theme="text" level="danger">Danger Text Button</Button>
    </div>
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
